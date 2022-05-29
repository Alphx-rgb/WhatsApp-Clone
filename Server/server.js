const express = require('express');
const app = express();
import connectDB from './dbConnection/index'
import configureExpressApp from './routes/config';
import applyRoutes from './routes/index'
// configuring our App 
configureExpressApp(app);
const PORT = 3001;


const StartServer = ()=>{
    Promise.all([connectDB()]).then(()=>{
        app.listen(PORT,()=>{console.log("Server Started at http://localhost:3001");});
        applyRoutes(app);
    
    })
}

StartServer()