import  {Hono }from 'hono'
import "dotenv/config"
import {logger} from 'hono/logger'
import {userRouter} from '../src/users/users.router'
import {authRouter} from '../src/authentication/auth.router'
import { therapistRouter } from './therapists/therapists.router'
import { sessionRouter } from './session/session.router'
import { diagnosticRouter } from './diagnostics/diagnostics.router'
import { feedbackRouter } from './feedback/feedback.router'
import {paymentRouter} from './payments/payments.router'
import {bookingRouter } from './bookings/bookings.router'
import {resourcesRouter} from './resources/resources.router'
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
app.route("/api",sessionRouter)
app.route("/api",diagnosticRouter)
app.route("/api", feedbackRouter)
app.route("/api", paymentRouter)
app.route("/api", bookingRouter)
app.route("/api", resourcesRouter)
serve({
    fetch: app.fetch,
    port:Number(process.env.PORT)
  })