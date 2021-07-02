function HandleComment(req, res) {
  const eventId = req.query;
  if (req.method === "POST") {
    const {email , name , text} = req.body;
    const newComment = {
        id :new Date().toISOString(),
        email,
        name,
        text
    }
    return res.status(200).json({ message: `new Comment added for!! ${eventId}`, comment: newComment });
  }
  if (req.method === "GET") {
    const dummyComments = [
        {
            id:1, name:'malhar', text: 'A First Comment'
        }
    ]
    return res.status(200).json({ comments: dummyComments  });
  }
}
export default HandleComment;
