var Twit = require('twit')
var config = require('./config.js')

<<<<<<< HEAD
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
=======
var twitter = new Twit(config)
>>>>>>> dd24b629800e629f2d7a344ead86bfac88967f7b
