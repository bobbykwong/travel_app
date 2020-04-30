var React = require("react");
var DefaultLayout = require("./components/layout/default")

class Trip extends React.Component {
  render() {
    const tripID = this.props.id;

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
        <DefaultLayout title='homepage' css='/css/trip.css' pageTitle={pageTitle}>
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
        </DefaultLayout>
    );
  }
}

module.exports = Trip;