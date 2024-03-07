const express = require("express") // Importing the Express framework
const zod = require('zod') // Importing the Zod validation library
const port = 3000 // Setting the port number for the server
const app = express() // Creating an instance of the Express application


const schema = zod.array(zod.number()); // Creating a Zod schema for validating an array of numbers

app.use(express.json()) // Adding middleware to parse JSON request bodies


app.get('/',(req,res)=>{

const kidneys = req.body.kidneys; // Extracting the 'kidneys' field from the request body
const response = schema.safeParse(kidneys) // Validating the 'kidneys' array against the Zod schema
res.send(response) // Sending the response

})


app.listen(port,()=>{
  console.log(`running on ${port}`) // Starting the server and logging a message when it's running
}) 

/* 
Summary:
This code sets up an Express server listening on port 3000.
It parses incoming JSON requests using the express.json() middleware.
There's a route defined for handling GET requests to the root ('/') endpoint, 
which is supposed to handle a request containing an array of numbers in the 'kidneys' field of the request body. 
It then attempts to validate this array using Zod schema, specifically expecting an array of numbers.
If successful, it sends the parsed response; otherwise, it likely sends an error.
*/ 
