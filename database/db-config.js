const knex = require("knex");
// const env = require("../config");
const knexConfig = require("../knexfile.js");

const environ = process.env.DB_ENV

module.exports = knex(knexConfig[environ]);
