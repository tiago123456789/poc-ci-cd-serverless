'use strict';

const calculator = require("../services/calculator");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        resultCalculeted: calculator.sum(10, 10)
      },
      null,
      2
    ),
  };
};
