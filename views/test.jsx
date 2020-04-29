var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='./images/logo.svg' className='icon'></img>

    const sideNav = (
            <div className="side-nav">
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


    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/test.css" />
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
                <div id="map"></div>
            </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUoCP1u86ZopN6JWDAWKi8LdOhWSke9v4&callback=initMap" async defer></script>
            <script src='/script/test.js'></script>
        </body>
      </html>
    );
  }
}

module.exports = Login;