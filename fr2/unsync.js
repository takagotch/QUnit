test('unsync', function(){
  stop();
  expect(1);
  $.ajax({
    url: '/test',
    dataType: 'json',
    success: function(data){
      deepEqual(data, {
        topic: 'hello!',
	msg: 'hello!'      
      });
      ok(true, '');
      start();
    }
  });
});

