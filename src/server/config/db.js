const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://adedayoemmanuelt:Adedayo1234@cluster0.ohezeap.mongodb.net/WorkForce?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB