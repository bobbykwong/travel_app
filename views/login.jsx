var React = require("react");

class Login extends React.Component {
  render() {
    const loginForm = (
            <form action="/authenticating" method="get">
                <input type="text" name="username" placeholder="username"></input>
                <input type="text" name="password" placeholder="password"></input>
                <input type="submit" value="login"></input>
            </form>
        )

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/login.css" />
        </head>
        <body>
            <div>
                <h1>TRAVELAPP</h1>
            </div>
            <div>
                {loginForm}
                <a href="/register">Don't have an account?</a>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;