// Import the Express framework module
const express = require('express')

// Create an Express application instance
const app = express()

// Import Zod for schema validation
const zod = require('zod')

// Define the port number
const port = 4000

// Define a schema for request body validation using Zod
const schema = zod.object(
    {
        username: zod.string(),
        password: zod.string(),
        age: zod.number(),
        country: zod.literal("US").or(zod.literal("UK"))
    }
)

// Middleware to parse JSON bodies
app.use(express.json())

// Handle POST requests to the root endpoint
app.post('/', (req, res) => {
    // Extract the 'output' field from the request body
    const output = req.body.output

    // Validate the 'output' against the defined schema
    const response = schema.safeParse(output)

    // If validation fails, send an error response
    if (!response.success) {
        res.send("error")
    }
    // If validation succeeds, send the parsed data as response
    else
        res.send(response)
})

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`running on ${port}`)
})


/*
Summary:
This script creates an Express application that listens on port 4000.
It defines a JSON schema using Zod to validate POST request bodies.
When a POST request is made to the root endpoint, it parses the request body,
validates it against the schema, and sends either an error response or the parsed data.
*/
