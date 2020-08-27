exports.handler = function(event, context, callback) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-type"
  }

  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "Only post request allowed!!"
    })
  }

  const content = `
  <h3>This is the secret area!</h3>
  <p>Be bold and don't give up <strong>Thanks god</strong>
  `

  let body
  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "password") {
    callback(null, {
      statusCode: 200,
      headers,
      body: content
    })
    
  } else {
    callback(null, {
      statusCode: 401,
      headers
    })
  }
}