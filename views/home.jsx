var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='./images/logo.svg' className='icon'></img>

    const username = this.props.username;

    const sideNav = (
            <div className="side-nav">
                <p className='side-nav-links'>{username}</p>
                <form className='side-nav-links'>
                    <input type='text' name='country' placeholder='Search a Country' className='searchbar-field'></input>
                </form>
                <a href="#" className='side-nav-links'>Following</a><br></br>
                <a href="#" className='side-nav-links'>Favourites</a>
            </div>
                )


    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const yourTrips = <h2 className='your-trip'>TRAVEL THE WORLD</h2>

    const allTrips = this.props.trips;

    const showTrips = allTrips.map(el => {
        const tripURL = `/trip/${el.id}`
        // Might want to make background of each trip into a country flag
        return (
                <a href={tripURL} className='trip'>
                    <p>{el.name}</p>
                    <p>{el.date_start}</p>
                </a>
                )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
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
                {yourTrips}
                <div className='new-trip'>
                    {newTrip}
                </div>
            </header>
            <nav>
                {sideNav}
            </nav>
            <div className='main-body'>
                {showTrips}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;