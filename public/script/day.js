/**********************
=======================
Add activity form into day-body
=======================
***********************/

const addActivityBtn = document.querySelector('.add-activity-btn-div');


// Add event listener to save button
const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', () => {
    // const formNum = document.querySelectorAll('.activity-form-div').length;
    saveForm(0)
})

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

        const id = response.id;
        const title = response.title;
        const time_start = response.time_start;
        const time_end = response.time_end;
        const location = response.location;
        const notes = response.notes;

        const cardNum = document.querySelectorAll('.activity-card-div').length
        createActivityCard(title, time_start, time_end, location, notes, cardNum, id);
    });

    request.open("POST", '/addactivity');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));

}

const createActivityCard = (title, time_start, time_end, location, notes, formNum, id) => {
    const activityCardDiv = document.createElement('div');
    activityCardDiv.className = "activity-card-div";
    activityCardDiv.classList.add(`card-div${formNum}`);
    activityCardDiv.classList.add(`activityid${id}`);

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
    editBtn.classList.add( `edit${id}`);
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', () => {
        console.log('editing');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.className = 'delete-btn'
    deleteBtn.classList.add( `delete${id}`);
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteForm(id
            )
    });

    // Add all components inside activity card
    activityCardDiv.appendChild(cardTitle);
    activityCardDiv.appendChild(deleteBtn);
    activityCardDiv.appendChild(editBtn);
    activityCardDiv.appendChild(cardTime);
    activityCardDiv.appendChild(cardLocation);
    activityCardDiv.appendChild(cardNotes);

    // Add inside form-card div
    const formCard = document.querySelector(`.form-card${formNum}`);
    formCard.appendChild(activityCardDiv);
}


