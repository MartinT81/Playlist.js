'use strict';

const userstore = require('../models/user-store');
const logger = require ('../utils/logger');
const uuid = require('uuid');

const accounts = {
  index(request, response){
     const viewData = {
       titel : 'login or signup',
     };
    response.render('index', viewData);
    
  },
  
  login(request, response){
    const viewData = {
      titel: 'login to the service'
    };
    response.render ('login', viewData);
    
  },
  
  logout (request, response){
    response.cookie('playlist, '');
    
  }
  
  ,
  
};