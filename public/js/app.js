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
<<<<<<< HEAD
    
=======
    console.log(data);
    //NVD3 and d3 chart code
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
          .x(function(d) { return d.label })
          .y(function(d) { return Math.round(d.value * 100) })
          .showLabels(false)
          .showLegend(false)
          .color(['#B5B5B5', '#92DCE0', '#0092D7', '#3EC303', '#EE8D09', '#EDE527']);


        d3.select("#chart-svg svg")
            .datum(data)
            .call(chart);

        document.body.removeChild(load.canvas);
        // d3.select('load.canvas')

      return chart;

    });

>>>>>>> 6f1d3bc3bf5a4b222ec946b31962f33741ab66b0
  });
  xhr.send(reddit_comments);
};

// querystring parsing function
// if params.username
// then do the reddit request
// google analytics
var button = document.querySelector('button');
var grif = document.querySelector('.grid');
button.addEventListener('click', function (e) {
  load.play();
  document.body.appendChild(load.canvas);
  userInput(redditInput);
  e.preventDefault();
});
