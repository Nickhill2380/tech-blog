const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes:[
            'id',
            'title',
            'text_area',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes:['comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes:['username']
                }
            },
            {
                model: User,
                attributes:['username']
            }
        ]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({plain: true}));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        }); 
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where:{
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'text_area',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes:['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
        if(!postData){
            return res.status(404).json({message: 'No post found with this id'})
        }
        
        const post = postData.get({ plain: true});

        return res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});

router.get('/login', (req,res) => {
    if(req.session.loggedIn) {
        return res.redirect('/');
    }

    return res.render('login');
});

module.exports = router;