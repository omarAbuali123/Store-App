const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

let products = [];/**خزن لبيانات */

// Function to fetch data from external API
const fetchData = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        products = response.data; // Store fetched data in the array
        console.log('Data fetched and stored successfully');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

//جلب وتخزين البيانات.
app.get("/fetch-data", async (req, res) => {
    await fetchData();
    res.send('Data fetched and stored successfully');
});

// يرجع البيانات عشكل جيسن
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);//يبع لمسج ولمكان تعاي لي3002
});









