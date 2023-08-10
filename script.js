// Function to fetch room data from JSON file
function fetchRooms() {
  fetch('rooms.json') // Assuming your JSON file is named "rooms.json"
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

// Function to handle reservation form submission
function handleReservationFormSubmit(event) {
  event.preventDefault();

  const reservationForm = event.target;
  const guestName = reservationForm.elements['guest-name'].value;
  const guestEmail = reservationForm.elements['guest-email'].value;
  const selectedRoomId = reservationForm.elements['room'].value;
  const checkInDate = reservationForm.elements['check-in-date'].value;
  const checkOutDate = reservationForm.elements['check-out-date'].value;

  // Here, you can send the reservation data to the API and handle the response accordingly
  // For simplicity, we'll just log the reservation data for now
  const reservationData = {
    guestName,
    guestEmail,
    roomId: selectedRoomId,
    checkInDate,
    checkOutDate,
  };

  console.log('Reservation data:', reservationData);

  // Clear the form fields after submission
  reservationForm.reset();
}

// Function to show/hide sections based on user interactions (client-side routing)
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

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

// Attach event listener to the reservation form submit button
const reservationForm = document.getElementById('reservation-form');
reservationForm.addEventListener('submit', handleReservationFormSubmit);

// Run fetchRooms function on page load
document.addEventListener('DOMContentLoaded', fetchRooms);
