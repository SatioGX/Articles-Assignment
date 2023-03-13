const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
})


// Listening to server on this PORT - 3000
app.listen(PORT, () => {
    console.log("Server running on port : "  +PORT);
})


let articleList = [
    {
        id:1,
        title: `Coding makes millions!`,
        description: `Tech industry breaks through with thousands of new hires!`,
        author: `Kevin`
    },
    {
        id:2,
        title: `English is hard to learn`,
        description: `New students saying English is the hardest language?`,
        author: `Amy`
    },
    {
        id:3,
        title: `Tax season has started!`,
        description: `Get your taxes done by professionals`,
        author: `Dennis`
    },
    {
        id:4,
        title: `Math is boring`,
        description: `Teach students taxes!`,
        author: `Jason`
    },
]
//GET ARTICLES

app.get('/articles', (req, res) => {
    res.send(articleList);
})

//POST ARTICLES

app.post('/articles/create', (req, res) => {
    const newArticles = req.body;
    articleList.push(newArticles);
    res.send(articleList);
})

//DELETE ARTICLES

app.delete('/articles/delete/:id', (req, res) => {  
    const articleID = req.params.id;

    console.log(articleID);

    articleList = articleList.filter((article) => article.id != articleID ? true : false);

    res.send(articleList);

})