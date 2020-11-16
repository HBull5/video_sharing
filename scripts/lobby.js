const newRoomBtn = document.querySelector('#newRoom');
const joinRoomBtn = document.querySelector('#joinRoom');
const newRoomID = newRoomBtn.getAttribute('data-roomID');
const joinRoomInput = document.querySelector('input');

newRoomBtn.addEventListener('click', () => {
	location.href = `http://localhost:3000/room/${newRoomID}`;
});

joinRoomBtn.addEventListener('click', () => {
	console.log(`Under construction`);
});
