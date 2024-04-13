import { connect } from 'mongoose'
import config from '../config'

async function connection(): Promise<void> {
  
  const DB_URI = <string> config.DB.URI

  await connect(DB_URI).then(() => {
    console.log('Database connected')
  })

}

export { connection }