const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'tracksys',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor OK -- Puerto: ${PUERTO}`)
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexion Exitosa');
})

const jwt = require('jsonwebtoken');


app.get('/', (req,res)=>{
  conexion.query('select * from usuarios', (err,rows,fields) => {
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  })
});

app.post('/singin', (req,res) => {
  const { usuario, password } = req.body;
  conexion.query('select usuario,rol from usuarios where usuario=? and password=?',
  [usuario,password],
  (err,rows,fields) => {
    if(!err){
      if(rows.length >0){
        let data = JSON.stringify(rows[0]);
        const token = jwt.sign(data, 'villegas');
        res.json({token});
      }else{
        res.json('Usuario o clave incorrectos');
      }
      
    }else{
      console.log(err);
    }
  }
  )  
})

app.post('/test',verifyToken, (req,res) => {
  res.json('Informacion secreta');
})

function verifyToken(req,res, next){
  if(!req.headers.authorization) return res.status(401).json('No autorizado');

  const token = req.headers.authorization.substr(7);
  if(token!==''){
    const content = jwt.verify(token,'stil');
    req.data = content;
    next();
  }else{
    res.status(401).json('Token vacio');
  }

}

//Apis funcionalidad de la pantalla home
app.get('/tareas', (req, res) => {
  const query = 'SELECT * FROM tareas'
  conexion.query(query, (error, resultado) =>{
    if(error) return console.error(error.message)

    if(resultado.length > 0){
        res.json(resultado)

    } else{
        res.json('No hay registros')
    }
  })
})

app.post('/tareas/agregar', (req, res) => {
  const ticket = {
    Descripcion: req.body.Descripcion,
    Localizacion: req.body.Localizacion,
    Fecha_Inicio: req.body.Fecha_Inicio,
    Fecha_Finalizacion: req.body.Fecha_Finalizacion,
    Estado: req.body.Estado,
    Carga_Archivo: req.body.Carga_Archivo
  }
  const query = 'INSERT INTO tareas SET ?'
  conexion.query(query, ticket, (error, resultado) => {
    if (error) {
      console.error(error.message);
      res.status(500).json({ mensaje: 'Error al crear ticket' });
    } else {
      res.status(201).json({ mensaje: 'Ticket creado con éxito' });
    }
  })
})