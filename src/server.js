const expresss = require ("express");
const app = expresss()
const port = 3000

app.get('/',(req, res)=> {
    res.send('hello world!')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})