function Handler(req,res){
    if(req.method === 'POST'){
       const email= req.body.email;
       const feedback = req.body.feedback;
       const newfeedback = {
           id: new Date().toISOString(),
           email: email,
           feedback: feedback,
       } 
    }
    res.status(200).json({
        message:"Worked!!!"
    })
}
export default Handler