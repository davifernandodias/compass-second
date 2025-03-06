import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
export const soma = 2
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
