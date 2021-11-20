const admin = require("firebase-admin");
const serviceAccount = require("./sopkathon-melting-server-firebase-adminsdk-u8j77-f65309ed64");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};