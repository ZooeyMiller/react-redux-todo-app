# React todo app

## What?
A basic todo app built with react, with an aim to have high test coverage.

## Why?
I've built two react projects following tutorials, and one as part of a 4 person team, but I want to try building something from scratch (well, still bootstrapped with create-react-app), without a tutorial, on my own.
Also a nice way to practice my CSS.

## How?
_Exactly_ like this.

React, <del>vanilla node</del> hapi server, postgreSQL database

## How do I run it locally
1. run ```psql``` and make a database called whatever you want (I chose todo_app)
2. make a file in the root of the project called .config.env
  * add 'DB_URL=```your psql pword```:```your psql username```@127.0.0.1/```whatever you called the db```'
3. run ```node database/db_build.js``` in another terminal window
4. ```npm run runServer```
5. ```npm start```
6. You should now have 3 active terminal windows/tabs.
  * 1 running psql
  * 1 running the react app
  * 1 running the node server
