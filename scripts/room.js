const socket = io();
const roomID = location.href.split('/').pop();
const myVideo = document.querySelector('#myVideo');
const theirVideo = document.querySelector('#theirVideo');
const signalingMessagesDiv = document.querySelector('.signalingMessages');
const configuration = {
	iceServers: [
		{
			url: 'stun:stun.l.google.com:19302'
		}
	]
};
const rtcPeerConnection;

socket.emit('joinRoom', roomID);

socket.on('signal', msg => {
	console.log(msg);
});
