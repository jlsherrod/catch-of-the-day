import Rebase from 're-base'
import firebase from 'firebase'

const fireBaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCJLVEOCCuuoVEd8GBKLsNNMdeiMOixr6o',
  authDomain: 'catch-of-the-day-james-6197a.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-james-6197a-default-rtdb.firebaseio.com',
})

const base = Rebase.createClass(fireBaseApp.database())

export { fireBaseApp }

export default base
