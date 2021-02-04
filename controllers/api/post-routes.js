const router = require('express').Router();
const {Post, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes:[
            'title',
            'text_area'
        ],
        include: [
            {
                model: Comment,
                attributes:['comment_text'],
                include:{
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
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'title',
            'text_area'
        ],
        include: [
            {
                model: Comment,
                attributes: ['comment_text'],
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
    .then(postData => {
        if (!postData) {
         return res.status(404).json({ message: 'No post found with this id' });
        }
        res.json(postData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req,res) => {
    Post.create({
        title: req.body.title,
        text_area: req.body.text_area,
        user_id: req.session.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req,res) => {
    Post.update(
        {
           title: req.body.title,
           text_area: req.body.text_area 
        },
        {
            where:{
                id: req.params.id
            }
        }
    )
    .then(postData => {
        if(!postData) {
            return res.status(404).json({message: 'No post found with that id'});
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    Post.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(postData => {
        if(!postData) {
           return res.status(404).json({ message: 'No post with that id found.'});
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;