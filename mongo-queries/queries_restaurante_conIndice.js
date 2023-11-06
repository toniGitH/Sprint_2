//1)
db.col_restaurantes.find({})

//2)
db.col_restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1})

//3)
db.col_restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0 })

//4)
db.col_restaurantes.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 })

//5)
db.col_restaurantes.find({borough: "Bronx"})

//6)
db.col_restaurantes.find({borough: "Bronx"}).limit(5)

//7)
db.col_restaurantes.find({borough: "Bronx"}).skip(5).limit(5)

//8)
db.col_restaurantes.find({"grades.score": {$gt: 90}})

//9)
db.col_restaurantes.find({"grades.score": {$lt: 100, $gt:80}})

//10)
db.col_restaurantes.find({ "address.coord.0": { $lt: -95.754168 }})

//11)
db.col_restaurantes.find({cuisine:{$ne: "American "}, "grades.score": {$gt: 70}, "address.coord.1": {$lt: -65.754168} })

//12)
db.col_restaurantes.find({cuisine:{$ne: "American "}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168} })

//13)
db.col_restaurantes.find({cuisine:{$ne: "American "}, "grades.grade": "A", borough: {$ne: "Brooklyn"}}).sort({cuisine: -1 })

//14)
db.col_restaurantes.find({name:{$regex: /^Wil/i}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0})

//15)
db.col_restaurantes.find({name:{$regex: /ces$/i}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0})

//16)
db.col_restaurantes.find({name:{$regex: /Reg/i}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0})

//17)
db.col_restaurantes.find({borough: "Bronx", cuisine: {$in: ["American", "Chinese"]}})

//18)
db.col_restaurantes.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0 })

//19)
db.col_restaurantes.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0 })

//20)
db.col_restaurantes.find({"grades.score": {$lt: 10}},{restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0 })

//21)
db.col_restaurantes.find({$and: [{cuisine: "Seafood" }, {cuisine: {$nin: ["American", "Chinese"]}}, {name: {$not: /^Wil/i}}]}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})

//22)
db.col_restaurantes.find({"grades.grade":"A", "grades.score":11, "grades.date": ISODate("2014-08-11T00:00:00Z")},{restaurant_id: 1, name: 1, grades: 1, _id: 0})

//23)
db.col_restaurantes.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, {restaurant_id: 1, name: 1, grades: 1, "_id": 0})

//24)
db.col_restaurantes.find({"address.coord.1": {$gt: 42, $lt:52}},{restaurant_id: 1, name: 1, address: 1, _id: 0})

//25)
db.col_restaurantes.find({}).sort({name:1});

//26)
db.col_restaurantes.find({}).sort({name:-1});

//27)
db.col_restaurantes.find({}).sort({cuisine: 1, borough: -1})

//28)
db.col_restaurantes.find({"address.street": {$exists: true}})

//29)
db.col_restaurantes.find({ "address.cord": { $type: 1 } })

//30)
db.col_restaurantes.find({"grades.score":{$mod:[7, 0]}}, {restaurant_id: 1, name: 1, "grades.grade": 1, _id: 0})

//31)
db.col_restaurantes.find({name:{$regex: /mon/i}},{name: 1, borough:1, cuisine:1, _id: 0, "address.coord": 1})

//32)
db.col_restaurantes.find({name:{$regex: /^Wil/i}},{name: 1, borough:1, cuisine:1, _id: 0, "address.coord": 1})
