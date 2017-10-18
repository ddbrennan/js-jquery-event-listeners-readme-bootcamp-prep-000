//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img')[0].className = "tasty"
  })
}

function submitIt() {
  $('form').on('keydown', function(key) {
    if(key.which === 71) {
      alert('g was pressed')
    }
  })
}

function pressIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
