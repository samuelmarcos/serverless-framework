"use strict";

const AWS = require('aws-sdk')

const host = process.env.LOCALSTACK_HOST || "localhost"
const s3port = process.env.S3_PORT || "4572"
const s3config = {
  s3ForcePathStyle: true,
  endpoint: new AWS.Endpoint(
    `http://${host}:${s3port}`
  )
}

const S3 = new AWS.s3(S3config)

module.exports.hello = async (event) => {

  const bukets = await S3.listBuckets().promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
