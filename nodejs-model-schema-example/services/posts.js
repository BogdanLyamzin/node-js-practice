const {Post} = require("../models");

const getAll = (query)=> {
    return Post.find(query);
};

module.exports = {
    getAll
}