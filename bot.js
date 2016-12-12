var twit = require('twit')
var config = require('./config.js')

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
