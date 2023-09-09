import mongoose from 'mongoose';
// import { workWatcher, employerWatcher } from '../watchers/watchers.js';
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

export default connectDB;