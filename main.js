import './style.css';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDTcKz0bwnzuPcZH6c3x3COBSTbKWF18zU',
	authDomain: 'contour-4f9d8.firebaseapp.com',
	databaseURL: 'https://contour-4f9d8-default-rtdb.firebaseio.com',
	projectId: 'contour-4f9d8',
	storageBucket: 'contour-4f9d8.appspot.com',
	messagingSenderId: '470361926649',
	appId: '1:470361926649:web:537bbf4e18fd4acc752b28',
	measurementId: 'G-MZF9PFF86M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// Code
const servers = {
	iceServers: [
		{
			urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302'],
		},
	],
	iceCandidatePoolSize: 10,
};

// Global state
let pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

const webcamBtn = document.querySelector('#webcamBtn');
const webcamVideo = document.querySelector('#webcamVideo');
const callBtn = document.querySelector('#callBtn');
const callInput = document.querySelector('#callInput');
const answerBtn = document.querySelector('#answerBtn');
const remoteVideo = document.querySelector('#remoteVideo');
const hangupBtn = document.querySelector('#hangupBtn');
