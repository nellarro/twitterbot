var Twit = require('twit')
var config = require('./configuration.js')

var Twitter = new Twit(config)

var retweet = () => {
  var params = {
    q: '#JavaScript30, #ReactJS',
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

var favorite = () => {
  var fav_params = {
    q: '#ReactJS OR #JavaScript',
    result_type: 'recent',
    lang: 'en'
  }

  var ranDom = (min, max) => {
    return Math.random() * (max - min) + min
  }

  Twitter.get('search/tweets', fav_params, (err, data) => {

    var tweet = data.statuses
    var randomTweet = ranDom(tweet)

    if (typeof randomTweet != 'undefined') {
      Twitter.post('favorites/create', {id: randomTweet.id_str}, (err, response) =>{
        if (err) {
          console.log('No favorite due to error. ❌')
        } else {
          console.log('❤️')
        }
      })
    }
  })
}

favorite()
setInterval(favorite, 210000)
