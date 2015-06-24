var userInput = function (reddit) {
  var userName = document.getElementsByName('username')[0];
  var reddit_name = userName.value;
  reddit(reddit_name);
};

var redditInput = function (reddit_name) {
  // console.log(reddit_name);
  var reddit_xhr = new XMLHttpRequest;
  reddit_xhr.open('get', 'http://www.reddit.com/user/' + reddit_name + '/comments/.json');
  reddit_xhr.addEventListener('load', function() {
    // console.log('reddit loaded');
    var reddit_comments = '';
    var response = reddit_xhr.response;
    var response_data = JSON.parse(response);
    // console.log(response_data);
    for (i = 0; i < response_data.data.children.length; i ++) {
      reddit_comments += " " + response_data.data.children[i].data.body;
    }
    console.log(reddit_comments);
    watsonOutput(personParse, reddit_comments);
  });
  reddit_xhr.send(null);
};

var watsonOutput = function (personParse, reddit_comments) {
  var xhr = new XMLHttpRequest;
  xhr.open('post', 'http://jbrenneman-watson-demo.mybluemix.net/index');

  xhr.addEventListener('load', function() {
    var watson_xhr = xhr.response;
    var personalityAssesment = JSON.parse(watson_xhr);
    var data = (personParse(personalityAssesment));
    
  });
  xhr.send(reddit_comments);
};

// querystring parsing function
// if params.username
// then do the reddit request
// google analytics
var button = document.querySelector('button');
button.addEventListener('click', function (e) {
  userInput(redditInput);
  e.preventDefault();
});
