import  {Hono }from 'hono'
import "dotenv/config"
import {logger} from 'hono/logger'
import {userRouter} from '../src/users/users.router'
import {authRouter} from '../src/authentication/auth.router'
import { therapistRouter } from './therapists/therapists.router'
import { serve } from '@hono/node-server'
import {cors} from 'hono/cors'

const app = new Hono();
app.get('/', (c) => {
    return c.text('the code is okay')
  })

//middleware
  app.use('*', cors())

//routes
app.route("/api",userRouter)
app.route("/api",authRouter)
app.route("/api",therapistRouter)


serve({
    fetch: app.fetch,
    port:Number(process.env.PORT)
  })