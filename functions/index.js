/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.database();

exports.updateGameTime = functions.database
    .ref('/games/{gameId}')
    .onUpdate(async (change, context) => {
        const gameId = context.params.gameId;
        const gameData = change.after.val();

        // Retrieve the previous state
        const previousData = change.before.val();

        if (gameData.running && !previousData.running) {
            // Game just started. Store the start time
            const startTime = admin.database.ServerValue.TIMESTAMP;
            try {
                await db.ref(`games/${gameId}`).update({ startTime: startTime });
            } catch (err) {
                console.error(err.message);
            }
        } else if (gameData.running && previousData.running) {
            // Game is ongoing, calculate the elapsed time and extra time
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - gameData.startTime) / 1000);
            let extraTime = gameData.extraTime;

            if (elapsedTime > 90 * 60) {
                // Add to extra time if elapsed time is greater than 90 minutes
                extraTime += elapsedTime - 90 * 60;
            }

            try {
                await db.ref(`games/${gameId}`).update({ time: elapsedTime, extraTime: extraTime });
            } catch (err) {
                console.error(err.message);
            }
        } else if (!gameData.running && previousData.running) {
            // Game just stopped. Calculate the final time and extra time
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - gameData.startTime) / 1000);
            let extraTime = gameData.extraTime;

            if (elapsedTime > 90 * 60) {
                // Add to extra time if elapsed time is greater than 90 minutes
                extraTime += elapsedTime - 90 * 60;
            }

            try {
                await db.ref(`games/${gameId}`).update({ time: elapsedTime, extraTime: extraTime });
            } catch (err) {
                console.error(err.message);
            }
        }
    });
