var myString = 'Hello!';

test('' , function(){
  ok(true, '');
  ok(false, '');

  equal(myString, 'Hello!', '');
});

