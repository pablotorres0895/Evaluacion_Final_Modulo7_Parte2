const mongoose = require('mongoose')

const Schema = mongoose.Schema

let EventSchema = new Schema({
    eventId: { type: Number, required: true, unique: true},
    userId: { type: String, required: true },
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: false}
})

let EventModel = mongoose.model('Event', EventSchema)

module.exports = EventModel