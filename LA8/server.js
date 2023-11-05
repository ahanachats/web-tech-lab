const express = require('express') const mongoose = require('mongoose') const url =
'mongodb+srv://hariiajkrishnan:4WTFJnSQyp06wvmU@cluster0.mbfgwca.mongodb.net/' const app = express()
mongoose.connect(url, { useNewUrlParser: true }) const con = mongoose.connection

con.on('open', () => { console.log('connected...')
})

app.use(express.urlencoded({ extended: false })); app.use(express.json())

const studentsRouter = require('./routes/students') app.use('/students', studentsRouter)

app.listen(9000, () => { console.log('Server started')
})
