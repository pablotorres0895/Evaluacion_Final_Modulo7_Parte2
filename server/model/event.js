const mongoose = require('mongoose')

const Schema = mongoose.Schema

let EventSchema = new Schema({
    eventId: { type: Number, required: true, unique: true},
    userId: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true},
    startHour: { type: String, required: true},
    endDate: { type: Date, required: true},
    endHour: { type: String, required: true},
})

let EventModel = mongoose.model('Event', EventSchema)

module.exports = EventModel