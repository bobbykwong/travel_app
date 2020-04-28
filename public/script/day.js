/**********************
=======================
Add activity form into day-body
=======================
***********************/

const addActivityBtn = document.querySelector('.add-activity-btn');

const addForm = () => {

    // Get index of activity form
    const formNum = document.querySelectorAll('.activity-form-div').length;

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
    title.classList.add(`title${formNum}`)

    const venue = document.createElement('input');
    venue.setAttribute('type', 'text');
    venue.setAttribute('name', 'location');
    venue.setAttribute('placeholder', 'location');
    venue.className="activity-location"
    venue.classList.add(`location${formNum}`)

    const timeStart = document.createElement('input');
    timeStart.setAttribute('type', 'time');
    timeStart.setAttribute('name', 'time_start');
    timeStart.className="activity-timestart"
    timeStart.classList.add(`timestart${formNum}`)

    const timeEnd = document.createElement('input');
    timeEnd.setAttribute('type', 'time');
    timeEnd.setAttribute('name', 'time_end');
    timeEnd.className="activity-timeend"
    timeEnd.classList.add(`timeend${formNum}`)

    const notes = document.createElement('input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('name', 'notes');
    notes.setAttribute('placeholder', 'notes');
    notes.className="activity-notes"
    notes.classList.add(`notes${formNum}`)

    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('type', 'button');
    saveBtn.className = 'save-btn'
    saveBtn.textContent = 'Save'

    // Create button function and send AJAX post request
    const saveForm = () => {
        const getTitle = document.querySelector(`.title${formNum}`).value
        const getLocation = document.querySelector(`.location${formNum}`).value
        const getTimeStart = document.querySelector(`.timestart${formNum}`).value
        const getTimeEnd = document.querySelector(`.timeend${formNum}`).value
        const getNotes = document.querySelector(`.notes${formNum}`).value

        let data = {'title' : getTitle, 'location' : getLocation, 'time_start' : getTimeStart, 'time_end' : getTimeEnd, 'notes' : getNotes};

        var request = new XMLHttpRequest();   // new HttpRequest instance

        request.addEventListener("load", function(){

          console.log("DONE");
          console.log( this.responseText );
        });

        request.open("POST", '/addactivity');
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.send(JSON.stringify(data));

    }
    saveBtn.addEventListener('click', saveForm);


    activityForm.appendChild(title);
    activityForm.appendChild(venue);
    activityForm.appendChild(timeStart);
    activityForm.appendChild(timeEnd);
    activityForm.appendChild(notes);
    activityForm.appendChild(saveBtn);

    activityFormDiv.appendChild(activityForm);

    dayBody.insertBefore(activityFormDiv, addActivityBtn);
}

addActivityBtn.addEventListener('click', addForm);