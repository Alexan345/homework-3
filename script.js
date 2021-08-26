/*function xy ( x , y){
  if(x > y){
    return 1;
     
  }else
    if(x < y){
      return -1;
  }else
    if(x == y){
      return 0;
      
    }
  
}

xy (1,1);*/





/*let bgColor  = 'red';
let txtColor = 'white';
let txtString = 'Lorem ipsum sit amet';

function myParagraph(bgColor, txtColor, txtString) {
let parag = document.querySelector('#pr'); // взял со страницы, где у нас разметка html тег <p> с id=pr.
parag.style.backgroundColor = bgColor;//установил цвет фона
parag.style.color = txtColor;//установил цвет текста
parag.innerHTML = txtString; //вставил текст в параграф
}

myParagraph(bgColor, txtColor, txtString); //вызвал функцию на выполнение
*/


/*function area(x,y){
  let area = x*y;
  if(x && y){
    console.log(area);
  }else
  if(x == undefined || y == undefined) {
    console.log( x*x || y*y )
  }
}

area(4);*/

/*let a = "I've";
let b = "been";
let c = "learning";
let d = "JavaScript";
let e = "for";
let f = "a";
let g ="month!";

function showWords(a, b, c, d, e , f, g,){
  let phrase = `${a} ${b} ${c} ${d} ${e} ${f} ${g}`;
  let divphrase = document.querySelector('#pr');
  divphrase.innerHTML = phrase;
}
showWords(a, b, c, d, e , f, g,)*/



/*let wordLine = [];
let divData = document.querySelector('#data');

function showWord() {
  while (true) {
    let word = prompt("Enter one word!!!");

    if (!word) break;
    wordLine += word + " ";
    
  }
  
  divData.innerHTML = `<h2>${wordLine}</h2>`;
}

showWord();*/





/*let a = 6;
console.log(a.toString())*/

/*function complexDigit(a, b, c, d){
  let result = a.toString() + b.toString() + c.toString() + d.toString();
  console.log(result);
  return result;
}

complexDigit(2, 6, 4, 6)*/

