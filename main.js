
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment');
  // you do the rest
  var result = parseInt(answerPTagWithValue.innerText);
  var numberToShow = result *= 2;
  if (numberToShow <= 268435456) {
    document.querySelector('#compoundInvestment').textContent = numberToShow;
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
  var circleValue = document.querySelector('#blow-up .answer-box .circle-red');
  var doubleHeigth = circleValue.offsetHeight *= 2;
  var doubleWidth = circleValue.offsetWidth *= 2;
  if (doubleHeigth <= 320 && doubleWidth <= 320) {
      document.querySelector('#blow-up .answer-box .circle-red').style.height = doubleHeigth + "px";
      document.querySelector('#blow-up .answer-box .circle-red').style.width = doubleWidth + "px";
      
  } else {
      doubleWidth = 40;
      doubleHeigth = 40;
      document.querySelector('#blow-up .answer-box .circle-red').style.height = doubleHeigth + "px";
      document.querySelector('#blow-up .answer-box .circle-red').style.width = doubleWidth + "px";
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
  var listItem = document.querySelector('ul');
  var inactiveItem = document.querySelectorAll('.inactive');
  console.log(inactiveItem);
  inactiveItem.forEach(function(li){
      listItem.removeChild(li);
  });

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
  var parent = document.getElementById('squares-box').setAttribute(
   "style", "display: flex; flex-direction: row-reverse");

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
  console.log("hola");
  var list = document.querySelectorAll('#tasks > li');
  console.log(list);
  list.forEach(function(li){
    li.innerText = li.innerText.split("").reverse().join("");
  });

})

var key = 1;
var max = 10;
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
   console.log(key);
   var image = "./images/city-photo-" + key + ".jpg";
   var imageList = document.getElementById("city-img").src = image;
   console.log(imageList);
   if(key === max){
       key = 1;
   }else{
       key++;
   }
})
