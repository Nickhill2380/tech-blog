const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude:['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['title', 'text_field', 'created_at']
            },
            {
                model: Comment,
                attributes: ['comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(userData => {
        if(!userData) {
           return res.status(404).json({message: 'No user with that id found.'});
        }
        return res.json(userData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.email = userData.email;
            req.session.loggedIn = true;

            return res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(userData => {
        if(!userData) {
            return res.status(404).json({message : 'No user found with that email.'});
        }

        const validPassword = userData.checkPassword(req.body.password);

        if(!validPassword) {
            return res.status(400).json({ message: 'Incorrect password.'});
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            return res.json({ user: userData, message: 'You are now logged in!'});
        });
    });
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() =>{
            res.status(204).end();
        });
    }
    else{
        res.status(404).end();
    }
});

router.put('/:id', (req,res) => {
    User.update({
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData){
            return res.status(404).json({message: 'No user found with that id'});
        }
        return res.json(userData);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            return res.status(404).json({ message: ' No user found with that id'});
        }
        return res.json(userData);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});

module.exports = router;