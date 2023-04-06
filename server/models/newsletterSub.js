const mongoose = require('mongoose')

const newsletterSubSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const NewsletterSub = mongoose.model('NewsletterSub', newsletterSubSchema)

module.exports = NewsletterSub