const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vidyadonthagani:Vidya2004@cluster0.xbz07xv.mongodb.net/ComplaintsData?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})