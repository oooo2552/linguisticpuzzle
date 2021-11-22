var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})


function change(){
  var msg = document.getElementById('msg');
  msg.style.color = 'white';
  msg.style.backgroundColor = 'red';
}

function restore(){
  var msg = document.getElementById('msg');
  msg.style.color = '';
  msg.style.backgroundColor='';
}


//var word = document.getElementById('word');

//word.addEventListener('click', backgroundChanger);

//var count  = 1;

function backgroundChanger(){
  var myword = document.getElementById('word')
  var color = 'red';
  myword.style.backgroundColor = color;
 console.log(color);


}

var colors = {blue: 'blue', yellow: 'yellow', red:'red'};

var colors2 = ['blue','yellow']



function multipleChanger(){
var myword2 = document.getElementById('banana')
  for (let color of colors2) {
    console.log(color);
    //myword2.style.backgroundColor = color;
    newColor = color;
    myword2.style.backgroundColor = newColor;
  }

}
