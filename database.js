const mongoose = require('mongoose');


const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://anmolgaurug22:anmol2005@mycluster01.tsewde3.mongodb.net/Restaurant", {
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
 
