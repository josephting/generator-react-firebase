import { firebase as config } from '../config'
import Firebase from 'firebase'

const { apiKey, authDomain, databaseURL, storageBucket } = config

// Initialize Firebase
Firebase.initializeApp({ apiKey, authDomain, databaseURL, storageBucket })

export default Firebase
