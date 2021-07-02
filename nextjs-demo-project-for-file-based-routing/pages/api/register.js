function HandleRegister(req, res){
    if(req.method === 'POST'){
        const email = req.body.email;
        return res.status(200).json({"message":`${email} added!!`})
    }
    return res.status(200).json({"message":"API Started"})
}
export default HandleRegister;