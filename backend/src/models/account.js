const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { generateToken } = require('lib/token');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}
// SECRET_KEY 로 Hmac sha256 한다음 password를 업데이트하고, hex로 변경
const Account = new Schema({
    profile: {
        username: String,
        thumbnail: { type: String, default: '/static/images/default_thumbnail.png'}
    },
    email: { type: String },
    social: {
        facebook: {
            id: String,
            accessToken: String
        },
        google: {
            id: String,
            accessToken: String
        }
    },
    password: String,
    thoughtCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})
//create methods by using statics, methods
//메소드를 만들땐, 스키마를 모델화 하기 전에, .statics 혹은 .methods 를 사용하여 정의를 해주어야한다.



Account.statics.findByUsername = function(username){
    return this.findOne({'profile.username': username}).exec();
}

Account.statics.findByEmail = function(email){
    return this.findOne({email}).exec();
}//mongoose 찾는 부분

Account.statics.findByEmailOrUsername = function({username,email}){
    return this.findOne({
        $or: [
            { 'profile.username': username },
            { email }
        ]
    }).exec();
}

Account.statics.localRegister = function({ username, email, password }){
    const account = new this({
        profile: {
            username
        },
        email,
        password: hash(password)
    });
    return account.save(); //mongoDB save
}

Account.methods.validatePassword = function(password){
    const hashed = hash(password);
    return this.password === hashed;
}

Account.methods.generateToken = function(){
    const payload = {
        _id: this._id,
        profile: this.profile
    };
    return generateToken(payload, 'account');
}
module.exports = mongoose.model('Account', Account);
//첫번째 인자가 db 이름, 자동으로 복수 형태로 입력됨.