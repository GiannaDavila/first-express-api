import express, { response } from 'express'

const app = express()

app.get("/test", (request, response) => {
    response.send({ message: "It's all good man!" })
})

app.get('/', (request, response) => responce.send({ message: 'Welcome to our first api' }))

app.get('/error', (request, reponce) => response
    .status(500)
    .send({ message: "something went wrong", succes: true }))

app.listen(3030, () => console.log("Listening on http://localhost:3030 ..."))
