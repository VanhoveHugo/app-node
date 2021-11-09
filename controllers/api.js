const Users         = require('../models/users.models')
const Comments      = require('../models/comments.models')
const bcrypt        = require('bcrypt')
/**
 * USERS API
 */
const AllUsers = (req, res) => {
    Users.find({}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json({
            count: doc.length,
            doc
        })
    })
}
const AddUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        let user = new Users({name: req.body.name, password: hash})
        user.save((err, doc) => {
            if(err) {
                res.status(500)
                console.log(err);
                return res.json({message: 'Erreur serveur.'})
            }
            res.status(201)
            res.json(doc)
        })
    })
}
const ReadUser = (req, res) => {
    Users.findOne({_id: req.params.uid}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json(doc)
    })
}
const UpdateUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.uid, req.body, {new: true}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json(doc)
    })
}
const DeleteUser = (req, res) => {
    Users.findByIdAndDelete(req.params.uid, (err) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json({message: "Utilisateur supprimé"})
    })
}

/**
 * COMMENTS API
 */
 const AllComments = (req, res) => {
    Comments.find({}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json({
            count: doc.length,
            doc
        })
    })
}
const AddComment = (req, res) => {
    let Comment = new Comments(req.body)
    Comment.save((err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(201)
        res.json(doc)
    })
}
const ReadComment = (req, res) => {
    Comments.findOne({_id: req.params.cid}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json(doc)
    })
}
const UpdateComment = (req, res) => {
    Comments.findByIdAndUpdate(req.params.cid, req.body, {new: true}, (err, doc) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json(doc)
    })
}
const DeleteComment = (req, res) => {
    Comments.findByIdAndDelete(req.params.cid, (err) => {
        if(err) {
            res.status(500)
            console.log(err);
            return res.json({message: 'Erreur serveur.'})
        }
        res.status(200)
        res.json({message: "Commentaire supprimé"})
    })
}

module.exports = { AllUsers, AddUser, ReadUser, UpdateUser, DeleteUser, AllComments, AddComment, ReadComment, UpdateComment, DeleteComment }

