const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("Api is running..");
})

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>
        n._id===req.params.id
    );
    res.send(note);
});

// app.get("/api/notes/:id/id2",(req,res)=>{
//     const note = notes.find((n)=>{
//         n._id===req.params.id
//     });
//                                          then params will give both id and id2
// })


const PORT =process.env.PORT || 5000;
app.listen(5000,console.log(`Server started on port ${PORT}`));