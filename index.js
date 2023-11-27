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

//APIS para el login
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
//Apis para la interaccion con las pantallas de vista y creacion
app.get('/tareas', (req, res) => {
  const query = 'SELECT * FROM tareas'
  conexion.query(query, (error, resultado) => {
    if(resultado.length > 0){
      res.json(resultado)
    }else{
      res.json('no hay registros')
    }
  })
})

app.post('/tareas/crear', (req, res) => {
  const ticket = {
    descripcion: req.body.descripcion,
    localizacion: req.body.localizacion,
    fechaini: req.body.fechaini,
    fechafin: req.body.fechafin,
    estado: req.body.estado,
    archivo: req.body.archivo
  }
  const query = `INSERT INTO tareas SET ?`
  conexion.query(query, ticket, (error, resultado) => {
    if(error){
      console.error(error.message);
      res.status(500).json({ mensaje: 'Error al crear el ticket' });
    } else{
      res.status(201).json({ mensaje: 'ticket creado con exito' });
    }
  })
})

app.get('/tareas/ver/:id_tarea', (req, res) => {
  const { id_tarea } = req.params

  const query = `SELECT * FROM tareas WHERE id_tarea = ${id_tarea}`
  conexion.query(query, (error, resultado) => {
    if(error) return console.error(error.message)

    if(resultado.length > 0){
      res.json(resultado)
    }else{
      res.json('No hay ninguna tarea con ese ID')
    }
  })
})

app.put('/tareas/actualizar/:id', (req, res) => {
  const { id } = req.params;
  const { descripcion, localizacion, fechaini, fechafin, estado, archivo } = req.body;
 //UPDATE tareas SET descripcion='Prueba1' WHERE id_tarea = 10
  const query = `UPDATE tareas SET descripcion='${descripcion}', localizacion='${localizacion}',
  fechaini='${fechaini}', fechafin='${fechafin}', estado='${estado}', archivo='${archivo}'
  WHERE id_tarea='${id}'`;
  
  conexion.query(query, (error, resultado) => {
    if(error){
      console.error(error.message);
      res.status(500).json({ mensaje: 'Error al actualizar el ticket' });
    } else{
      res.status(201).json({ mensaje: 'ticket actualziado con exito' });
    }
  })
})