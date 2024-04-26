const mongoose=require('mongoose')
const placeSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: {
        type:String,
        required:true,
        trim:true
    },

    address: {
        type:String,
        required:true,
        
    },
    photos: [String], //array of string
    description: {
        type:String,
        required:true,
    },
    perks: [String], //feature
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
    price: {
        type:Number,
        required:true
    }
  });
  

  module.exports=mongoose.model('Place',placeSchema)
  