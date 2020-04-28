var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='./images/logo.svg' className='icon'></img>
    const username = this.props.username;

    const sideNav = (
            <div className="side-nav">
                <p className='side-nav-links'>{username}</p>
                <a href="#" className='side-nav-links'>Following</a><br></br>
                <a href="#" className='side-nav-links'>Favourites</a>
            </div>
                )

    const pageTitle = (
                    <h2>NEW TRIP</h2>
                    )

    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const newTripForm = (
                        <form action='/addnewtrip' method='post'>
                            <input type="text" name="country" placeholder="country"></input><br></br>
                            <input type="text" name="name" placeholder="trip name"></input><br></br>
                            <input type="date" name="date_start"></input><br></br>
                            <input type="date" name="date_end"></input><br></br>
                            <input type="submit" value="Create Trip"></input>
                        </form>
                        )


    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/newtrip.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <header>
                <div className='logo'>
                    <a href='/' className='home-btn'>
                    {icon}
                    <h1>TRAVELAPP</h1>
                    </a>
                </div>
                <div className='page-title'>
                    {pageTitle}
                </div>
                <div className='new-trip'>
                    {newTrip}
                </div>
            </header>
            <nav>
                {sideNav}
            </nav>
            <div className='main-body'>
                {newTripForm}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;