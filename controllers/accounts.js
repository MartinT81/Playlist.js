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
    response.cookie('playlist', '');
    response.redirect ('/');
    
  },
  
  signup (request, response){
    
    const viewData = {
      titel: 'login to the service',
    };
    
    response.render('signup',  viewData);
  },
  
  register(request, response) {
    const user = request.body;
    user.id = uuid.v1();
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },
  
    authenticate(request, response) {
    const user = userstore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie('playlist', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/dashboard');
    } else {
      response.redirect('/login');
    }
  },
  
  getCurrentUser(request){
    const userEmail = request.cookies.playlist;
    return userstore.getUserByEmail(userEmail);
    
  },
  };

module.exports = accounts;