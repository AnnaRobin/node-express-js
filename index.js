const express = require('express')
const app = express()

app.get('/toto', function (request, response) {
    response.send('Hello World toto!!!')
})

app.get('/titi/', function (request, response) {
    response.send('Hello World titi!!!')
})

app.get('/users/:id' , function (request, response) {
    const firstname = request.params.firstname;
    const result = 'Hello ' + firstname;
    response.send(result);
    console.log(result);
})

// app.get('/hello?order=name[firstname]=daniel[lastname]=jorge/tito' , function (request, response) {
//     const firstname = request.query.order;
//     const result = 'Hello ' + firstname;
//     response.send(result);
//     console.log(result);
// })

///shoes?order=desc&shoe[color]=blue&shoe[type]=converse
app.get('/search/q', function (request, response) {
    const name = request.query;
    // const result = 'Hello ' + name;
    // response.send(result);
    console.log(name + 'anna');

})

app.get('/hello/names' , function (request, response) {
    console.log(request.query)
    const firstname = request.query.firstname;
    const lastname = request.query.lastname;
    const result = 'Hello ' + firstname;
    response.send(result);
    console.log(result);
})

/*// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
console.dir(req.query.order)
// => 'desc'

console.dir(req.query.shoe.color)
// => 'blue'

console.dir(req.query.shoe.type)
// => 'converse'*/



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
