
// // router.get('/user',(req,res)=> {

// // })

// exports.userLogin = (req,res)=> {
//     res.send('userLogin');
// }

// const router = require('express').Router();

// const user = require("../../controller/user")
// const {authenticate} = require('../../lib/auth/jwt')

// router.route('/user')
//     .get(authenticate, user.userLogin)


// //자동 로그인
// router.route('/token')
//     .get(authenticateAccessToken, (req,res)=> {
//         console.log(req.user)
//         res.send(req.user)
//     })
//     .post((req, res)=> {
//         const refreshToken = req.body.refreshToken;
//         if(!refreshToken) return res.sendStatus(403);
//         const accessToken = token().issuance(refreshToken,res)
//         console.log(accessToken)
//         res.json({accessToken})
//     })

// const authenticateAccessToken = (req,res,next)=> {
//     let authHeader = req.headers["authorization"];
//     let token = authHeader && authHeader.split("")[1];

//     if(!token) return res.sendStatus(400);
    
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user)=> {
//         if(error) return res.sendStatus(403);

//         req.user = user;
//         next();
//     })
// }
// module.exports = router