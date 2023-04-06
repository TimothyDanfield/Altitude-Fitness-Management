const express = require('express')
const BlogSub = require('../models/blogSub')
const NewsletterSub = require('../models/newsletterSub')

const router = express.Router()
// all endpoints in this page start with /api
router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'server works' })
})

// Blog endpoints
router
    .route('/blog')
    .get(async (req, res, next) => {
        const blogUsers = await BlogSub.find({})
        return res.status(200).send(blogUsers)
    })
    .post(async (req, res, next) => {
        const { name, email } = req.body
        if (!(name && email)) {
            return res.status(409).send({ error: "Please provide a name and email" })
        }
        const existingSub = await BlogSub.find({ email })
        if (existingSub.length > 0) {
            return res.status(409).send({ error: "You're already subscribed" })
        }
        const newBlogSub = new BlogSub({ name, email })
        await newBlogSub.save()
        return res.status(200).send({ success: "Subscribed" })
    })
    .delete(async (req, res, next) => {

    })


// Newsletter endpoints
router
    .route('/newsletter')
    .get(async (req, res, next) => {
        const newsletterUsers = await NewsletterSub.find({})
        return res.status(200).send(newsletterUsers)
    })
    .post(async (req, res, next) => {
        const { email } = req.body
        if (!email) {
            return res.status(409).send({ error: "Please provide an email" })
        }
        const existingSub = await NewsletterSub.find({ email })
        if (existingSub.length > 0) {
            return res.status(409).send({ error: "You're already subscribed" })
        }
        const newNewsletterSub = new NewsletterSub({ email })
        await newNewsletterSub.save()
        return res.status(200).send({ success: "Subscribed" })
    })
    .delete(async (req, res, next) => {

    })


module.exports = router