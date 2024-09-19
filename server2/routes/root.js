"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true, message: "Welcome to the server2" };
  });
};
