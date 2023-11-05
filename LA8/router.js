const express = require('express') 
const router = express.Router()
const Student = require('../models/student')


router.get('/', async (req, res) => { try {
const students = await Student.find() 
res.json(students)
} 
catch (err) 
{ res.send('Error ' + err)
}
})

router.get('/:id', async (req, res) => { try {
const student = await Student.findById(req.params.id) 
res.json(student)
} catch (err) 
{ res.send('Error ' + err)
}
})


router.post('/', async (req, res) => { console.log(req.body.name);

try {
const student = await Student.create({ name: req.body.name,
tech: req.body.tech, sub: req.body.sub
});

res.json(student)
} catch (err) { res.send('Error')
}
})

module.exports = router
