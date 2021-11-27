const express=require('express');
const path= require('path');

const publicDirectoryPath=path.join(__dirname,'../public');

const app= express();

app.set('view engine', 'hbs')

//serving the contents of the public folder/ directory  (file name in public becomes route name (that comes after /))
app.use(express.static(publicDirectoryPath));

//base address
//render renders one of our views (folder)
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'lakshay'
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about app',
        name:'lakshay'
    });
});

// app.get('/help',(req,res)=>{
//     res.send({
//         name:'lakshay',
//         age:27
//     });
// });

// app.use(express.static(pub));

//this line starts the server and have it listen to a server
//callback function is optional
app.listen(3000,()=>{
    console.log('Running on port 3000');
});