var Twit = require('twit')
var config = require('./configuration.js')
var twitter = new Twit(config)

var retweet = () => {
  var params = {
    q: '#JavaScript30', '#NodeJS',
    result_type: 'recent',
    lang: 'en'
  }
}

Twitter.get('search/tweets', params, function(err, data)) {
  if (!err) {
    let retweetId = data.status[0].id_str; // tells TWITTER to retweet
    Twitter.post('statuses/retweet/:id', {
      id:retweetID
    }, function(err, response) {
      if (response) {
        console.log('💛')
      }
      if (err) {
        console.log('Something wicked this way comes! 💀🐍! Or maybe just duplication.')
      }
    })
  } else {
    console.log('Something went wrong while SEARCHING...')
  }
}
