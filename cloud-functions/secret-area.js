exports.handler = function(event, context, callback) {
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
      body: content
    })
    
  } else {
    callback(null, {
      statusCode: 401,
      body: "<h2 style='color: red'>Wrong password!!</h2>"
    })
  }
}