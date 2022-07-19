const createFeed = (req,res,__dirname) =>{
// console.log(req.body)

res.send([{
    title:"What-Bill-Gates-is-afraid-of",
    video:`/videos/What-Bill-Gates-is-afraid-of.mkv`,
    sub:`/sub/What_Bill_Gates_is_afraid_of.vtt`
}]) 
}
export default createFeed;