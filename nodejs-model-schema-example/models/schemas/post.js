const {Schema} = require("mongoose");

const postSchema = Schema({
    title: {
        type: String,
        required: [true, "У записи должно быть название"],
        minlength: 2
    },
    text: {
        type: String,
        required: [true, "У записи должно быть содержиое"],
        minlength: 2
    },
    dateCreate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});


module.exports = postSchema;