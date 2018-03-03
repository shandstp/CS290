//Travis Shands 933337017 CS290 Assignment 5
function tableCreate(){
  //Creates elements of the Header Row
  var mesa = document.createElement('table');
  var headerRow = document.createElement('tr');
  var mhead1 = document.createElement('th');
  var mhead2 = document.createElement('th');
  var mhead3 = document.createElement('th');
  var mhead4 = document.createElement('th');
  var mhtext1 = document.createTextNode('Header 1');
  var mhtext2 = document.createTextNode('Header 2');
  var mhtext3 = document.createTextNode('Header 3');
  var mhtext4 = document.createTextNode('Header 4');

  //Attaches all elements of the Header Row to the table
  mhead1.appendChild(mhtext1);
  mhead2.appendChild(mhtext2);
  mhead3.appendChild(mhtext3);
  mhead4.appendChild(mhtext4);
  headerRow.appendChild(mhead1);
  headerRow.appendChild(mhead2);
  headerRow.appendChild(mhead3);
  headerRow.appendChild(mhead4);
  mesa.appendChild(headerRow);

  //Creates elements of normal cells
  for(var i = 0; i < 3; i++){
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var text1 = document.createTextNode((i + 1) + ", 1");
    var text2 = document.createTextNode((i + 1) + ", 2");
    var text3 = document.createTextNode((i + 1) + ", 3");
    var text4 = document.createTextNode((i + 1) + ", 4");

  //Attaches elements of normal cells to the table
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    cell4.appendChild(text4);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    mesa.appendChild(row);
  }
  //Attaches table to HTML body
  document.body.appendChild(mesa);

  //Applies style characteristics to table and cells
  var headerCell = document.getElementsByTagName('th');
  var tableCell = document.getElementsByTagName('td');
  for(var i = 0; i < headerCell.length; i++){
    headerCell[i].style.border = '1px solid black';
    headerCell[i].style.padding = '3px 8px';
    headerCell[i].style.textAlign = 'left';
  }
  for(var i = 0; i < tableCell.length; i++){
    tableCell[i].style.border = '1px solid black';
    tableCell[i].style.padding = '3px 8px';
  }

  mesa.style.borderCollapse = 'collapse';

  return mesa;
}

var table = tableCreate();
var cells = document.getElementsByTagName('td');


var up = document.createElement('button');
var down = document.createElement('button');
var left = document.createElement('button');
var right = document.createElement('button');
var upLabel = document.createTextNode('up');
var downLabel = document.createTextNode('down');
var leftLabel = document.createTextNode('left');
var rightLabel = document.createTextNode('right');
up.appendChild(upLabel);
down.appendChild(downLabel);
left.appendChild(leftLabel);
right.appendChild(rightLabel);
document.body.appendChild(up);
document.body.appendChild(down);
document.body.appendChild(left);
document.body.appendChild(right);

up.id = 'up';
up.style.borderRadius = '12px';
down.id = 'down';
down.style.borderRadius = '12px';
left.id = 'left';
left.style.borderRadius = '12px';
right.id = 'right';
right.style.borderRadius = '12px';

var markCell = document.createElement('button');
var markLabel = document.createTextNode('Mark Cell');
markCell.appendChild(markLabel);
document.body.appendChild(markCell);
markCell.id = 'markCell';
markCell.style.borderRadius = '12px';

var cells = document.getElementsByTagName('td');
var selection = 0;
selectedCell = cells[selection];
selectedCell.style.border = 'thick solid black';

function clickMark(){
  selectedCell.style.background = 'yellow';
}
function clickUp(){
  if(selection > 3){
    selectedCell.style.border = '';
    selection -= 4;
    selectedCell = cells[selection];
    selectedCell.style.border = 'thick solid black';
  }
}
function clickDown(){
  if(selection < 8){
    selectedCell.style.border = '';
    selection += 4;
    selectedCell = cells[selection];
    selectedCell.style.border = 'thick solid black';
  }
}
function clickLeft(){
  if(selection != 0 && selection != 4 && selection != 8){
  selectedCell.style.border = '';
  selection -= 1;
  selectedCell = cells[selection];
  selectedCell.style.border = 'thick solid black';
  }
}
function clickRight(){
  if(selection != 3 && selection != 7 && selection != 11){
  selectedCell.style.border = '';
  selection += 1;
  selectedCell = cells[selection];
  selectedCell.style.border = 'thick solid black';
  }
}

document.getElementById('markCell').addEventListener('click', clickMark);
document.getElementById('up').addEventListener('click', clickUp);
document.getElementById('down').addEventListener('click', clickDown);
document.getElementById('left').addEventListener('click', clickLeft);
document.getElementById('right').addEventListener('click', clickRight);
