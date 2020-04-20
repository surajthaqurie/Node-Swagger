const initializeEndpoints = (app) => {

/**
 * @swagger
 * /users:
 *   get:
 *     description:This Should return all users
 */


    app.get('/users', (req, res) => {
        res.send('This should return all users');
    });

    app.get('/users/:id', (req, res) => {
        res.send(`This should return users of this id ${req.params.id}`);
    });


}

module.exports = initializeEndpoints;