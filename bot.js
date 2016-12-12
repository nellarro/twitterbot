var Twit = require('twit')
var config = require('./config.js')

var Twitter = new Twit(config)

var retweet = function() {
  var params = {
    q: '#nodejs, #Nodejs',
    result_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, (error, data) => {
    if (error) {
      console.log('something went wrong while searching')
    } else {
      var retweetId = data.statuses[0].id_str

      Twitter.post('statuses/retweet/:id', {
        id: retweetId
      }, (error, response) => {
        if (response) {
          console.log('retweeted!')
        } else {
          console.log('something went wrong while retweeting')
        }
      })
    }
  })
  retweet()
  setInterval(retweet, 50000)
