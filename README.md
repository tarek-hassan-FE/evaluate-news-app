# Evaluate a news article with Natural Language Processing

## Introduction
This is the code for the final assessment project for Udacity's Build tools course.

## To start this code you need to:

  - Install [Node.js](https://nodejs.org/en/).
  - Open the terminal/cmd in the project's directory and run npm install to install the required dependencies.
  - Run npm start to start previewing the web app on the local host


## Tasks

### Architecture 
- [x] Project should have a structure like the one in the lessons. All files shown must be present and the app must successfully render a home page when started via an npm command like `npm run start`

### Config
- [x] Both webpack config files must be present and should be set up similar to the course for development and production.
- [x] A build script must run successfully with no errors and generate a dist folder. Bonus if they customized their npm build scripts.
- [x] Students should also have a working dev mode, check that webpack dev server is set up and that they have an npm script that starts the server

### Content
- [x] Only one html file is required, but it must be at src/views/ or src/html. Must contain valid semantic html
- [x] There will be a minimum of 2 javascript files in the src/js folder. All files in the js folder must be found by webpack. 

- [x] There must be a styles or scss folder. The project provides a base file, but the header, footer, form, and main files should be added to by the student, similar to the course.


### API
- [x] The app should make a successful call to the api on form submission. If this is successful, the api keys and response handling were done correctly. You can check that the api keys are found in server.js or a similar node file. It is not acceptable for an api key to be set in a client facing file (like index.js)

- [x] Information from the api response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc..

### Offline Functionality
- [x] The project must have set up service workers in webpack. 

### Testing 
- [x] Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/js file should have at least one test. 

### Interactions
- [x] The page built can be very simple, but should include:

- [x] A single field form that uses the correct html tags and structure. There should be some attempt to validate the form input. Bonus points if you use regex to correctly check for a URL and give back helpful error messages. 