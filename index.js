const express = require('express');

const app = express();

const rootCall= (req, res)=>{
   res.send("thank you very much");
}

app.get('/', rootCall);
app.listen(3000, ()=>console.log("listening to port 3000"))