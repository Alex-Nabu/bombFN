const axios = require('axios')

async function mdl_itemDetail(req, res, next) {
    const apiUrl = 'https://fortnite.gg/item-details?id=' + req.query.id;
    try {
        const response = await axios.get(apiUrl)
        var itemDetail = response.data;
        req.item = itemDetail;
        next();
    } catch (error) {
        console.error("Error fetching data:", error);
        // res.status(500).err("")
        next()
    }
}

module.exports = mdl_itemDetail;
