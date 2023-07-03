import express  from "express";
import mysql from 'mysql2'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'
import { connected } from "process";
const conentdb = mysql.createConnection({
  host: "localhost",
  port:8081,
  user: "root",
  password: "",
  database: "crud"
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({
  storage: storage
})
conentdb.connect(function(err) {
  if(err) {
      console.log("Error in Connection");
  } else {
      console.log("Connected");
  }
})
const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT"],
        credentials: true
    }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
const port = 9000;
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
      return res.json({Error: "You are no Authenticated"});
  } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
         console.log(decoded.idUser);
          if(err) return res.json({Error: "Token wrong"});
          req.name = decoded.Name;
          req.img = decoded.img;
          req.info = decoded.infomation;
          req.id = decoded.idUser;
          next();
      } )
  }
}
app.get('/',verifyUser, (req, res) => {
  return res.json({Status: "Success",name:req.name,img:req.img,info:req.info,id:req.id})
})
app.get('/User',verifyUser, (req, res) => {
  return res.json({Status: "Success",name:req.name,img:req.img,info:req.info,id:req.id})
})
app.post('/Create',upload.single('img'), (req, res) => {
  console.log(req.file.path);
  const sql = "INSERT INTO user (`Email`,`Password`, `img`, `Name`,`infomation`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
      if(err) return res.json({Error: "Error in hashing password"});
      const values = [
          req.body.email,
          hash,
          req.file.filename,
          req.body.name,
          req.body.info
      ]
      conentdb.query(sql, [values], (err, result) => {
          if(err) return res.json({Error: "Inside singup query"});
          return res.json({Status: "Success",img:req.file.path});
      })
  } )
})
app.post('/Login', (req, res) => {
  const sql = "SELECT * FROM user Where email = ?";
  conentdb.query(sql, [req.body.email], (err, result) => {
      if(err) return res.json({Status: "Error", Error: "Error in runnig query"});
      if(result.length > 0) {
        
          bcrypt.compare(req.body.password.toString(), result[0].Password, (err, response)=> {
            console.log(response);
              if(err) return res.json({Error: "password error"});
              if(response) {
                 console.log(result[0]);
                 console.log(req.body);
                  const {idUser,Name,img,infomation} = result[0];
                  const token = jwt.sign({idUser,Name,img,infomation}, "jwt-secret-key", {expiresIn: '1d'});
                  res.cookie('token', token);
                  return res.json({Status: "Success", id: result[0].id})
              } else {
                  return res.json({Status: "Error", Error: "Wrong Email or Password"});
              }
          })
      } else {
          return res.json({Status: "Error", Error: "Wrong Email or Password 2"});
      }
  })
})
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"});
})
app.listen(port)