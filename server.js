const express = require('express');
const path = require('path');

const app = express();


const friendsRouter = require('./routers/friends.router.js');
const messagesRouter = require('./routers/messages.router.js');

let PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
});

// this is for html templating. We are using handle bar templating engine here
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Loading handlebar",
        header: "Let's go skiing"
    });
});
// express.static to render static webpages
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



app.listen(PORT, () => console.log("listening to port"))