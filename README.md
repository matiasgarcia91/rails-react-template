# README

Template for a React app with a Rails API-only backend. ActiveAdmin and ActiveStorage come preconfigured for easy backend manipulation.
React-Router is also set up.

Heroku also comes configured to run both locally or remotely as well as to push builds.


### To run:

First, install the necessary packages.
```
bundle install
cd client/
yarn install
```

Create an env.yml with the following keys using your postgre credentials:
```
SECRET_KEY_BASE
DB_USERNAME
DB_PASSWORD
```


Make sure you have postgre up and running and run db creation from root
```
bin/rake db:create
bin/rake db:migrate
bin/rake db:seed
```

To start both apps run:
`bin/rake start`

To run only the server:
`bin/rails s -p 3001`

Only react app:
```
cd client/
yarn start
```
