const { Router } = require('express')

const router = Router()

router.get('/api/todos', require('../controller/todos.controller').todos)

router.get('/detail/:id', require('../controller/todos.controller').detail)

router.post('/delete/:id', require('../controller/todos.controller').delete)

router.post('/add', require('../controller/todos.controller').add)

module.exports = router