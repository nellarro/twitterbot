var Twit = require('twit')
var config = require('./config.js')
var twitter = new Twit(config)

var retweet = () => {
  var params = {
    q: '#node', '#NodeJS',
    result_type: 'recent',
    lang: 'en'
  }
}

Twitter.get('search/tweets', params, function(error, data)) {
  if (!error) {
    let retweetId = data
  }
}
