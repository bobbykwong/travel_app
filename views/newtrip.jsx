var React = require("react");
var DefaultLayout = require("./components/layout/default")

class Login extends React.Component {
  render() {

    const newTripForm = (
            <form action='/addnewtrip' method='post' className='form'>
                <input type="text" name="country" placeholder="Destination" className="country" id="autocomplete" onFocus="geolocate()"></input><br></br>
                <input type="number" step="any" name="lat" style={{display: "none"}} className="lat"></input>
                <input type="number" step="any" name="lng" style={{display: "none"}} className="lng"></input>
                <input type="text" name="name" placeholder="trip name" className="trip-name"></input><br></br>
                <input type="date" name="date_start" className="date-start"></input>
                <input type="date" name="date_end" className="date-end"></input><br></br>
                <input type="submit" value="Create Trip" className="submit"></input>
            </form>
                        )

    const googleURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_KEY}&libraries=places&callback=initAutocomplete`

    return (
        <DefaultLayout title='newtrip' css='/css/newtrip.css'>
            <div className='new-trip'>
                {newTripForm}
            </div>
        <script src="/script/newtrip.js"></script>
        <script src={googleURL}async defer></script>
        </DefaultLayout>
    );
  }
}

module.exports = Login;