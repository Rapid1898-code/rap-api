const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

let rappers = {
    "21 savage": {
        "age": 28,
        "birthname": "Sayaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    "chance the rapper": {
        "age": 27,
        "birthname": "Canchacelor Joe",
        "birthLocation": "Chigaco, Illinois"
    },
    "unknown": {
        "age": 47,
        "birthname": "N/A",
        "birthLocation": "N/A"
    },
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")    
})

app.get("/api/rappers/:rapperName", (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if (rappers[rapName]) {
        response.json(rappers[rapName])
    } else {
        response.json(rappers["unknown"])
    }    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})