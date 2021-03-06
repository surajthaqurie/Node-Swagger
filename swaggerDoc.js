const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Extended: https://swagger.io/specification/#infoObject
const options = {
    swaggerDefinition: {
        info: {
            title: 'User Api',
            description: 'Test API with autogenerated swagger doc',
            contact: {
                name: "Suraj Chand",
                email: "devlop_143@gmail.com"
            },
            license: {
                name: "Apache 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            version: '1.0.0'
        },
        servers: [{
            url: "https://{username}.gigantic-server.com:{port}/{basePath}",
            description: "The production API server",
            variables: {
                username: {
                    default: "demo",
                    description: "this value is assigned by the service provider, in this example `gigantic-server.com`"
                },
                port: {
                    enum: [
                        "8443",
                        "443"
                    ],
                    default: "8443"
                },
                basePath: {
                    default: "v2"
                }
            }
        }],

        host: 'localhost:3000',
        schemes: ['http', 'https'],
        tags: ["users"],
        produces: ["application/json", "application/bjson",
            "application/xml"],
        consumes: ["application/json", "application/bjson",
            "application/xml"]

    },
    // [routes/*.js]
    apis: ['endpoints.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}