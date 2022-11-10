const Question = require('models/questions');

exports.list = async (ctx) => {

    let questions;

    try {
        questions = await Question.find()
    } catch(e) {
        return ctx.throw(500,e);
    }

    ctx.body = questions
}

exports.create = async (ctx) => {
    console.log('request')
    const {
        question
    } = ctx.request.body;

    const q = new Question({
        question
    })

    try {
        await q.save();
    } catch(e) {
        return ctx.throw(500, e)
    }
    
    ctx.body = q
}

