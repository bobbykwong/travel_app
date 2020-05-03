var React = require("react");
var DefaultLayout = require("./components/layout/default")

class Trip extends React.Component {
  render() {
    const tripID = this.props.id;

    const tripName = this.props.name;
    const pageTitle = (
                    <h2 className='page-title'>{tripName}</h2>
                    )

    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const tripHeader = (
                    <div className='trip-header'>
                        <h2 className='page-title'>{tripName}</h2>
                        <p className="country">{this.props.country}</p>
                        <p>{this.props.date_start} ➡ {this.props.date_end}</p>
                    </div>
                    )

    let friendOptions;

    const inviteFriendForm = () => {
            const url = `/addfriend/${tripID}`

            return(
            <div className='friend-form'>
                <form id='form1' action={url} method='POST'>
                    <input name='friend' placeholder='Friend username' className='friend-input'></input>
                    <button type='submit' class="btn btn-outline-info friend-submit" form='form1'>Invite a Friend</button>
                </form>
            </div>
            )
    }

    const tripFriends = this.props.tripFriends;

    let showFriends = tripFriends.map((el, i) => {
        return (
            <tr>
                <th scope="row">{i+1}</th>
                <td>{el.username}</td>
            </tr>
            )
    })


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
        <DefaultLayout title='trip' css='/css/trip.css'>
            {tripHeader}
            <div className='container tables-div'>
                <div className="row">
                    <div className="col-md-3">
                        {inviteFriendForm()}
                        <table class="table table-striped table-secondary">
                            <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Trip Buddies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showFriends}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-9">
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
                </div>
            </div>
            <script src='/script/trip.js'></script>
        </DefaultLayout>
    );
  }
}

module.exports = Trip;