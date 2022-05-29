const applyRoutes = (app)=>{
    app.get('/',(req,res)=>{
        res.status(200).send('Api is running fine')
    })
// create-user, login ,channel, searchuser,channel list API,send-messages
    app.post('/user',(req,res)=>{
        res.send('Create-user')
    });
    app.post('/login',(req,res)=>{
        res.send('Login')
    });
    app.post('/channel',(req,res)=>{
        res.send('channel')
    });
    app.post('/search-user',(req,res)=>{
        res.send('search-user')
    });
    app.post('/channel-list',(req,res)=>{
        res.send('channel-list')
    });
    app.post('/message',(req,res)=>{
        res.send('Message')
    });
    



};

export default applyRoutes;