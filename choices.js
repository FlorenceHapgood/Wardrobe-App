var one = document.getElementById('one');
var two = document.getElementById('two');
var match = document.getElementById('match');
var message = document.getElementById('message');
var matches = [
  {"blue": ["red", "white", "gold","orange"]},
  {"black": ["white"]}
  ];

match.addEventListener('click', function() {
  for (var i = 0; i < matches.length; i++){
    if (matches[i].hasOwnProperty(one.value)) {
        if (matches[i][one.value].includes(two.value)) {
            message.innerHTML = 'Looks good!'
          } else {
            message.innerHTML = 'FASHION VICTIM!'
          }
        }
  }
});
