let localStream;
let remoteStream;

const servers = {
	iceServers: [
		{
			urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302'],
		},
	],
};

/** request video and audio permission */
let init = async () => {
	localStream = await navigator.mediaDevices.getUserMedia({
		// audio: true,
		video: true,
	});

	let userOne = document.getElementById('user1');
	userOne.srcObject = localStream;

	createOffer();
};

/** create initial peer connection */
let createOffer = async () => {
	let peerConnction = new RTCPeerConnection();
	remoteStream = new MediaStream();

	let userTwo = document.getElementById('user2');
	userTwo.srcObject = remoteStream;

	let offer = await peerConnction.createOffer();
	await peerConnction.setLocalDescription(offer);
	console.log('OFFER: ', offer);
};

init();
