var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='./images/logo.svg' className='logo'></img>

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
        </head>
        <body>
            <div>
                <a href='/' className='home-btn'>
                {icon}
                <h1>TRAVELAPP</h1>
                </a>
            </div>
            <div>

            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;