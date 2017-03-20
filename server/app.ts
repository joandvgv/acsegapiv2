import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as User from './models/users';
import * as People from './models/people';
import * as Logs from './models/logs';
import * as LogsP from './models/logsP';


import { loginRouter } from './routes/login';
import { protectedRouter } from './routes/protected';
import { publicRouter } from './routes/public';
import { feedRouter } from './routes/feed';
import { userRouter } from "./routes/user";

declare function require(name:string);

var date;
mongoose.set('debug', true);

var db = require('mongoose');
db.connect("mongodb://joandvgv:Jonixxla5@ds119370.mlab.com:19370/acseg");
let enCampus: boolean = true;

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));



/* Create */
app.post('/api/user', function (req, res) {
    var newUser = new User(req.body);
    newUser.save((err)=>{
        if (err){
            res.json({info: 'error during User create', error: err});
        }
        res.json({info: 'User saved successfully', data: newUser}); 
    });
});



/* Read all */
app.get('/api/user', function (req, res) {
    People.find((err, People) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json({info: 'Users found successfully', data: People});
    });
});

  // count all
  app.get('/api/logs/month', function(req, res) {
   date = new Date().getMonth();
   var month;
   var datePlusOne: number; 
   datePlusOne= +date + 1;
   month = ""+datePlusOne; 
   var query = {month: month};
    LogsP.count(query,function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

   app.get('/api/logs/hour', function(req, res) {
   date = new Date().getHours();
   var hour;
   hour = ""+date+":"; 
   var query = {hora: {$regex: hour}};
    LogsP.count(query,function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });
  


/* Find one */
app.get('/api/user/:username', function (req, res) {
    var query = { username: req.params.username};
    User.findOne(query, function(err, User) {
        if (err) {
            res.json({info: 'error during find User', error: err});
        };
        if (User) {
            res.json({info: 'User found successfully', data: User});
        } else {
            res.json({info: 'User not found with name:'+ req.params.name});
        }
    });
});


/* Find one */
app.get('/api/login/', function (req, res) {
    var query = { username: req.params.username};
    User.findOne(query, function(err, User) {
        if (err) {
            res.json({info: 'error during find User', error: err});
        };
        if (User) {
            res.json({info: 'User found successfully', data: User});
        } else {
            res.json({info: 'User not found with username:'+ req.params.username});
        }
    });
});

app.get('/api/onCampus/', function (req, res) {
    var query = {enCampus:true };
    People.find(query, function(err, People) {
        if (err) {
            res.json({info: 'Error finding people on campus', error: err});
        };
        if (People) {
            res.json({info: 'Usuarios encontrados', data: People});
        } else {
            res.json({info: 'No people on campus with status:'});
        }
    });
});

app.get('/api/onCampus/count', function (req, res) {
    var query = {enCampus:true };
    People.count(query, function(err, People) {
        if (err) {
            res.json({info: 'Error finding people on campus', error: err});
        };
        if (People) {
            res.json(People);
        } else {
            res.json({info: 'No people on campus with status:'});
        }
    });
});

app.get('/api/logs/persona', function (req, res) {
    LogsP.find((err, LogsP) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json(LogsP);

    });
});

app.get('/api/logs/persona', function (req, res) {
    LogsP.find((err, LogsP) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json(LogsP);

    });
});


app.get('/api/logs/vehiculo', function (req, res) {
    Logs.find((err, Logs) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json(Logs);
    });
});

  app.get('/api/statistics/psede/:sede', function(req, res) {
   var query = {sede: req.params.sede, enCampus: true};
    People.count(query,function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

   app.get('/api/statistics/pcarrerap/:carrera', function(req, res) {
   var query = {carrera: req.params.carrera, enCampus: true};
    People.count(query,function(err, count) {
      if(err) return console.error(err);
      var query2= {enCampus:true};
      People.count(query2,function(error,total){
         if(error) return console.error(err);
         res.json(Math.round((count/total)*100) + "%");
    });
    });
    
          
  });



   app.get('/api/statistics/pcarrera/:carrera', function(req, res) {
   var query = {carrera: req.params.carrera, enCampus:true};
    People.count(query,function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });



  app.post('/api/authuser/', function (request, response) {
    User.findOne({
        username: request.body.username
    }, function (error, usr) {
        if (error) { console.log('Some error  occured '); }
        if (!usr) {
            response.json({
                authsuccess: false,
                description: 'User Authentication failed because user not found.'
            });
        } 
        else if (usr) {
            if (usr.password != request.body.password) {
                response.json({
                    authsuccess: false,
                    description: 'User Authentication failed because provided password is wrong.'
                });
            }else{
                 response.json({
                    authsuccess: true,
                    description: 'Sending the Access Token'
                  //  accessToken: accessToken
                });
                console.log('Authentication is done successfully.....');
            }

            }

           
            });
        });


if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  let err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
