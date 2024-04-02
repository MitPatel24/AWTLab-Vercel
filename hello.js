const express = require('express');
const app = express();
const PORT =3000;

// Define a route to serve the webpage
app.get('/', (req, res) => {
    const currentTime = new Date();
    const hour = currentTime.getHours();

    let greeting = 'Good Morning';
    if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour >= 18) {
        greeting = 'Good Evening';
    }

    // Send the webpage with the greeting message
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Webpage</title>
        </head>
        <body>
            <h1>${greeting}, World!</h1>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
