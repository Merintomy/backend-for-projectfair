const express = require('express');
const userController = require('../Controllers/userController')

const projectController = require('../Controllers/projectController')

const jwtMiddleware =require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')
const router = new express.Router()

router.post('/register',userController.register)



router.post('/login',userController.login)

// add user project API path -hhtp://localhost:4000/project/add


router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addUserProject)



router.get('/project/all-user-projects',jwtMiddleware,projectController.getAllUserPojects)

router.get('/project/all-project',jwtMiddleware,projectController.getAllProjects)

router.get('/project/home-project',projectController.getHomeProject)

//update project - http://localhost:4000/project/update-project/23456745
router.put('/project/update-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.updateProject)

router.delete('/project/delete-project/:pid',jwtMiddleware,projectController.deleteProject)

module.exports = router

