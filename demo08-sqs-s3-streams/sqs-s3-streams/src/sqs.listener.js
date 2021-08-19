class Handler {
    async main(event) {
        const [{body}] = event.Records
        const item = JSON.parse(body)
        try {
            return {
                statusCode: 200,
                body: 'Hello'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'internal error'
            }
        }
    }
}

const handler = new Handler()

module.exports = handler.main.bind(handler)