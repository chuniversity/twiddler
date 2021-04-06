$(document).ready(function () {
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements

  var $title = $('<h1>Twiddler</h1>');
  var $header = $('<div id="header"></div>');
  var $subtitle = $('<h2>Where Twiddlers be Twiddlin\'</h2>');
  var $updateBtn = $('<button id="update-feed">Update Feed</button>');
  var $content = $('<div id="content"></div>');
  var $feed = $('<div id="feed"></div>');
  var $sideColumn = $('<div id="side-column"></div>');

  // Append new HTML elements to the DOM
  $header.appendTo($app);
  $title.appendTo($header);
  $subtitle.appendTo($header);
  $content.appendTo($app);
  $feed.appendTo($content);
  $sideColumn.appendTo($content);
  $updateBtn.appendTo($sideColumn);



  // renderFeed

  var renderFeed = function (user) {
    if (user === undefined) {
      index = streams.home.length - 1;
    } else {
      index = streams.users[user].length - 1;
    }
    while (index >= 0) {
      if (user === undefined) {
        var tweet = streams.home[index];
      } else {
        var tweet = streams.users[user][index];
      }
      var $tweet = $('<div class="tweet"></div>');
      var $tweetContainer = $('<div class="tweet-container"></div>');
      var $message = $('<p class="message"></p>');
      var $messageLeft = $('<div class="message-left"></p>');
      var $messageRight = $('<div class="message-right"></p>');
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

      $messageLeft.appendTo($tweetContainer)
      $messageRight.appendTo($tweetContainer)
      $username.appendTo($messageLeft);
      $profilePhoto.appendTo($messageLeft);
      $message.appendTo($messageRight)
      $timeStamp.appendTo($messageRight);
      $tweetContainer.appendTo($tweet);
      $iconContainer.appendTo($tweet);
      $iconComment.appendTo($iconContainer);
      $iconRetweet.appendTo($iconContainer);
      $iconLike.appendTo($iconContainer);
      $iconShare.appendTo($iconContainer);






      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($feed);
      index -= 1;
    }
  };

  renderFeed()


  // Create event handler functions

  var handleBtnClick = function (event) {
    $feed.html('');
    renderFeed()
    $updateBtn.text('Update Feed');
  }

  var handleTitleClick = function (event) {
    var titleType = event.target.localName === 'h1' ? 'title' : 'subtitle';
    alert('The ' + titleType + ' of this page is: ' + event.target.innerText);
  }

  var handleUsernameClick = function (event) {
    var user = $(this).text().slice(1);
    $updateBtn.text('Back');
    $feed.html('');
    renderFeed(user);
  }

  // Set event listeners

  $title.on('click', handleTitleClick);
  $subtitle.on('click', handleTitleClick);
  $updateBtn.on("click", handleBtnClick);
  $feed.on('click', ".tweet .username", handleUsernameClick);
  $('.icon').hover(
    function () { $(this).addClass('fas') },
    function () { $(this).removeClass('fas') }
  )
});