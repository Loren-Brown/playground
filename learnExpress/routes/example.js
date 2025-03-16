const express = require('express')
const router = express.Router()


// Base example/ route
router.get('/', (req, res)=> {
    res.send("Example Router")
})

// This route should override the dynamic route below
router.get('/dynamic/override', (req, res) => {
    res.send('Route order matters.')
})

// Dynamic route example
router.get('/dynamic/:foo', (req, res) => {
    res.send('Dynamic route example: ' + req.params.foo)
})

// CRUD example 
// router.route lets you share route path with multiple opperation
router
    .route("/CRUD/:id")
    .post((req, res) => {
        res.send("Create: " + req.updatedId)
    })
    .get((req, res) => {
        // res.send('Read: ' + req.params.id)
        res.send(`Retrive: ${req.updatedId}`)
    })
    .put( (req, res) => {
        res.send('Update: ' + req.params.id)
    })
    .delete((req, res) => {
        res.send('Delete: ' + req.params.id)
    })

// Param example (aka "middleware")
// Interceps requests with 'id' param and runs this before running the normal call
// Good for logging, authentication, data transforms, etc...
router.param("id", (req, res, next, id) => {
    console.log("Your CRUD param: " + id)

    // You can also set additional params
    req.updatedId = id + "!"

    next()
})

module.exports = router