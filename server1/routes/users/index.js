const graphqlClient = require("./graphql-client");
const {
  GET_ALL_USERS,
  INSERT_USER,
  UPDATE_USER,
  GET_USER,
} = require("./queries");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (req, reply) {
    //call the post endpoint in hasura-engine
    const query = GET_ALL_USERS;
    const variables = {};

    const response = await graphqlClient({ query, variables });

    return response;
  });

  fastify.get("/:id", async function (req, reply) {
    //call the post endpoint in hasura-engine
    const query = GET_USER;
    const variables = {
      id: req.params.id,
    };

    const response = await graphqlClient({ query, variables });

    return response;
  });

  fastify.post("/", async function (req, reply) {
    //call the post endpoint in hasura-engine
    const query = INSERT_USER;
    const variables = req.body;

    const response = await graphqlClient({ query, variables });

    return response;
  });

  fastify.put("/:id", async function (req, reply) {
    const query = UPDATE_USER;
    const variables = {
      id: req.params.id,
      name: req.body.name,
    };

    const response = await graphqlClient({ query, variables });

    return response;
  });
};
