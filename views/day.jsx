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
        // Classnames of edit form
        const divUpdate = `activity-form-div form-div${i} activityformid${el.id} formhide`;
        const titleUpdate = `form-control activity-title title${i}`;
        const timeStartUpdate = `form-control activity-timestart timestart${i}`;
        const timeEndUpdate = `form-control activity-timeend timeend${i}`;
        const locationUpdate = `form-control activity-location location${i}`;
        const notesUpdate = `form-control activity-notes notes${i}`

        // Classnames of activity card
        const formCard = `form-card${i}`
        const divName = `activity-card-div card-div${i} activityid${el.id}`;
        const titleName = `card-title card-title${i}`;
        const timeName = `card-time card-time-${i}`;
        const locationName = `card-location card-location-${i}`;
        const notesName = `card-notes card-notes-${i+1}`
        const deleteName = `delete-btn delete${el.id}`;
        const editName = `edit-btn edit${el.id}`;

        return (
            <div className={formCard}>
                <div className={divUpdate}>
                    <form className="activity-form">
                        <div className="row">
                            <div className="col">
                                <input type="text" name='title' placeholder='Activity' className={titleUpdate}></input><br></br>
                                <input type='text' name='location' placeholder='Location' className={locationUpdate}></input><br></br>
                                <input type='time' name='time_start' className={timeStartUpdate}></input>
                                <input type='time' name='time_end' className={timeEndUpdate}></input><br></br>
                                <label className="label-timestart" for="activity-timestart">Start</label>
                                <label className="label-timeend" for="activity-timestart">End</label>
                            </div>
                            <div class="col">
                                <input type='text' name='notes' placeholder='notes' className={notesUpdate}></input>
                                <button type='button' className = 'update-btn'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={divName}>
                    <h3 className={titleName}>{el.title}</h3>
                    <button type="button" className={deleteName}>Delete</button>
                    <button type="button" className={editName}>Edit</button>
                    <p className={timeName}>{el.time_start} ➡ {el.time_end}</p>
                    <p className={locationName}>{el.location}</p>
                    <p className={notesName}>{el.notes}</p>
                </div>
            </div>
            )
    })

    // Activity form num starts after all activities form have been put in
    const addActivityForm = () => {
        const num = allActivities.length;
        const formCard = `form-card${num}`
        const divUpdate = `activity-form-div form-div${num}`;
        const titleUpdate = `form-control activity-title title${num}`;
        const timeStartUpdate = `form-control activity-timestart timestart${num}`;
        const timeEndUpdate = `form-control activity-timeend timeend${num}`;
        const locationUpdate = `form-control activity-location location${num}`;
        const notesUpdate = `form-control activity-notes notes${num}`

        return (
            <div className={formCard}>
                <div className={divUpdate}>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" name='title' placeholder='Activity' className="form-control activity-title title0"></input><br></br>
                                <input type='text' name='location' placeholder='Location' className={locationUpdate}></input><br></br>
                                <input type='time' name='time_start' className={timeStartUpdate}></input>
                                <input type='time' name='time_end' className={timeEndUpdate}></input><br></br>
                                <label className="label-timestart" for="activity-timestart">Start</label>
                                <label className="label-timeend" for="activity-timestart">End</label>
                            </div>
                            <div class="col">
                                <input type='text' name='notes' placeholder='notes' className={notesUpdate}></input>
                                <button type='button' className = 'save-btn'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

                )
    }


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
                {addActivityForm()}
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