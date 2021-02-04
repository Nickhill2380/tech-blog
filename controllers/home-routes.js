const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes:[
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
        const post = postData.map(post => post.get({plain: true}));

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

module.exports = router;