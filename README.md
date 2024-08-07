Mobile Chat App

This mobile chat app is built using react native and provides a user friendly experience that allows photos, geo-locations, and messages to be sent from one user to another.

How to use 
The user will open the app and find a welcome page which asks for them to input a name and select a color for the chat screen. After doing so, the user will be directed into a chat where they can send messages, their geo-location, and also gives them the option to send a picture from their camera roll or take a picture. The data is stored both online and offline, but the app will still require an internet connection to be used.



React Native
Expo
Firebase (Firestore, Auth, Storage)
Gifted Chat
AsyncStorage
Installation

Clone the repository:

sh

Copy code

git clone https://github.com/skhan139/Chat-App

Install dependencies:

sh

Copy code

npm install

Set up Firebase:

Create an account and start a new project.

Set up the database under Build -> Firestore Database.

Activate storage.

Change rules from:

js

Copy code

allow read, write: if false;

to:

js

Copy code

allow read, write: if true;






The app must allow users to take pictures with the device’s camera app and send them.
The app must store images in Firebase Cloud Storage.
The app must be able to read the user’s location data.
Location data must be sent via the chat in a map view.
The chat interface and functionality must be created using the Gifted Chat library.
The app’s codebase must contain comments.
