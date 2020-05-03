var React = require("react");
var DefaultLayout = require('./components/layout/default');

class Home extends React.Component {
  render() {
    const icon = <img src='./images/logo.svg' className='icon'></img>

    const username = this.props.username;

    const newTrip = (
                <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const pageTitle = (
            <h2>YOUR TRIPS</h2>
        )

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
        <DefaultLayout title='homepage' css='/css/home.css'>
            <div className='trips-div'>
                {newTrip}
                {showTrips}
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Home;