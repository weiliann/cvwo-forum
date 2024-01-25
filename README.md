# README

### Author
* Tan Wei Lian

### System Requirements
1. Ruby (3.2.2)
2. Ruby on Rails (7.1.2)
3. SQLite3

The web forum is built with React on the frontend, and uses Ruby on Rails on the backend which serves the API endpoint

### Getting Started
1. After cloning the repo execute this command to setup the rails server
  ```
  cd cvwo-forum && rails db:migrate && rails db:seed && rails s
  ```

2. With another terminal, cd to project folder (cvwo-forum) and the web page can be run with the command:
  ```
  cd frontend && npm install && npm run dev
  ```

3. The webpage is visible at "http://localhost:5173/"


