const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        // bcrypt password generate
        const salt = await bcrypt.genSalt(10);
        // hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        const result = await user.save();
        // hide the password from the user data fetch
        const { password, ...data } = await result.toJSON();

        res.send(data);
    } catch (e) {

    }
});

router.post('/login', async (req, res) => {

    try {
        // find email of login user
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).send({
                message: "user not found"
            })
        }
        // comparse the bcrypt password
        if (!await bcrypt.compare(req.body.password, user.password)) {
            return res.status(404).send({
                message: "invalid credentials"
            });
        }
        // generate jwt token
        const token = jwt.sign({ _id: user._id }, "secret");

        // store token in cookies
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.send({
            message: "success"
        });

        res.send(token);
    } catch (e) {

    }

});

// verify jwt token from cookie  
router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt'];
        
        const claims = jwt.verify(cookie, 'secret');

        if (!claims) {
            return res.status({
                message: "unauthenticated"
            });
        }
        
        const user = await User.findOne({ _id: claims._id });

        const { password, ...data } = await user.toJSON();
        
        res.send(data);

    } catch (e) {

    }
});

router.post('/logout', (req, res) => {
    // remove the jwt token from cookie
    res.cookie('jwt', '', { maxAge: 0 });

    res.send({
        message: "success"
    })
});


module.exports = router;