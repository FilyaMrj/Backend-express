// src/models/User.js
// step 1
const mongoose = require('mongoose');

const userSchema = new mongoose. Schema ( {
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
age: { type: Number },
password: { type: String, required: true}
}, {timestamps: true }); // Automatically adds createdAt and updatedAt

const User = mongoose. model ('User', userSchema) ;
module. exports = User;