const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;
console.log('MongoDB URI:', uri); // Add this line to debug

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri, {
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
 