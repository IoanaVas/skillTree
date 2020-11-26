import express from 'express'
import expressApiVersioning from 'express-api-versioning'

const app = express()

// const config = {
//   apiPath: path.join(__dirname, './api'),
//   test: /\/api\/(v[0-9]+).*/,
//   entryPoint: 'index.js',
//   instance: app
// }

app.use(expressApiVersioning(config, 
  (error, req, res, next) => {
    const status = 500
    const message = error
    res.status(status).send({ status, message });
}))

app.listen(8080, () => console.log('Listening in port 8080'))

export default app
