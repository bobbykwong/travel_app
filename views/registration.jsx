var React = require("react");

class Register extends React.Component {
  render() {
    const registerForm = (
            <form action="/registration" method="post">
                <input type="text" name="username" placeholder="Username"></input><br></br>
                <input type="text" name="password" placeholder="Password"></input><br></br>
                <input type="text" name="password2" placeholder="Confirm Password"></input><br></br>
                <input type="submit" value="Sign Up"></input>
            </form>
        )

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/registration.css" />
        </head>
        <body>
            <div>
                <h1>Registration</h1>
            </div>
            <div className='register-body'>
                {registerForm}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;