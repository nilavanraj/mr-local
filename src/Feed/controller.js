
const createFeed = (req,res,__dirname) =>{
// console.log(req.body)
res.send([{
    title:"What-Bill-Gates-is-afraid-of",
    video:`/videos/What-Bill-Gates-is-afraid-of.mkv`,
    sub:[{
        lang:"English",
        path:"/sub/English.json"
    },
    {
        lang:"German",
        path:"/sub/German.json"
    },
    {
        lang:"Spanish",
        path:"/sub/Spanish.json"
    }]
}]) 
}
export default createFeed;