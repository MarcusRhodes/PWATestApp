importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyApObND-sFuG9yd8qMpHQ4b5t7C79Mtpv0",
    authDomain: "pwatestapp-7a0db.firebaseapp.com",
    databaseURL: "https://pwatestapp-7a0db.firebaseio.com",
    projectId: "pwatestapp-7a0db",
    storageBucket: "",
    messagingSenderId: "950254808087"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});

// curl -X POST -H "Authorization: key=AAAA3T-ZrBc:APA91bFxqo20OEAIwmhQHkYyA34BWt52BWAeDIIvlpuqNXSJcuWVrfQURIZinfKg0LkmbRu2mKH2IdxWEQVzDXUqLAvSILyof2jJZXy0cuP1gvUBcjY0OFbqB6cU-S-DBV9VM_A8uPNf" -H "Content-Type: application/json" -d '{ "notification": { "title": "Hello World PWA","body": "Hi", }, "to": "DEVICE_REGISTRATION_TOKEN" }' "https://fcm.googleapis.com/fcm/send"