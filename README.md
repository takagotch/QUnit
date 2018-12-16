### QUnit
---

https://github.com/qunitjs/qunit

https://qunitjs.com/


```
npm install -g qunit
qunit
qunit 'tests/*~test.js'
qunit --help
```

```js
QUnit.test("hello test", function( assert ){
  assert.ok( 1 == "1", "Passed!" );
});
```

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-2.8.0.css">
</head>
<body>
  <div id="qunit"</div>
  <div id="qunit-fixture"></div>
  <script src="http://code.jquery.com/qunit/qunit-2.8.0.js"></script>
  <script src="tests.js"></script>
</body>
</html>
```

