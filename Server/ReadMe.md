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
    
