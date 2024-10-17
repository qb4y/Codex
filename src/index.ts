import express, {Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('No LO Hagas Gokuuuuuuuuuuuu!');
  });

app.listen(port, () => {
    console.log('Servidor en el puerto: ', port)
})