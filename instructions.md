### Session One:

1. Brainstorm and Plan the Project

   - Planning and designing the ERD diagram ✅
   - Planning and designing the database schema ✅
   - Auth mechanisms (bcrypt ✅)
   - Deployment strategy

2. Project Setup

   - Setup database migrations ✅

3. User Registration and Authentication
   - Implement user model
   - Implement user registration
   - Implement user login

### Session Two:

1. Setup Remaining Models

   - Create Tweet model
   - Create Reply model
   - Create Like model
   - Create Follow model

2. Implement Controllers and Routes

   - Implement user controllers
   - Implement tweet controllers
   - Implement reply controllers
   - Implement like controllers
   - Implement follow controllers

3. Test API Endpoints (USE INSOMNIA)
   - Test user endpoints
   - Test tweet endpoints
   - Test reply endpoints
   - Test like endpoints
   - Test follow endpoints

### Session Three:

1. Secure API Endpoints

   - Implement authentication middleware
   - Implement authorization middleware

2. Final Testing and Debugging

   - Test all API endpoints
   - Debug and fix any issues

3. Deploy API to Google Cloud Run
   - Write documentation in README.md
   - Deploy API to Google Cloud Run

Once you have completed the project, you should have a fully functional REST API that can be used to power the Twitter Clone frontend.




EXPLANATION 

const hashedPassword = hashPassword(req.body.password);

In the given code snippet, req.body.password refers to the password value extracted from the request body.

In web development, when a client sends an HTTP request to a server, the request typically contains a body that carries data sent by the client. The body can contain various types of data, such as form data or JSON payloads.

In this case, req.body represents the body of the request. It is an object that holds the data sent by the client. The password property is accessed using dot notation (req.body.password) to retrieve the specific value of the password entered by the client.

By assigning req.body.password to hashedPassword, it implies that the hashPassword function will be invoked with the password value from the request body as an argument. The hashPassword function is likely responsible for generating a hash value (a one-way encryption) of the password for security purposes, such as storing it securely in a database.