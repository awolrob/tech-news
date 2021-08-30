# tech-news
## Install
```
* npm init -y
* npm install express
* npm install mysql2
* npm install sequelize 
* npm install dotenv
* npm install express-handlebars
* npm i express-session connect-session-sequelize
* npm i bcrypt

* in get bash cli
* heroku create (result - https://lit-anchorage-72856.herokuapp.com/ & https://git.heroku.com/lit-anchorage-72856.git)

* Use JawsDB in heroku
*   In the heroku project, click on the Resources tab,Underneath Add-ons, search for "JawsDB MySQL"

* git push heroku main
* package.json scripts:    "heroku-postbuild": "node seeds/index.js"


* in server.js change sequelize.sync({ force: true }) to false
* git add -A
* git push heroku main
* heroku run bash
* node seeds/index.js
* exit

