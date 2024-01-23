import admin from "firebase-admin";

const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY as string;
const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL as string;
const FIREBASE_PROJECT_ID = process.env
  .NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL as string;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: FIREBASE_PROJECT_ID,
      privateKey: FIREBASE_PRIVATE_KEY,
      clientEmail: FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: FIREBASE_DATABASE_URL,
  });
}

export default admin.database();
