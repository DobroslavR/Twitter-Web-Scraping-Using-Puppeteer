const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {
  const USERNAME = 'dev_dobroslav';
  const PASSWORD = '29UeshnR7daFwpP';

  await twitter.initialize();

  await twitter.login(USERNAME, PASSWORD);

  //await twitter.postTweet('Hello World.This Is Just A Test Message For puppeteer For Web Scraping Using Nodejs');

  const details = await twitter.getUser('elonmusk');

  console.log(details);

  await twitter.getTweets('elonmusk', 10);

  await twitter.end();
})();
