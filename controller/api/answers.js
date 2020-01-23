const Game = require('../../models/Game');

module.exports = {
    index,
    show,
    create,
};


async function index(req, res) {
    const answers = await Game.find({});
    res.status(200).json(answers);
}

async function show(req, res) {
    const answers = await Game.findById(req.params.id);
    res.status(200).json(answers);
}

async function create(req, res) {
    let question = []
    let answer = []
    for (let key in req.body) {
        question.push(req.body[key].question)
        answer.push(req.body[key].answer)
    }
    req.body.question = question
    req.body.answer = answer
    const answers = await Game.create(req.body);
    res.status(201).json(answers);
}