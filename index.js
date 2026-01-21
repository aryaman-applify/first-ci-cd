exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My Sample App</title>
        <script>
          function sayHello() {
            alert("Deployment successful! JS is working.");
          }
        </script>
      </head>
      <body>
        <h1>Hello, CodeDeploy!</h1>
        <button onclick="sayHello()">Click Me</button>
      </body>
      </html>
    `
  };
};
