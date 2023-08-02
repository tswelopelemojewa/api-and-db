
import express from 'express';
import { addGreeting, getGreetings, deleteGreeting, deleteGreetingByLangage, updateLangage } from './db.js';

const app = express()

//
app.use(express.json());

app.use(express.static('public'));


const PORT = process.env.PORT || 3008;

app.listen(PORT, ()=> console.log(`started on : ${PORT}`))

// create the greetings api

//get greetngs
app.get('/api/greetings', async (req, res)=> {
    const greetings = await getGreetings();

    console.log(greetings)
    res.json({
        greetings
    })
})

// riwu

// add greetngs
app.post('/api/greetings', async (req, res)=> {
    const langage = req.body.langage
    const greeting = req.body.greeting
    // add langage
    await addGreeting(langage, greeting);


    res.json({
        status: 'Success',
        message: `greeting '${greeting}' added for ${langage}`

        // langage, 
        // greeting
    })
})

// endpont for update
app.post('/api/greetings/edit', async (req, res)=> {
    const langage = req.body.langage
    const greeting = req.body.greeting
    const id = req.body.id
    // add langage
    await updateLangage(langage, greeting, id);


    res.json({
        status: 'Success',
        message: `greeting '${greeting}' added for ${langage} with id ${id}`

        // langage, 
        // greeting
    })  
})

// endpont for update
app.post('/api/greetings/delete', async (req, res)=> {
    const langage = req.body.langage
    const greeting = req.body.greeting
    const id = req.body.id
    // add langage
    await deleteGreeting(id);


    res.json({
        status: 'Success',
        message: `greeting '${greeting}' for ${langage} with id ${id} has been deleted`

        // langage, 
        // greeting
    })  
})




// console.log('start')


// console.log('end')




