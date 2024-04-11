import app from './app'
// import { connection } from './connection'

// database connection
// connection().then(() => console.log("DataBase conexion ready"))

// server listening
app.listen(app.get('port'), () => console.log(`Server listen on port:${app.get('port')}`))