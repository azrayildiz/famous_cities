const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
let connectionString = process.env.MONGODB_CONNECTION_STRING

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.knvjh.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

mongoose.set('debug', false)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('connection established'))
  .catch(console.log)

// const Panda = mongoose.model('Panda', { name: String, age: Number })

// async function main() {
//   const pandas = await Panda.find({ age: { $lte: 18, $lte: 21 }, name: 'haluk' })
//   console.log(pandas)
// }

// const panda = new Panda({ name: 'elif', age: 27 })
// panda.save().then(() => console.log(`we have a new panda, ${panda.name}!`))
