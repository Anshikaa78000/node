import express from "express";

import { Sequelize } from "sequelize";
let app = express()

const port = 5000;
app.use(express.json())

app.get('/', async (req, res) => {
        const sequelize = new Sequelize('Astikan', 'root', 'Astikan_2022', {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        })
      
       await sequelize.authenticate().then(()=>{
            res.status(200).json('Connection has been established successfully.')
        }).catch((error)=>{
            console.log(error);
            
            res.status(404).json('Unable to connect to the database:')
        })
}
)

app.listen(port, async () =>{
    console.log('Server running');
    
})