var Twit = require('twit')
var config = require('./configuration.js')

var Twitter = new Twit(config)

var retweet = () => {
  var params = {
    q: '#JavaScript30', '#NodeJS',
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
          console.log('💛')
        } else {
          console.log('Something wicked this way comes! 💀🐍! Or maybe just duplication.')
        }
      })
    }
  })
}
retweet()
setInterval(retweet, 50000)

