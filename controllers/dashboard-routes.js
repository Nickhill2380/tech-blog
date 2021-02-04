const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        where:{
            user_id: req.session.user_id
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
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include:{
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
        const posts = postData.map(post => post.get({ plain: true}));
        res.render('dashboard', { posts, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', (req,res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'text_area',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(userData => {
        if(userData) {
            const post = userData.get({ plain: true});

            return res.render('edit-post', {
                post,
                loggedIn: true
            });
        } else {
            return res.status(404).end();
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

module.exports = router;