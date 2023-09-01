import express from 'express'

const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.listen(PORT, () => console.log(`Server up: ${HOSTNAME}:${PORT} 🚀`))