const fs=require("fs")
const csv=require("csv-parser")
var results = []  // array to store the parsed CSV file data

const readCSVFile=()=>{
    fs.createReadStream('currency.csv')
    .pipe(csv())
    .on('data', (data) =>results.push(data))
    .on('end',()=>{
        console.log(`Parsed ${results.length} lines`)
        for(const result of results)
        {
            console.log(`Code: ${result.Code} Symbol:${result.Symbol} Name:${result.Name}`)
        }
    })
}

readCSVFile()

solution in console
// Code: AED Symbol:د.إ Name:United Arab Emirates d
// Code: AFN Symbol:؋ Name:Afghan afghani
// Code: ALL Symbol:L Name:Albanian lek