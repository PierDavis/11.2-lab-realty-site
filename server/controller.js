const houses = require('./db.json')

module.exports = {
    
    getAllHouses: (req, res) => {
    res.status(200).send(houses);
},

deleteHouse: (req, res) => {
    let houseIndex = houses.findIndex((house) =>
    house.id === +req.params.id);
    houses.splice(houseIndex, 1);
    res.status(200).send(houses)
},

createHouse: (req, res) => {
    let newHouse = {
        id: houses.length +1,
        address: address,
        price: price,
        imageURL: imageURL, 
    };
    houses.push(newHouse);
    res.status(200).send(houses)
    
},

updateHouse: (req, res) => {
    let requestId = req.params.id;
    let houseIndex = houses.findIndex((house) => house.id === parseInt(req.params.id));
    
    if(req.body.type === "plus") {
        houses[houseIndex].price++
    } else if (req.body.type === "minus") {
        houses[houseIndex].price--
    }
    res.status(200).send(houses);
}
};
