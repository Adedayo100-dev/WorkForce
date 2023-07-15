const mongoose = require('mongoose');
const { workWatcher, employerWatcher } = require('../watchers/watchers')
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        })
        
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB