const Joi = require('joi');
const Account = require('models/Account');

exports.localRegister = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);

    if(result.error) {
        ctx.status = 400;
        return;
    }

    let existing = null;
    try {
        existing = await Account.findByEmailOrUsername(ctx.request.body);
        console.log("-------중복노!!!!",existing)

    } catch (e) {
        ctx.throw(500, e);
    }

    if(existing) {
        ctx.status = 409;
        ctx.body = {
            error: '오류오류',
            key: existing.email === ctx.request.body.email ? 'email' : 'username'
        };
        console.log(ctx)
        console.log(ctx.body)

        return;
    }

    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }
    
    let token = null;
    try {
        token = await account.generateToken();// 회원가입에서 토큰을 왜 발행하지?-> 로그인 페이지로 이동시 토큰 발행 필요없음
        // 회원가입시 홈페이지로 이동하게끔 구현했기 때문에 토큰 발행후, local storage에 담아야함.
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 24 * 7})// 1000ms * 60s * 60min * 24 hr * 7 days
    //name:'access_token' value: token
    // leave httpOnly option to be true when not using the cookie in the client side code
    ctx.body = account.profile; // 프로필 정보로 응답합니다.

};

// 로컬 로그인
exports.localLogin = async (ctx) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);

    if(result.error){
        ctx.status = 400;
        return;
    }

    const { email, password } = ctx.request.body;

    let account = null;
    try {
        account = await Account.findByEmail(email);
    } catch (e) {
        ctx.throw(500, e);
    }

    if(!account || !account.validatePassword(password)) {
        ctx.status = 403;
        return;
    }

    let token = null;
    try {
        token = await account.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }
    
    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = account.profile;
};

// 이메일 / 아이디 존재유무 확인
exports.exists = async (ctx) => {
    const { key, value } = ctx.params;
    let account = null;

    try {
        account = await (key === 'email'? Account.findByEmail(value) : Account.findByUsername(value));
    } catch (e) {
        ctx.throw(500,e);
    }
    ctx.body = {
        exists: account !== null // 응답 데이터는 { exists: true } 형식
    };
};

// 로그아웃
exports.logout = async (ctx) => {

    ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
    })
    ctx.status = 204;
};

exports.check = (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403;
        return;
    }
    ctx.body = user.profile;
}