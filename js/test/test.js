test("Simple Equaity Tests", function(){
  ok(1  == "1", 'Passed simple equals check');
  ok(1 === "1", 'Passed really equals check');
});

//module('Equality Tests');
module('Equality Tests', {
  setup: function(){
    console.log('setting things up');
  },
  teardown: function(){
    console.log('clearing things down');
  }
});


test("Simple Equality Tests", function(){
  ok(1  == '1', 'Passed simple equals check');
  ok(1 !== '1', 'Passed really equals check');
  notEqual(1, '2', 'Not Equal');
});

test('More simple tests', function(){
  expect(2);
  equal(true, 'Simple true == true test');
  strictEqual(true, true, 'Simple true == true test');
});

module('Name tests', function(){
  var name = 'James';
  equal(name, 'James', 'Name check test complete');
});

module('Asynchrnous Tests');
asyncTest('asyncTest', function(){
  expect(1);
  var actual = true;
  setTimeout(function(){
    ok(actual, 'Simple test to prove async');
    start();
  }, 1000);
});



var fixtureE1 = null;
QUnit.begin = function(){
  fixtureE1 = $('#qunit-fixture');
  fixtureE1.append('<p id=\'myparagraph\'>New Paragraph</p>');
};

