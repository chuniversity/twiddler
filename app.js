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
      var $tweetContainer = $('<div class="tweet-container"></div>');
      var $message = $('<p class="message"></p>');
      var $username = $('<span class="username"></span>');
      var $profilePhoto = $('<img class="profile-photo">');
      var $timeStamp = $('<span class="timestamp"></span>');
      var $iconContainer = $('<div class="icons"></div>');
      var $iconComment = $('<i class="icon comment far fa-comment">');
      var $iconRetweet = $('<i class="icon retweet far fa-share-square"></i>');
      var $iconLike = $('<i class="icon like far fa-thumbs-up">');
      var $iconShare = $('<i class="icon share far fa-heart">');
      $profilePhoto.attr("src", tweet.profilePhotoURL);
      $message.text(tweet.message);
      $username.text('@' + tweet.user);
      $timeStamp.text(jQuery.timeago(tweet.created_at));



      $message.appendTo($tweetContainer)
      $username.appendTo($tweetContainer);
      $profilePhoto.appendTo($tweetContainer);
      $timeStamp.appendTo($tweetContainer);

      $iconContainer.appendTo($tweetContainer);
      $iconComment.appendTo($iconContainer);
      $iconRetweet.appendTo($iconContainer);
      $iconLike.appendTo($iconContainer);
      $iconShare.appendTo($iconContainer);

      $tweetContainer.appendTo($tweet);




      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($feed);
      index -= 1;
    }
  };

  renderFeed()


  //feed events

  $('.icon').hover(
    function () { $(this).addClass('fas') },
    function () { $(this).removeClass('fas') }
  )

});