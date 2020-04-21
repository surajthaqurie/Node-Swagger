const initializeEndpoints = (app) => {

    /**
    * @swagger
    * /users:
    *   get:
    *     summary: Get all Users.
    *     description: This route get all Users.
    *     parameters:
    *        - in: query
    *          name: format
    *          type: string
    *          description: 'Getting all users information.'
    *          schema: 
    *            type: object
    *            description: 'get user list'
    *     responses:
    *           '200':
    *              description: Success
    *              schema:
    *                type: object
    *                properties:
    *                  ip:
    *                    type: string
    *                    example: [123.123.100]           
    */
    app.get('/users', (req, res) => {
        res.send('This should return all users');
    });

    /**
     * @swagger
     * 
     * /users/{id}:
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