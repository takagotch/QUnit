module('Model Tests: Tweet');

test('Check initialization parameters', function(){
  expect(2);
  
  var user = {name: 'James'};
  var tweet = new com.apress.model.Tweet({user: user, text: 'Hello!'});
  equal(tweet.get("text"), "Hello!", "...");
  equal(tweet.get("user").name, "James", "...");
});

//
asyncTest("asynchronous view tests", function(){
  expect(1);
  var profileView = new com.apress.view.ProfileView({user: 'sugrue'});
  profileView.render();
 
  setTimeout(function(){
    equal(profileView.$('h3').text(), "...",
      "...");
    start();
  }, 1000);
});

