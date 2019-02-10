## Bunchride
A side project which aims to gather all Lithuanian cyclists and provide a platform to create events.
Whole application consists of backend (`nodejs + express`) using MVC architectural style
and frontend (`react`). `Backend` provides an API, where simple `CRUD` operations are taking place. 
Database used- `mongodb`, model layer uses `mongoose`. Client (`react`) side makes requests
to an API and provides a frontend.

## Instalation
run `npm install` to install necessary modules. run `npm start` to run application on `localhost`, `port 3000`. 
Backend part is ran on `3001` port, which is proxy'ed by client side.

## Libraries used
`nodejs`
 - body-parser
 - ejs
 - express
 - js-datepicker
 - mongodb
 - mongoose
 - mongoose-error-helper
 - timepicker

 `react`
 - node-sass
 - npm-watch
 - react-facebook-login
 - react-dom
