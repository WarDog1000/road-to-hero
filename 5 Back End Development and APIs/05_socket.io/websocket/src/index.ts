import {app} from './app'
import { connection } from './connection'

async function main() {
   try {
     
    // DB CONNECTION
    await connection()

    // LISTEN
    app.listen(app.get('port'), () => console.log(`Server listen on port: ${app.get('port')}`))
    
   } catch (error) {
    console.log(error)
   }
}

main()