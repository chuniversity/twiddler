$(document).ready(function () {
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements

  var $title = $('<h1>Twiddler</h1>');
  var $subtitle = $('<h2>Where Twiddlers be Twiddlin\'</h2>');
  var $updateBtn = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="#feed"></div>');

  // Create event handler functions

  var handleBtnClick = function (event) {
    $feed.html('');
    renderFeed()
  }

  var handleTitleClick = function (event) {
    var titleType = event.target.localName === 'h1' ? 'title' : 'subtitle';
    alert('The ' + titleType + ' of this page is: ' + event.target.innerText);
  }

  // Set event listeners

  $title.on('click', handleTitleClick);
  $subtitle.on('click', handleTitleClick);
  $updateBtn.on("click", handleBtnClick);

  // Append new HTML elements to the DOM

  $title.appendTo($app);
  $subtitle.appendTo($app);
  $updateBtn.appendTo($app);
  $feed.appendTo($app);


  // renderFeed

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