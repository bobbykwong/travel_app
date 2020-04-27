var React = require("react");

class Login extends React.Component {
  render() {
    const loginForm = (
            <form action="/authenticating" method="get">
                <input type="text" name="username" placeholder="username"></input><br></br>
                <input type="text" name="password" placeholder="password"></input><br></br>
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
            <div className="login-body">
                {loginForm}<br></br>
                <a href="/registration">Don't have an account?</a>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;