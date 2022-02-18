import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import serviceAccount from './serviceAccount.json'
import ProductRoutes from '@routes/ProductRoutes'

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id
  }),
  databaseURL: serviceAccount.databaseUrl
})

export const product = functions.https.onRequest(ProductRoutes)
