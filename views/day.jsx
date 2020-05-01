var React = require("react");
var DefaultLayout = require("./components/layout/default");

class Login extends React.Component {
  render() {

    const dayHeader = (
                    <div className='day-header'>
                        <h2 className="day-num">DAY {this.props.days_id}</h2>
                    </div>
                    )

    const allActivities = this.props.activities;

    const showActivities = allActivities.map((el, i) => {
        const divName = `activity-card-div card-div${i} activityid${el.id}`;
        const titleName = `card-title card-title${i}`;
        const timeName = `card-time card-time-${i}`;
        const locationName = `card-location card-location-${i}`;
        const notesName = `card-notes card-notes-${i+1}`
        const deleteName = `delete-btn delete${el.id}`;
        const editName = `edit-btn edit${el.id}`;

        return (
            <div className={divName}>
                <h3 className={titleName}>{el.title}</h3>
                <button type="button" className={deleteName}>Delete</button>
                <button type="button" className={editName}>Edit</button>
                <p className={timeName}>{el.time_start} ➡ {el.time_end}</p>
                <p className={locationName}>{el.location}</p>
                <p className={notesName}>{el.notes}</p>
            </div>
            )
    })

    const addActivityForm = (
        <div className="activity-form-div form-div0">
            <form className="activity-form">
                <div class="row">
                    <div class="col">
                        <input type="text" name='title' placeholder='Activity' className="form-control activity-title title0"></input><br></br>
                        <input type='text' name='location' placeholder='Location' className="form-control activity-location location0"></input><br></br>
                        <input type='time' name='time_start' className="form-control activity-timestart timestart0"></input>
                        <input type='time' name='time_end' className="form-control activity-timeend timeend0"></input><br></br>
                        <label className="label-timestart" for="activity-timestart">Start</label>
                        <label className="label-timeend" for="activity-timestart">End</label>
                    </div>
                    <div class="col">
                        <input type='text' name='notes' placeholder='notes' className="form-control activity-notes notes0"></input>
                        <button type='button' className = 'save-btn'>Save</button>
                    </div>
                </div>
            </form>
        </div>

                    )

    const addActivityBtn = (
                        <div className='add-activity-btn-div'>
                            <button type='button' className='add-activity-btn'>Add Activity</button>
                        </div>
                        )

    return (
        <DefaultLayout title='day' css='/css/day.css'>
            {dayHeader}
            <div className='days-body'>
                {showActivities}
                {addActivityForm}
                {addActivityBtn}
                <div id="map"></div>
            </div>
            <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCUoCP1u86ZopN6JWDAWKi8LdOhWSke9v4&callback=initMap&libraries=places' async defer></script>
            <script src='/script/day.js'></script>
        </DefaultLayout>
    );
  }
}

module.exports = Login;