// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDn5paD8a_Ed7zmWKytnO5IO5KAsu9bI24',
  authDomain: 'react-chat-26da4.firebaseapp.com',
  projectId: 'react-chat-26da4',
  storageBucket: 'react-chat-26da4.appspot.com',
  messagingSenderId: '374718749235',
  appId: '1:374718749235:web:c8a76cb612ed1ed0b62146',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
