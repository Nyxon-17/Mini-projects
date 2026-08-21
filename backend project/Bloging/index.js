const express = require("express");
const { request } = require("http");
const app = express()
const port = 3000;
const path = require(`path`)
const { v4: uuidv4 } = require(`uuid`)
const methodOverride = require("method-override");


app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("View", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")))

// post array
let posts = [
    {
        id: uuidv4(),
        username: "sahid",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "user2",
        content: "i love writting"
    },
]
// get all posts
app.get("/post", (req, res) => {
    res.render("post.ejs", { posts });
})

// create new post
app.get("/post/new", (req, res) => {
    res.render("create.ejs")
})
app.post("/post", (req, res) => {
    let { username, content } = req.body
    // console.log(req.body);
    let id = uuidv4();
    console.log(id);
    posts.push({ id, username, content })


    res.redirect("/post")
})
//show a specific post 
app.get("/post/show/:id", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => id == p.id)
    console.log(post);
    res.render("Show.ejs", { post })
})

//edit 
app.get("/post/:id/edit", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => p.id == id)
    res.render("edit.ejs", { post })
})

app.patch("/post/:id", (req, res) => {
    let { id } = req.params;
    let { username, content } = req.body
    let post = posts.find((p) => p.id === id);
    post.username = username;
    post.content = content;
    res.redirect(`/post/Show/${id}`);
});

//Delete posts
app.delete("/post/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.findIndex((p) => p.id === id);
    posts.splice(post,1);
    res.redirect("/post");
})

app.listen(port, () => {
    console.log(`Server run on ${port}`);

})