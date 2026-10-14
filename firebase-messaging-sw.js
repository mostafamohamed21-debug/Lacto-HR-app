/* Firebase Cloud Messaging background handler; host beside index.html on HTTPS. */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
firebase.initializeApp({apiKey:'AIzaSyBObCeo4PM20UNYObThwdY4UaOiIhWdXa0',authDomain:'lacto-hr-system.firebaseapp.com',databaseURL:'https://lacto-hr-system-default-rtdb.firebaseio.com',projectId:'lacto-hr-system',messagingSenderId:'671259800401',appId:'1:671259800401:web:905e1a36adba52ba2d1970'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{
  // Data-only messages need an explicit notification. FCM notification payloads
  // can be displayed by the SDK automatically; avoid showing them twice.
  if(payload.notification)return;
  const data=payload.data||{};
  return self.registration.showNotification(data.title||'Lacto Misr HR',{body:data.body||'',icon:'./logo.png',tag:data.tag||'ess-message',data:{url:'./index.html'}});
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil(clients.openWindow(new URL('./index.html',self.registration.scope).href));
});
