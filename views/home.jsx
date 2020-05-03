var React = require("react");
var DefaultLayout = require('./components/layout/default');
var flags = require('../flag.json');

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
        const country = el.country

        // Get flag image from flag.json file
        let flagImage;
        flags.forEach(element => {
            if(element.country.toLowerCase() === country.toLowerCase()){
                flagImage = element.flag_base64;
                console.log(flagImage);
            }
        })

        const backgroundStyle = {background: `url(${flagImage})`, backgroundSize: 'cover', backgroundPosition: 'center'};

        return (
                <div className='singletrip-div'>
                    <div className='flag' style={backgroundStyle}><p></p></div>
                        <a href={tripURL} className='trip'>
                            <p>{el.name}</p>
                            <p>{el.date_start}</p>
                        </a>
                    <div>
                    </div>
                </div>
                )
    })

    return (
        <DefaultLayout title='homepage' css='/css/home.css'>
            <div className='trips-div'>
                {newTrip}
                {showTrips}
            </div>
            <script src='/script/home.js'></script>
        </DefaultLayout>
    );
  }
}

module.exports = Home;