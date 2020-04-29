/**********************
=======================
Add activity form into day-body
=======================
***********************/

const addActivityBtn = document.querySelector('.add-activity-btn');


// Create button function and send AJAX post request
const saveForm = (formNum) => {
    const activityFormDiv = document.querySelector(`.form-div${formNum}`);
    const getTitle = document.querySelector(`.title${formNum}`).value
    const getLocation = document.querySelector(`.location${formNum}`).value
    const getTimeStart = document.querySelector(`.timestart${formNum}`).value
    const getTimeEnd = document.querySelector(`.timeend${formNum}`).value
    const getNotes = document.querySelector(`.notes${formNum}`).value

    let data = {'title' : getTitle, 'location' : getLocation, 'time_start' : getTimeStart, 'time_end' : getTimeEnd, 'notes' : getNotes};

    var request = new XMLHttpRequest();   // new HttpRequest instance

    request.addEventListener("load", function(){
      console.log("DONE");
      activityFormDiv.style.display = 'none';

      console.log(this.responseText);

      const response = JSON.parse(this.responseText)

      const title = response.title;
      const time_start = response.time_start;
      const time_end = response.time_end;
      const location = response.location;
      const notes = response.notes;

      createActivityCard(title, time_start, time_end, location, notes, formNum);
    });

    request.open("POST", '/addactivity');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));

}

const createActivityCard = (title, time_start, time_end, location, notes, formNum) => {
    const activityCardDiv = document.createElement('div');
    activityCardDiv.className = "activity-card-div"
    activityCardDiv.classList.add(`card-div${formNum}`)

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    cardTitle.className = `card-title`;
    cardTitle.classList.add(`card-title${formNum}`)


    const cardTime = document.createElement('p')
    cardTime.textContent = `${time_start} ➡ ${time_end}`;
    cardTime.className = `card-time`;
    cardTime.classList.add(`card-time-${formNum}`)

    const cardLocation = document.createElement('p')
    cardLocation.textContent = location;
    cardLocation.className = `card-location`;
    cardLocation.classList.add(`card-location-${formNum}`)

    const cardNotes = document.createElement('p')
    cardNotes.textContent = notes;
    cardNotes.className = `card-notes`;
    cardNotes.classList.add(`card-notes-${formNum}`);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.className = 'edit-btn'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', () => {
        console.log('editing');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        console.log('deleting');
    });

    // Add all components inside activity card
    activityCardDiv.appendChild(cardTitle);
    activityCardDiv.appendChild(deleteBtn);
    activityCardDiv.appendChild(editBtn);
    activityCardDiv.appendChild(cardTime);
    activityCardDiv.appendChild(cardLocation);
    activityCardDiv.appendChild(cardNotes);

    // Add inside Document
    const dayBody = document.querySelector('.days-body');
    dayBody.insertBefore(activityCardDiv, addActivityBtn);
}


const addForm = () => {

    // Get index of activity form
    const formNum = document.querySelectorAll('.activity-form-div').length;

    const dayBody = document.querySelector('.days-body');

    const activityForm = document.querySelector('.activity-form-div');

    let newActivityForm = activityForm.cloneNode(true);

    dayBody.insertBefore(newActivityForm, addActivityBtn);


    // // Create activity form
    // const activityFormDiv = document.createElement('div');
    // activityFormDiv.className = "activity-form-div"
    // activityFormDiv.classList.add(`form-div${formNum}`)

    // const activityForm = document.createElement('form');
    // activityForm.className = "activity-form"

    // const title = document.createElement('input');

    // title.setAttribute('type', 'text');
    // title.setAttribute('name', 'title');
    // title.setAttribute('placeholder', 'Activity');
    // title.className="activity-title"
    // title.classList.add(`title${formNum}`)

    // const venue = document.createElement('input');
    // venue.setAttribute('type', 'text');
    // venue.setAttribute('name', 'location');
    // venue.setAttribute('placeholder', 'location');
    // venue.className="activity-location"
    // venue.classList.add(`location${formNum}`)

    // const timeStart = document.createElement('input');
    // timeStart.setAttribute('type', 'time');
    // timeStart.setAttribute('name', 'time_start');
    // timeStart.className="activity-timestart"
    // timeStart.classList.add(`timestart${formNum}`)

    // const timeEnd = document.createElement('input');
    // timeEnd.setAttribute('type', 'time');
    // timeEnd.setAttribute('name', 'time_end');
    // timeEnd.className="activity-timeend"
    // timeEnd.classList.add(`timeend${formNum}`)

    // const notes = document.createElement('input');
    // notes.setAttribute('type', 'text');
    // notes.setAttribute('name', 'notes');
    // notes.setAttribute('placeholder', 'notes');
    // notes.className="activity-notes"
    // notes.classList.add(`notes${formNum}`)

    // const saveBtn = document.createElement('button');
    // saveBtn.setAttribute('type', 'button');
    // saveBtn.className = 'save-btn'
    // saveBtn.textContent = 'Save'
    // saveBtn.addEventListener('click', () => {
    //     saveForm(formNum)
    // });


    // activityForm.appendChild(title);
    // activityForm.appendChild(venue);
    // activityForm.appendChild(timeStart);
    // activityForm.appendChild(timeEnd);
    // activityForm.appendChild(notes);
    // activityForm.appendChild(saveBtn);

    // activityFormDiv.appendChild(activityForm);

}

addActivityBtn.addEventListener('click', addForm);


/**********************
=======================
Initialize Google Map
=======================
***********************/

// Attach your callback function to the `window` object
window.initMap = function() {
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    // JS API is loaded and available
    let map = new google.maps.Map(document.getElementById('map'), {
        center: sydney,
        zoom: 12
    });

    let request = {
        query: 'Museum of Contemporary Art Australia',
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
        }
    });

    function createMarker(place) {
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

};