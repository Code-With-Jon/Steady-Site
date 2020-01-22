
const Subscriber = require('../../models/Subscriber');


module.exports = {
    create
}

async function create(req, res) {
    const subscriber = await Subscriber.create(req.body);
    res.status(201).json(subscriber)
}