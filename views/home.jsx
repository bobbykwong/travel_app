var React = require("react");
var DefaultLayout = require('./components/layout/default');

class Home extends React.Component {
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
        <DefaultLayout title='homepage' css='/css/home.css' >
            <div className='trips-div'>
                {showTrips}
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;