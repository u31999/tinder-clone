import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    src: String
})

export default mongoose.model('cards', cardSchema)