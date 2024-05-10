const User = require('../model/userSchema'); // Import the User model

// Controller function to update user profile
exports.updateProfile = async (req, res) => {
    try {
        const { userId } = req.params; // Extract user ID from request parameters
        
        const { image, displayName, bio, phone, email,  password } = req.body; // Extract updated profile data from request body

        // Find the user by ID and update their profile data
        const updatedUser = await User.findOneAndUpdate(
            {googleId:userId}, { image, displayName, bio, phone, email,  password }, { new: true });

        // If user is not found, return 404 error
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Return success response with updated user data
        res.status(200).json({ success: true, message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        // Handle errors
        console.error('Error updating profile:', error);
        res.status(500).json({ success: false, message: 'Failed to update profile' });
    }
};


