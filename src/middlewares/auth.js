import jwt from 'jsonwebtoken'

export function authenticateToken(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1]

    if(!token){
        return res.status(401).json({ error: 'Access Denied, no token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({ error: 'Inavalid token' })
            
        req.user = user
        next()
    })
}

export function authorizeRole(...allowedRoles){
    return (req, res, next) => {
        if(!req.user){
            return res.status(401).json({ error: 'Not authenticated'})
        } 

        if(allowedRoles.includes(req.user.role)){
            return res.status(403).json({ error: 'Access Denied, insufficient permissions'})
        }

        next()
    }
}