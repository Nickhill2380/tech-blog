
  
# tech-blog  

                
                
## Description

This application will set up a website where users can view posts and comment. Also, once they create their own account they can create their own posts and comments. Logging in gives the user access to a dashboard where they can edit their existing post and add a comment to them. 
    
## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Questions](#questions)
[License](#license)

## Installation

The website on heroku will require no installation. Setting up on your localhost will require logging into mysql and running source db/schema.sql Once that's done you can run npm run seeds to install dummy data to test things out. You will also need to install  sequelize, mysql2, bcrypt, express-session, and handlebars

## Usage

Please see attached screenhot and link to the heroku site, https://tech-blog2380.herokuapp.com/ 

![image](https://user-images.githubusercontent.com/71850826/107155338-d3ae2f80-6945-11eb-8511-e07c96ef086c.png)

I adapted the inactivity function from https://gist.github.com/gerard-kanters/2ce9daa5c23d8abe36c2

## Questions

Nick Hill  
GitHub: NickHill2380 [https://github.com/NickHill2380]
Please feel free to email me if you have additional questions about this project.
Email: <NickHill2380@gmail.com>

## Tests
You can use jest to test the handlebar helper functions.


