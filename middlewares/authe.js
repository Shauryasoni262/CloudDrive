const jwt = require('jsonwebtoken')

function auth(req,res,next) {

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }

    try{

const decoded = jwt.verify(token, process.env.JWT_SECRET)

req.user = decoded
    console.log("✅ Authenticated user ID:", req.user.userId);
return next()

    }catch (err) {

return res.status(401).json({
    message: "unauthorized"

})
    }
}

module.exports = auth