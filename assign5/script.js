var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function tableCreate(array) {

var mesa = document.createElement("table");

var headRow = document.createElement("tr");

var mh1 = document.createElement("th");
// mh1.style.border = "thick solid black";
// mh1.style.padding = "3px 8px";
// mh1.style.textAlign = "left";
var mh2 = document.createElement("th");
// mh2.style.border = "thick solid black";
// mh2.style.padding = "3px 8px";
// mh2.style.textAlign = "left";
var mh3 = document.createElement("th");
// mh3.style.border = "thick solid black";
// mh3.style.padding = "3px 8px";
// mh3.style.textAlign = "left";

var htext1 = document.createTextNode("Name");
var htext2 = document.createTextNode("Height");
var htext3 = document.createTextNode("Country");

mh1.appendChild(htext1);
mh2.appendChild(htext2);
mh3.appendChild(htext3);
headRow.appendChild(mh1);
headRow.appendChild(mh2);
headRow.appendChild(mh3);
mesa.appendChild(headRow);

for (var i = 0; i < array.length; i++){
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
    // cell1.style.border = "thick solid black";
    // cell1.style.padding = "3px 8px";
    var cell2 = document.createElement("td");
    // cell2.style.border = "thick solid black";
    // cell2.style.padding = "3px 8px";
    var cell3 = document.createElement("td");
    // cell3.style.border = "thick solid black";
    // cell3.style.padding = "3px 8px";

    var text1 = document.createTextNode(MOUNTAINS[i]["name"]);
    var text2 = document.createTextNode(MOUNTAINS[i]["height"]);
    var text3 = document.createTextNode(MOUNTAINS[i]["country"]);

    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    mesa.appendChild(row);

    // var cells = document.getElementsByTagName("td");
    // cells.style.borderStyle = "solid";
}
//document.getElementsByTagName("td").style.textAlign = "right";
var div1 = document.getElementById("mountains");
div1.appendChild(mesa);
// mesa.style.borderCollapse = "collapse";
}

tableCreate(MOUNTAINS);
