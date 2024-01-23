const Login = require('../model/Login');

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await Login.findOne({ email });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if password is correct
        const isPasswordValid = await user.comparePassword(password);

        // If password is incorrect, return error
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // If user and password are valid, return success
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
