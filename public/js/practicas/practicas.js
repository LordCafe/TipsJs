

ClueGame.Dump = document.getElementById('Dump')

document.querySelectorAll('.clue-practice').forEach(function(elem){
  elem.addEventListener( 'click', ClueGame.ClickButton );
  elem.click();
})

