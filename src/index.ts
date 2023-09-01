import express from 'express'
import router from './routers'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.get('/', (_, res) => res.send('auth-service is healthy!'))

app.use('/', router)

app.listen(PORT, () => console.log(`Server up: ${HOSTNAME}:${PORT} 🚀`))