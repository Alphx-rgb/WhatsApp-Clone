# Backend for Whatsapp CLone Project

## Libraries used:
- express server- to create an configurable server
- mongoose - To handle operations with database. I have used Mongodb database for the same
- CORS - to interact with different Web API
- Yup - for parsing and validating Javascript object that comes from the user
- body-parser - to parse the get/post requests
- babel - For using features of ES6 

# Database Schema

## Collections:
    users
    channels 
    messages

## Users Schema
    name
    phone No.
    profilePic
    addedOn

## Channel Schema
    users [__id,name,profilePic]
    messages :[message Schema]
    addedOn

## message Schema
    senderId
    recieverId
    messageType
    text
    addedOn
    
## API Documentation

- API needed:  create-user, login ,channel, searchuser,channel list API,send-messages

### `users`
1. `POST /user`
Creates a new user
2. `POST /login`
login endpoint
3. `POST /channel`
creating a channel
4. `GET /search-user`

5. `GET /channel-list`

6. `POST /message`
sending a message

## To DO:
-  seen messages,blue tick feature
-  audio recording 
-  call feature 