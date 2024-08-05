📱 Mobile Chat App

Overview

A mobile chat application built using React Native. This user-friendly app provides a seamless chat interface and advanced features for effortlessly sharing images and location in real time.

Key Features

User Customization: Users will be directed to a page where they can input their name and select a background color for the chat screen.
Chat Interface: The page will present the ongoing conversation and feature a text input field where you can type your message, along with a submit button to send it.
Multimedia Support: In the chat, users can share images and their location. The data is stored both online and offline for easy access.
Dependencies

React Native
Expo
Firebase (Firestore, Auth, Storage)
Gifted Chat
AsyncStorage
Installation

Clone the repository:

sh

Copy code

git clone https://github.com/haleytolar/Chat-App

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
