```javascript
// Correct usage using the $or operator
db.collection.find({ $or: [{ field: 1 }, { field: 2 }, { field: 3 }, { field: 4 }] });

//Alternative using $elemMatch with an array of objects
db.collection.find({ field: { $elemMatch: { $in: [1,2,3,4] } }})
```