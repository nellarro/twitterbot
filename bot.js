var Twit = require('twit')
var config = require('./configuration.js')

var Twitter = new Twit(config)

var retweet = () => {
  var params = {
    q: '#JavaScript30 OR #ReactJS OR  OR #javascriptforbeginners OR #codenewbie OR #freecodecamp OR #juniorprogrammer OR #juniorwebdev OR #HTML OR #CSS OR #codepen' ,
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
setInterval(retweet, 12000000)

var favorite = () => {
  var fav_params = {
    q: '#ReactJS OR #first-timers-only OR #juniordev or #womenintech',
    result_type: 'recent',
    lang: 'en'
  }

  var ranDom = (arr) => {
    var index = Math.floor(Math.random()* arr.length)
    return arr[index]
}


  Twitter.get('search/tweets', fav_params, (err, data) => {

    var tweet = data.statuses
    var randomTweet = ranDom(tweet)

    if (typeof randomTweet != 'undefined') {
      Twitter.post('favorites/create', {id: randomTweet.id_str}, (err, response) =>{
        if (err) {
          console.log('No favorite. ❌')
        } else {
          console.log('Liked: ❤️')
        }
      })
    }
  })
}

favorite()
setInterval(favorite, 65000)
