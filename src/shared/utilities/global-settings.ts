import { FirebaseOptions } from 'firebase/app'

const appEnv = process.env.NEXT_PUBLIC_APP_ENV ?? 'development'

const hostURL = (() => {
  switch (appEnv) {
    case 'production':
      return 'https://example.com'

    default:
      return 'http://localhost:3000'
  }
})()

const firebaseOptions: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

export const globalSettings = {
  appEnv,
  hostURL,
  firebase: firebaseOptions,
}
