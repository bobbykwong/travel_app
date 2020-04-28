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

    const searchBar = (
                    <form>
                        <input type='text' name='country' placeholder='Search a Country, Be inspired' className='searchbar-field'></input>
                    </form>
                    )

    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

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
                <div className='searchbar-div'>
                    {searchBar}
                </div>
                <div className='new-trip'>
                    {newTrip}
                </div>
            </header>
            <nav>
                {sideNav}
            </nav>
            <div className='main-body'>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;