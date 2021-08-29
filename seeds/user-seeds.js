const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
