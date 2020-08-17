const User = require('../../../model/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function (req, res) {

    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user || user.password != req.body.password) {
            return res.status(422).json({
                message: 'Invalid Username or Password'
            });
        }
        return res.status(200).json({
            message: 'Signin in successful',
            data: {
                token: jwt.sign(user.toJSON(), 'sponsertruck', { expiresIn: '10000' })
            }
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}