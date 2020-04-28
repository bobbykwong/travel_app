var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='/images/logo.svg' className='icon'></img>
    const username = this.props.username;
    const tripID = this.props.id;

    const sideNav = (
            <div className="side-nav">
                <p className='side-nav-links'>{username}</p>
                <a href="#" className='side-nav-links'>Following</a><br></br>
                <a href="#" className='side-nav-links'>Favourites</a>
            </div>
                )

    const tripName = this.props.name;
    const pageTitle = (
                    <h2>{tripName}</h2>
                    )

    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const tripHeader = (
                    <div className='trip-header'>
                        <p className="country">{this.props.country}</p>
                        <p>{this.props.date_start} ➡ {this.props.date_end}</p>
                    </div>
                    )

    // Loop over tripLength to get total number of days
    const tripLength = this.props.tripLength;
    const days = [];
    let i = 0;
    while(i<tripLength){
        const day = i+1;
        const dayURL = `/trip/${tripID}/day/${day}`
        days.push(
                <tr>
                  <th scope="row">{day}</th>
                  <td></td>
                  <td><a href={dayURL}>edit</a></td>
                </tr>
                )
        i++;
    }


    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/trip.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
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
            {tripHeader}
            <div className='days-body'>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">DAY</th>
                      <th scope="col">Highlight</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {days}
                  </tbody>
                </table>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;