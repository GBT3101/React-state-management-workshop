# GBT Twitter Follower List

## Description
Small project that demonstrates Infinite Scrolling, React Hooks, Twitter API and more.

## Prerequisite

You must have a [Twitter API Developer](https://developer.twitter.com/en/apply-for-access) License in order to make this project work!
Insert your `CONSUMER_API_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_SECRET` inside `twitter-keys.ts` file in the root of this project before you start.

Project developed with `node 9.8.0`, `npm 5.7.1`, and tested only on `Google Chrome`.


## Installation
```
git clone https://github.com/GBT3101/twitter-thing.git
cd twitter-thing
npm install
npm start
```

## Usage
Upon start, enter the User Screen Name and watch it's details and followers, followers load in batches of 30, every time you scroll down another 30 will load until all followers can be seen on screen.

After getting a user results, 2 new buttons will pop that allows you to sort followers by their name / screen name.
