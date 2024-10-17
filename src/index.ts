import express, {request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
  });

app.listen(port, () => {
    console.log('Servidor en el puerto: ', port)
})