// Fetch data from the API and populate the room list
function fetchRooms() {
  fetch('Json-server --watch db.json')
    .then((response) => response.json())
    .then((data) => {
      const roomListSection = document.getElementById('room-list');
      let roomListHTML = '';

      data.forEach((room) => {
        roomListHTML += `
          <div class="room-item">
            <img src="${room.roomImage}" alt="${room.roomType}">
            <h3>${room.roomType}</h3>
            <p>Price: $${room.price}</p>
            <p>Amenities: ${room.amenities.join(', ')}</p>
          </div>
        `;
      });

      roomListSection.innerHTML = roomListHTML;
    })
    .catch((error) => console.error('Error fetching rooms:', error));
}

// Other functions and event listeners...

// Attach event listener to the reservation form submit button
const reservationForm = document.getElementById('reservation-form');
reservationForm.addEventListener('submit', handleReservationFormSubmit);

// Add event listeners for navigation links
document.getElementById('nav-room-list').addEventListener('click', () => {
  showSection('room-list');
});

document.getElementById('nav-reservation').addEventListener('click', () => {
  showSection('reservation');
});

document.getElementById('nav-booking-history').addEventListener('click', () => {
  showSection('booking-history');
});

// On page load, fetch the rooms data and populate the room list
document.addEventListener('DOMContentLoaded', fetchRooms);