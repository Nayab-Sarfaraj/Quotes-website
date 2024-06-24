const mongoose=require("mongoose")
const quotesSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quote=mongoose.model("quotes",quotesSchema)
module.exports=Quote