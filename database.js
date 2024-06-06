const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;
console.log('MongoDB URI:', uri); // Add this line to debug

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://anmolgaur005:anmol2005@mycluster01.ebv16sh.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000 // Increase timeout to 50 seconds
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongoDB;
 
