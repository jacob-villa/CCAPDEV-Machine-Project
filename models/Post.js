const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({ // Each entry matches the data types in the HTML form
    title: String,
    textContent: String,
    imageContent: String,
    user: String,
    postingTime: {type: Date, default: Date.now},
    numLikes: Number,
    numComments: Number, default: 0,
    id: Number
}) // JSON format, consisting of the name: type collection

const Post = mongoose.model('Post', PostSchema); // Create Post based on schema model

module.exports = Post; // Export model so it can be used by index.js