const addForm = () => {

    // Get index of activity form
    const formNum = document.querySelectorAll('.activity-form-div').length;

    const dayBody = document.querySelector('.days-body');

    const activityForm = document.querySelectorAll('.activity-form-div')[document.querySelectorAll('.activity-form-div').length-1];

    let newActivityForm = activityForm.cloneNode(true);

    dayBody.insertBefore(newActivityForm, addActivityBtn);

    // Change classname to appropriate form num
    const activityFormDiv = document.querySelectorAll('.activity-form-div')[document.querySelectorAll('.activity-form-div').length-1];
    activityFormDiv.classList.remove(`form-div${formNum-1}`);
    activityFormDiv.classList.add(`form-div${formNum}`);
    activityFormDiv.style.display = 'block';

    const activityTitle = document.querySelectorAll('.activity-title')[document.querySelectorAll('.activity-title').length-1];
    activityTitle.classList.remove(`title${formNum-1}`);
    activityTitle.classList.add(`title${formNum}`);
    activityTitle.value = '';

    const activityLocation = document.querySelectorAll('.activity-location')[document.querySelectorAll('.activity-location').length-1];
    activityLocation.classList.remove(`location${formNum-1}`)
    activityLocation.classList.add(`location${formNum}`)
    activityLocation.value = '';

    const activityTimeStart = document.querySelectorAll('.activity-timestart')[document.querySelectorAll('.activity-timestart').length-1];
    activityTimeStart.classList.remove(`timestart${formNum-1}`)
    activityTimeStart.classList.add(`timestart${formNum}`)
    activityTimeStart.value = '';

    const activityTimeEnd = document.querySelectorAll('.activity-timeend')[document.querySelectorAll('.activity-timeend').length-1];
    activityTimeEnd.classList.remove(`timeend${formNum-1}`);
    activityTimeEnd.classList.add(`timeend${formNum}`);
    activityTimeEnd.value = '';

    const activityNotes = document.querySelectorAll('.activity-notes')[document.querySelectorAll('.activity-notes').length-1];
    activityNotes.classList.remove(`notes${formNum-1}`);
    activityNotes.classList.add(`notes${formNum}`);
    activityNotes.value = '';

    const saveBtn = document.querySelectorAll('.save-btn')[document.querySelectorAll('.save-btn').length-1];
    saveBtn.addEventListener('click', () => {
        saveForm(formNum)
    })

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
======================
Create function for delete button
=========================
*********************/

const allDeleteBtn = document.querySelectorAll('.delete-btn');
allDeleteBtn.forEach(el => {
    // Get the ID of the acitivity from className
    const activityID = el.classList[1].slice(6);

    el.addEventListener('click', () => {
        deleteForm(activityID)
    })
})

const deleteForm = (activityID) => {
    var request = new XMLHttpRequest();   // new HttpRequest instance

    request.addEventListener("load", function(){
        console.log(this.responseText);

        // remove activity from UI
        const parentNode = document.querySelector('.days-body');
        const childNode = document.querySelector(`.activityid${activityID}`)
        parentNode.removeChild(childNode);
        console.log('done removing from DOM')
    });

    request.open("POST", `/deleteactivity/${activityID}/?_method=delete`);

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send();
}



/**********************
======================
Create function for Edit button
=========================
*********************/


// Change card into form for editing
const allEditBtn = document.querySelectorAll('.edit-btn');
allEditBtn.forEach(el => {
    // Get the ID of the acitivity from className
    const activityID = el.classList[1].slice(4);

    el.addEventListener('click', () => {
        editForm(activityID)
    })
})

const editForm = (activityID) => {
    // Hide display of activity card
    const card = document.querySelector(`.activityid${activityID}`);
    console.log(card);
    card.style.display = 'none';
    console.log(card);

    // Show display of activity form
    const form = document.querySelector(`.activityformid${activityID}`);
    form.style.display = "block";
}


// Update form
// Add event listener to save button
const allUpdateBtn = document.querySelectorAll('.update-btn');
allUpdateBtn.forEach(el => {
    // Get the ID of the acitivity from className
    const activityID = el.classList[2].slice(6);
    const formNum = el.classList[1].slice(10);
    console.log(activityID)
    console.log(formNum);
    el.addEventListener('click', () => {
        updateForm(formNum, activityID)
    })
})

// Create button function and send AJAX post request
const updateForm = (formNum, activityID) => {
    const activityFormDiv = document.querySelector(`.form-div${formNum}`);
    const getTitle = document.querySelector(`.title${formNum}`).value
    const getLocation = document.querySelector(`.location${formNum}`).value
    const getTimeStart = document.querySelector(`.timestart${formNum}`).value
    const getTimeEnd = document.querySelector(`.timeend${formNum}`).value
    const getNotes = document.querySelector(`.notes${formNum}`).value

    let data = {'title' : getTitle, 'location' : getLocation, 'time_start' : getTimeStart, 'time_end' : getTimeEnd, 'notes' : getNotes};

    var request = new XMLHttpRequest();   // new HttpRequest instance

    request.addEventListener("load", function(){
        // remove previous activityCard
        const parentNode = document.querySelector(`.form-card${formNum}`);
        const childNode = document.querySelector(`.card-div${formNum}`)
        parentNode.removeChild(childNode);

        // Create new activity card
        activityFormDiv.style.display = 'none';

        console.log(this.responseText);

        const response = JSON.parse(this.responseText)[0]

        const id = response.id;
        const title = response.title;
        const time_start = response.time_start;
        const time_end = response.time_end;
        const location = response.location;
        const notes = response.notes;

        createActivityCard(title, time_start, time_end, location, notes, formNum, id);
    });

    request.open("POST", `/updateactivity/${activityID}/?_method=put`);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));

}

/**********************
=======================
Initialize Google Map
=======================
***********************/

function initialize() {
    initMap()
    initAutocomplete();
};


// Get lat and long details from clasname of map
const countryDetails = document.querySelector('.country-details').className;
const countryName = countryDetails.split(' ')[3];
const countryLat = parseFloat(countryDetails.split(' ')[1]);
const countryLng = parseFloat(countryDetails.split(' ')[2]);
console.log(countryLat, countryLng, countryName)

// Attach your callback function to the `window` object
window.initMap = function() {
    var country = new google.maps.LatLng(countryLat, countryLng);

    // JS API is loaded and available
    let map = new google.maps.Map(document.getElementById('map'), {
        center: country,
        zoom: 6
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


/**********************
=======================
Enable Google Map autocomplete
=======================
***********************/
let autocomplete;
function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['geocode']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the geometry components.
    autocomplete.setFields(['geometry']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    // Set lat lng as values for input
    const inputLat = document.querySelector('.lat');
    inputLat.value = lat;

    const inputLng = document.querySelector('.lng');
    inputLng.value = lng;
}


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
                {center: geolocation, radius: position.coords.accuracy});
            autocomplete.setBounds(circle.getBounds());
        });
    }
}