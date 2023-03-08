/*
// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
const {fruits} = require('./models/fruits')
const {meats} = require('./models/meats')
const { vegetables } = require('./models/vegetables')
const food = [fruits, meats, vegetables]


// Setup an "index" route for fruits
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup a "show" route for fruits
app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index])
})



// Setup an "index" route for meats
app.get('/meats', (req, res) => {
    res.send(meats)
})

// Setup a "show" route for meats
app.get('/meats/:index', (req, res) => {
    res.send(meats[req.params.index])
})




// Setup an "index" route for vegtables
app.get('/vegetables', (req, res) => {
    res.send(vegetables)
})

// Setup a "show" route for vegtables
app.get('/vegetables/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})

// Setup an "index" route for food
app.get('/food', (req, res) => {
    res.send(food)
})



// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

app.get('/food/search/', (req, res) => {
    food.filter(item => {
        if(req.query.title == item.name) {
            return res.send(item)
        }
    })
})


// MORE DATA!!



const vegetables = [
    {
        name:'cucumber',
        color: 'green',
        readyToEat: true
    },
    {
        name:'tomato',
        color: 'red',
        readyToEat: false
    },
    {
        name:'eggplant',
        color: 'purple',
        readyToEat: false
    }
];


const meats = [
    {
        name:'chicken',
        state: 'raw',
        readyToEat: false
    },
    {
        name:'beef',
        state: 'well done',
        readyToEat: true
    },
    {
        name:'pork',
        state: 'rare',
        readyToEat: true
    }
];

*/

/*

TASK 

    PART 1
        - Create models for vegetables and meats
        - Create an index and show route for each
        - Create a route for "food" that returns all food groups

    PART 2 
        - Add some logic for filtering the data based on the Query Params passed from the client
        - HINTS (you might need the "filter" method, maybe "includes", and definitely your homie "req")




        app.get('/food/search/', (req, res) => {
    allFood.filter(item => {
        if(req.query.title == item.name) {
            return res.send(item)

            //http://localhost:8080/food/search/?title=apple
        }
    })
})
*/

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our fruit data from models folder
const { fruits } = require('./models/fruits')
const { vegetables } = require('./models/vegetables')
const { meats } = require('./models/meats')
const food = [...fruits, ...meats, ...vegetables]


// Setup an "index" route 
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup a "show" route
app.get('/food', (req, res) => {
    console.log(food)
    res.send(food)
})

app.get('/fruits/:index', (req, res) => {
    console.log(req.params)
    console.log(req.params.index)
    res.send(fruits[req.params.index])
})

app.get('/meats/:index', (req, res) => {
    res.send(meats[req.params.index])
})

app.get('/meats', (req, res) => {
    res.send(meats)
})

app.get('/vegetables/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})

app.get('/vegetables', (req, res) => {
    res.send(vegetables)
})

// Part 2:
// app.get('/food/search/', (req, res) => {
//     food.filter(item => {
//         if(req.query.title == item.name) {
//             return res.send(item)
//         }
//     })
// })

    // app.get('/food/search/', (req, res) => {
    //         food.map((item)=>{
    //             if(req.query.title.includes(item.name)) {
    //             return res.send(item)
    //             }  

    //         })
    //     })


//         if(req.query.title.includes(food.name)) {
//             return res.send(food)
//         }
    
// })

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})


//:total
//:tip