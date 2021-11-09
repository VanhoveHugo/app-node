'use strict'
require('dotenv').config()
// const { AllUsers, AddUser, ReadUser, UpdateUser, DeleteUser, AllComments, AddComment, ReadComment, UpdateComment, DeleteComment } = require('../controllers/postController');
const express           = require('express');
const { AllUsers, AddUser, ReadUser, UpdateUser, DeleteUser, AddComment, ReadComment, UpdateComment, DeleteComment, AllComments } = require('./api');
let router 				= express.Router();

const Users         = require('../models/users.models')
const Comments      = require('../models/comments.models')

router.get('/', async (req, res) => {
    let users = await Users.find({})
    let comments = await Comments.find({})
    res.render('index', {
        users: users,
        comments: comments
    })
})

router.route('/users')
    .get(AllUsers)
    .post(AddUser)

router.route('/users/:uid')
    .get(ReadUser)
    .put(UpdateUser)
    .delete(DeleteUser)

router.route('/comments')
    .get(AllComments)
    .post(AddComment)

router.route('/comments/:cid')
    .get(ReadComment)
    .put(UpdateComment)
    .delete(DeleteComment)

module.exports = router;