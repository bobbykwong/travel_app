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
        const locationUpdate = `form-control autocomplete activity-location location${i}`;
        const notesUpdate = `form-control activity-notes notes${i}`
        const updateBtn = `update-btn updateform${i} update${el.id}`

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
                                <input type="text" name='title' placeholder={el.title} className={titleUpdate} value={el.title}></input><br></br>
                                <input type='text' name='location' placeholder={el.location} className={locationUpdate} onFocus="geolocate()" value={el.location}></input><br></br>
                                <input type='time' name='time_start' className={timeStartUpdate} value={el.time_start}></input>
                                <input type='time' name='time_end' className={timeEndUpdate} value={el.time_end}></input><br></br>
                                <label className="label-timestart" for="activity-timestart">Start</label>
                                <label className="label-timeend" for="activity-timestart">End</label>
                            </div>
                            <div class="col">
                                <input type='text' name='notes' placeholder={el.notes} className={notesUpdate} value={el.notes}></input>
                                <button type='button' className ={updateBtn}>Save</button>
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
        const divAdd = `activity-form-div form-div${num}`;
        const titleAdd = `form-control activity-title title${num}`;
        const timeStartAdd = `form-control activity-timestart timestart${num}`;
        const timeEndAdd = `form-control activity-timeend timeend${num}`;
        const locationAdd = `form-control autocomplete activity-location location${num}`;
        const notesAdd = `form-control activity-notes notes${num}`
        const saveBtn = `save-btn save${num}`

        return (
            <div className={formCard}>
                <div className={divAdd}>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" name='title' placeholder='Activity' className={titleAdd}></input><br></br>
                                <input type='text' name='location' placeholder='Location' className={locationAdd} onFocus="geolocate()"></input><br></br>
                                <input type='time' name='time_start' className={timeStartAdd}></input>
                                <input type='time' name='time_end' className={timeEndAdd}></input><br></br>
                                <label className="label-timestart" for="activity-timestart">Start</label>
                                <label className="label-timeend" for="activity-timestart">End</label>
                            </div>
                            <div class="col">
                                <input type='text' name='notes' placeholder='notes' className={notesAdd}></input>
                                <button type='button' className={saveBtn}>Save</button>
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

    // Put country lat long details into class name of map
    const lat = this.props.countryDetails[0].lat;
    const lng = this.props.countryDetails[0].lng;
    const country = this.props.countryDetails[0].country;
    const countryDetails = `country-details ${lat} ${lng} ${country}`;

    const googleURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_KEY}&libraries=places&callback=initialize`

    return (
        <DefaultLayout title='day' css='/css/day.css'>
            {dayHeader}
            <div className='days-body'>
                {showActivities}
                {addActivityForm()}
                {addActivityBtn}
                <div id="map" className={countryDetails}></div>
            </div>
            <script src={googleURL} async defer></script>
            <script src='/script/day.js'></script>
        </DefaultLayout>
    );
  }
}

module.exports = Login;