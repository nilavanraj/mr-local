
const createFeed = (req,res,__dirname) =>{
// console.log(req.body)
res.send([{
    title:"What-Bill-Gates-is-afraid-of",
    video:`/videos/What-Bill-Gates-is-afraid-of.mkv`,
    sub:[{
        lang:"English",
        path:"/sub/English.srt"
    },
    {
        lang:"German",
        path:"/sub/German.srt"
    },
    {
        lang:"Spanish",
        path:"/sub/Spanish.srt"
    }]
}]) 
}
export default createFeed;