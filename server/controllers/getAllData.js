// Import the required model
const YourModel = require('../model/userSchema');

// Define the controller function
const getAllData = async (req, res) => {
    try {
        // Fetch all data from the database
        console.log("getAllData",req.body)
        const allData = await YourModel.find({accType: req.body.accType});

        // Send the fetched data in the response
        res.status(200).json({
            success: true,
            data: allData
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching data'
        });
    }
};

// Export the controller function
module.exports = {
    getAllData
};
