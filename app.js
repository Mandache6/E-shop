const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))


app.get("/", (req, res) => {
    console.log("Hello World")
    res.render("index")
    connection.query(sql, (err, resultData) => {
        if (err) {
            res.status(500).send(err.message)
            return
        }
        console.log(resultData)
        for (const produkt of produkty)
            res.render('index', {
                titulek: "První",
                nadpis: "Ahoj",
                produkty: resultData
            })
    })
});
const userRouter = require("./routes/users")
app.use("/users", userRouter)


app.listen(1500); 