// importing express
const  express = require('express');
const userRouter = require('./Routers/userRouter');
const cors = require('cors');

// Initialising express
const app = express();
const port = 5000;

// middleware

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/user', userRouter);

// route or endpoint
app.get('/',(req,res) =>{
res.send('response from express');})

app.get('/add',(req,res) =>{
    res.send('response from add')
});

//getall
app.get('/getall',(req,res) =>{
    res.send('get all request')
});

//update
app.get('/update',(req,res) =>{
    res.send('update responses accordig to request')
});



app.listen( port, () => {console.log( 'server started' )} );
