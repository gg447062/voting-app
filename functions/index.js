const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Web3 = require('web3');
const dotenv = require('dotenv').config();

const web3 = new Web3(
  `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`
);

admin.initializeApp();

exports.verifySignature = functions.https.onCall(async (data) => {
  const signatureAddress = await web3.eth.accounts.recover(
    data.messageHash,
    data.signature
  );

  if (data.address.toLowerCase() === signatureAddress.toLowerCase()) {
    return true;
  } else {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'signature does not match wallet address'
    );
  }
});
