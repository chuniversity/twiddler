$(document).ready(function () {
  var $app = $('#app');
  $app.html('');
  var $title = $('<h1>Twiddler</h1>');
  var $updateBtn = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="#feed"></div>');



  $title.appendTo($app);
  $updateBtn.appendTo($app);
  $feed.appendTo($app);


  $title.on("click", function (event) {
    console.log(event);
    alert('The title of this page is: ' + event.target.innerText);
  });


  $updateBtn.on("click", function (event) {
    $feed.html('');
    renderFeed()
  })


  var renderFeed = function () {
    var index = streams.home.length - 1;
    while (index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($feed);
      index -= 1;
    }
  };

  renderFeed()

});