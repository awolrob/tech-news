# 14 Model View Controller (MVC): Tech Blog

## Author: Rob Ellingson
- Source: [Github](https://github.com/awolrob/tech-news)

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Install
```
* npm init -y
* npm install express
* npm install mysql2
* npm install sequelize 
* npm install dotenv
* npm install express-handlebars
* npm install express-session connect-session-sequelize
* npm install bcrypt

* in get bash cli
* heroku create (result - https://warm-reaches-65493.herokuapp.com/ )

* Use JawsDB in heroku
*   In the heroku project, click on the Resources tab,Underneath Add-ons, search for "JawsDB MySQL"

* package.json scripts:    "heroku-postbuild": "node seeds/index.js"
* git push heroku main

* git add -A
* git push heroku main
To can seed the database manually:
* heroku run bash
* node seeds/index.js
* exit
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./assets/14-mvc-homework-demo-01.gif)

## Run
* Open ( https://warm-reaches-65493.herokuapp.com/ ) in your browser.

## Final Pages
The following images were generated using the application:

* Ladding page
![](./assets/landing-page.jpeg)


* Logon page
![](./assets/logon.jpg)

* Logging on page
![](./assets/logon2.jpg)

* Signup page
![](./assets/signup.jpg)

* Logged On Dashboard page
![](./assets/dashboard1.jpg)

* Creating my first post page
![](./assets/my-first-post.jpg)

* Post on dashboard page
![](./assets/dashboard-post1.jpg)

* Edit post page
![](./assets/postedit.jpg)

* Update Post page
![](./assets/updatedpost.JPG)

* Updated post listed on landing page
![](./assets/myfirst-post-added.jpeg)


- - -
` https://github.com/awolrob | 2021-08-06 ` 