import 'dotenv/config'
import getenv from 'getenv'
import fastify from 'fastify'

const PORT = getenv('PORT')

const app = fastify()

await app.listen({ port: Number(PORT) })
console.log(`\n\napp listening on port ${PORT}`)
