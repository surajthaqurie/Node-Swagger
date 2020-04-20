const initializeEndpoints = (app) => {

    /**
     * @swagger
     * 
     * /users:
     *  get:
     *   description:This Should return all users
     *  responses:
     *         '200':
     *            description: A successful response
     */
    app.get('/users/:id', (req, res) => {
        res.send('This should return all users');
    });

    /**
     * @swagger
     * 
     * /users/:id:
     *  get:
     *   description:This Should return all users
     *  responses:
     *         '200':
     *            description: A successful response
     */

    app.get('/users/:id', (req, res) => {
        res.send(`This should return users of this id ${req.params.id}`);
    });


}

module.exports = initializeEndpoints;