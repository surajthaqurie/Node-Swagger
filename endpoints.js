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
*          description: 'The format to return the response in, i.e. json.'
*          default: json
*     responses:
*           '200':
*              description: Success           
*/
    app.get('/users', (req, res) => {
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