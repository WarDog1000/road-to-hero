import { connect } from 'mongoose'
import { config } from '../config'

export async function connection(): Promise<void> {
  
  const DB_URI = <string> config.DB_URI

  await connect(DB_URI).then(() => {
    console.log('Database connected')
  })

}