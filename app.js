const express = require('express')
const app = express()
const mysql = require("mysql")

let connectionString = "mysql://root@localhost/databazeShop"
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static("root"))


app.get("/", (req, res) => {

    const dotaz = "SELECT * from produkty"
    const connection = mysql.createConnection(connectionString)
    connection.query(dotaz, (err, resultData) => {
        if (err) {
            res.status(500).send(err.message)
            return
        }
            res.render('index', {
                titulek: "První",
                nadpis: "Ahoj",
                produkty: resultData
            })
    })
});
// const userRouter = require("./routes/users")
// app.use("/users", userRouter)


app.listen(81); 