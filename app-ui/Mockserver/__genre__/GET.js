module.exports = (req,res) => {
   
  res.status(200).json({
    genre: req.params.genre,
    title : "No longer Human",
    author: "Ozuna Dazai"

});
}