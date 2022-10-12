import 'dotenv/config'
import getenv from 'getenv'
import middie from '@fastify/middie'
import fastify from 'fastify'
import { renderPage } from 'vite-plugin-ssr'

const PORT = getenv('PORT')

const app = fastify()

await app.register(middie, { hook: 'onRequest' })

app.register(async (app) => {
  const { createServer } = await import('vite')
  const { default: config } = await import('../vite.config')
  const { middlewares } = await createServer({
    ...config,
    server: {
      middlewareMode: true
    }
  })
  const excluded = [
    'viteSpaFallbackMiddleware',
    'viteIndexHtmlMiddleware',
    'vite404Middleware'
  ]
  middlewares.stack = middlewares.stack.filter(layer => {
    return !excluded.includes((layer.handle as Function).name)
  })
  app.use(middlewares)
  app.get('*', async (req, res) => {
    const pageContext = await renderPage({
      urlOriginal: req.raw.url
    })
    if (pageContext.errorWhileRendering != null) throw pageContext.errorWhileRendering
    if (pageContext.httpResponse == null) return res.callNotFound()
    const { body, statusCode, contentType } = pageContext.httpResponse
    res.status(statusCode).type(contentType).send(body)
  })
})


await app.listen({ port: Number(PORT) })

console.log(`\n\napp listening on port ${PORT}`)
