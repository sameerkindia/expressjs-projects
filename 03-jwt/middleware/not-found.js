const notfound = (req,res,next)=>{
    res.status(404).send('page not found')
}

module.exports = notfound