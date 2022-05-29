import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth'

import firebaseJson from '~/firebase.json'

import { globalSettings } from '@shared/utilities'

let app: FirebaseApp
let auth: Auth

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp(globalSettings.firebase)
  auth = getAuth(app)

  if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, `http://localhost:${firebaseJson.emulators.auth.port}`)
  }
}

export { auth }
