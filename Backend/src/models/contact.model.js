import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    teamSize: {
        type: String,
        required: true
    },
    interestedIn: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const contactModel = mongoose.model('Contact', contactSchema)