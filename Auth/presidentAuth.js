const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
module.exports = {
    presidentAuthMiddleWare: async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, String(process.env.TOKEN_SECRET));
            console.log(decode)
            req.adminData = decode;
            const exist = await president.findOne({ email: decode.userName });
            console.log(exist)
            if (!exist) {
                return res.status(200).json({
                    status: "fail",
                    message: 'Please login as president',

                });
            }
            if (!(decode?.exp)) {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Your token has expired. Please login again',
                });
            }
            const expirationDateTimeInSeconds = decode?.exp * 1000;
            if (Date.now() > expirationDateTimeInSeconds) {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Your token has expired. Please login again',

                });

            }

            next()
        } catch (error) {
            return res.status(200).json({
                status: 'fail',
                message: 'Your token has expired. Please login again',
            });
        }
    }
};