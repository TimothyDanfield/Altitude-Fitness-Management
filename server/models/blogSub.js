const mongoose = require('mongoose')

const blogSubSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
    }
}, { timestamps: true })

const BlogSub = mongoose.model('BlogSub', blogSubSchema)

module.exports = BlogSub