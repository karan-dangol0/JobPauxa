import jwt from "jsonwebtoken";

const checkAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader("Bearer")) {
        return res.status(401).json({success: false, message: "No access token" });
    }
    
    const token = authHeader.split("")[1];
    try {
        const decoded =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 
        req.userId = decoded.userId;
        next();
    } catch (error) {
       return res.status(401).json({success: false, message: "Access token expired" }); 
    }
}
export default checkAuth;