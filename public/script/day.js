/**********************
=======================
Add activity form into day-body
=======================
***********************/

const addActivityBtn = document.querySelector('.add-activity-btn');

const addForm = () => {

    const dayBody = document.querySelector('.days-body');

    // Create activity form
    const activityFormDiv = document.createElement('div');
    activityFormDiv.className = "activity-form-div"

    const activityForm = document.createElement('form');
    activityForm.className = "activity-form"

    const title = document.createElement('input');

    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Activity');
    title.className="activity-title"

    const venue = document.createElement('input');
    venue.setAttribute('type', 'text');
    venue.setAttribute('name', 'location');
    venue.setAttribute('placeholder', 'location');
    venue.className="activity-location"


    const timeStart = document.createElement('input');
    timeStart.setAttribute('type', 'time');
    timeStart.setAttribute('name', 'time_start');
    timeStart.className="activity-timestart"


    const timeEnd = document.createElement('input');
    timeEnd.setAttribute('type', 'time');
    timeEnd.setAttribute('name', 'time_end');
    timeEnd.className="activity-timeend"


    const notes = document.createElement('input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('name', 'notes');
    notes.setAttribute('placeholder', 'notes');
    notes.className="activity-notes"


    activityForm.appendChild(title);
    activityForm.appendChild(venue);
    activityForm.appendChild(timeStart);
    activityForm.appendChild(timeEnd);
    activityForm.appendChild(notes);

    activityFormDiv.appendChild(activityForm);

    dayBody.insertBefore(activityFormDiv, addActivityBtn);
}

addActivityBtn.addEventListener('click', addForm);