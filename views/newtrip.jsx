var React = require("react");
var DefaultLayout = require("./components/layout/default")

class Login extends React.Component {
  render() {

    const newTripForm = (
            <form action='/addnewtrip' method='post' className='form'>
                <input type="text" name="country" placeholder="country" className="country" id="autocomplete" onFocus="geolocate()"></input><br></br>
                <input type="text" name="name" placeholder="trip name" className="trip-name"></input><br></br>
                <input type="date" name="date_start" className="date-start"></input>
                <input type="date" name="date_end" className="date-end"></input><br></br>
                <input type="submit" value="Create Trip" className="submit"></input>
            </form>
                        )


    return (
        <DefaultLayout title='newtrip' css='/css/newtrip.css'>
            <div className='new-trip'>
                {newTripForm}
            </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUoCP1u86ZopN6JWDAWKi8LdOhWSke9v4&libraries=places&callback=initAutocomplete"
        async defer></script>
        <script src="/script/newtrip.js"></script>
        </DefaultLayout>
    );
  }
}

module.exports = Login;