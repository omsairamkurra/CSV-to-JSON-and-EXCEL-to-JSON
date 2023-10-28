const csvtojson = require('csvtojson');
const fs = require('fs');

const csvFilePath = "currency.csv";

csvtojson()
  .fromFile(csvFilePath)
  .then((json) => {
    // Convert JSON to a string
    const jsonString = JSON.stringify(json, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync("output.json", jsonString, "utf-8", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON file has been written successfully.");
      }
    });
  })
  .catch((error) => {
    console.error("Error converting CSV to JSON:", error);
  });




//solution
 [ 
  {
  "Code": "AED",
  "Symbol": "د.إ",
  "Name": "United Arab Emirates d"
},
{
  "Code": "AFN",
  "Symbol": "؋",
  "Name": "Afghan afghani"
},
]