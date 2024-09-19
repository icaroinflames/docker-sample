"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true, message: "Welcome to the server1" };
  });

  fastify.get("/server2", async function (request, reply) {
    const response = await fetch("http://server2:3000");

    return response;
  });
};
