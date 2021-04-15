const {postServices} = require("../../services");

const get = async (req, res, next) => {
    const {query} = req;
    try {
        const results = await postServices.getAll(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                results
            }
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = get;