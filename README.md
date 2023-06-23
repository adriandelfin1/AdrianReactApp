# Real-time Chat Web Application
This repository contains the source code for a real-time chat web application, built with the MERN stack (MongoDB, Express.js, React, Node.js). The application offers a dynamic, intuitive, and robust platform for real-time communication, mirroring popular messaging platforms in functionality and user experience.

## Key Features:
**Real-time communication:** Built with Socket.io, the application enables instant messaging across multiple users.  
**Multiple Chat Rooms:** Users can join and participate in various chat rooms for different topics.  
**Direct Messages:** Users can send direct, private messages to other users.  
**Multimedia and Screen Sharing:** The application supports sharing of multimedia content, including images, videos, and files.  
**Voice, Video, and Screen Sharing Chat:** Integrated with WebRTC to facilitate direct peer-to-peer communication for voice, video, and screen sharing chat.  
## Technologies Used:
**Front-end:** React for building user interface components.  
**Back-end:** Node.js and Express.js for server-side operations.  
**Database:** MongoDB for storing chat data and user information.  
**Real-time Communication:** Socket.io for real-time event-based communication.  
**Voice, Video, and Screen Sharing Chat:** WebRTC for peer-to-peer communication.  
This application serves as a demonstration of my proficiency in full-stack development, real-time web technologies, and database management.  

## Notes for those that want to run this on their own
You can see the packages that I am using for this project in the backend and frontend folders and their versions. To install these packages follow these steps  
1. Create a folder and five it anyname you like, for example you can name it webapp, and put both the back and and frontend folders in this repository.
2. Open your command portal and navigate to your desired folder
   * **example for backend:** cd downloads\webapp-source\webapp-backend-source
   * **example for frontend:** cd downloads\webapp-source\webapp-frontend-source
3. Once you are in your desired directory, install them by typing npm install in the terminal
4. Once you have both the backend folder and frontend folder installation complete, open 2 different terminals and navigate on to the frontend and the other to the backend
5. Then just type in npm start on the terminal, I suggest you do the backend first and then frontend
   * Your backend terminal should say something like "listening on port 5002", or which ever port number you set on your .env file.
   * Your frontend terminal should automatically open the app for you
   
You should also check out the [`.env`](webapp-source-backend/.env) file in the webapp-backend folder I have provided and make sure you put your own MONGO URI from your mongodb.

## Screen shots of the running webapp  
### Login and register functionality
![Login and register functionality](Web-SS1.png)
### Direct messaging with friends functionality
![Direct messaging with friends functionality](Web-SS2.png)  
### Voice and video calling with screensharing functionality
![Voice, video and screensharing functionality](Web-SS3.png)

### video link demonstration on the way
