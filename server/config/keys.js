module.exports = {
    app: {
        name: '',
        apiEndpoint: process.env.API_URL ? `/${process.env.API_URL}` : '/api'
    },
    database: {
        url: process.env.MONGODB_URL
    },
}