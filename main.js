// graph1

function getRandomRgb() {
     var num = Math.round(0xffffff * Math.random());
     var r = num >> 16;
     var g = (num >> 8) & 255;
     var b = num & 255;
     return "rgb(" + r + ", " + g + ", " + b + ")";
}

let years1 = [];
for (let i = 2; i < table1.rows[1].cells.length; i++) {
     years1[i - 2] = table1.rows[1].cells[i].innerHTML;
}

let dataSet1 = [];
for (let i = 2; i < table1.rows.length; i++) {
     let randomRGB = getRandomRgb();
     let tableRow = table1.rows[i];
     let country = tableRow.cells[1].innerHTML;
     let data = [];
     let rowJson = {
          label: country,
          fill: false,
          borderColor: randomRGB,
          data: data
          // hidden: true
     };
     for (let j = 2; j < tableRow.cells.length; j++) {
          data.push(parseInt(tableRow.cells[j].innerHTML));
     }
     dataSet1.push(rowJson);
}

const canvas1 = document.createElement("canvas");
canvas1.id = "myChart1";
table1.parentNode.insertBefore(canvas1, table1);
const ctx = document.getElementById("myChart1").getContext("2d");

var chart1 = new Chart(ctx, {
     type: "line",
     data: {
          labels: years1,
          datasets: dataSet1
     },
     options: {}
});

// graph2

let dataSet2 = [];
let country2 = [];
for (let i = 1; i < table2.rows.length; i++) {
     let tableRow = table2.rows[i];
     let country = tableRow.cells[1].innerHTML;
     country2.push(country);
}
country2[7] = "Angleterreet paysdeGalles(UK)";

for (let i = 2; i < table2.rows[0].cells.length; i++) {
     let data2 = [];
     let yearData1 = [];
     let yearData2 = [];
     data2.push(yearData1, yearData2);
     for (let i = 1; i < table2.rows.length; i++) {
          let tableRow = table2.rows[i];
          yearData1.push(parseInt(tableRow.cells[2].innerHTML));
          yearData2.push(parseInt(tableRow.cells[3].innerHTML));
     }
     let data = data2[i - 2];
     let randomRGB = getRandomRgb();
     let years2 = table2.rows[0].cells[i].innerHTML;
     let rowJson = {
          label: years2,
          backgroundColor: randomRGB,
          data: data
     };
     dataSet2.push(rowJson);
}

const canvas2 = document.createElement("canvas");
canvas2.id = "myChart2";
table2.parentNode.insertBefore(canvas2, table2);
const ctx2 = document.getElementById("myChart2").getContext("2d");

var chart2 = new Chart(ctx2, {
     type: "bar",
     data: {
          labels: country2,
          datasets: dataSet2
     },
     options: {}
});

// graph3

// setInterval(getData, 5000);

const header = document.getElementById("firstHeading");
const input3 = document.createElement("input");
input3.id = "input3";
input3.placeholder = "set amount of lines";
header.appendChild(input3);

const canvas3 = document.createElement("canvas");
canvas3.id = "myChart3";
header.appendChild(canvas3);
input3.addEventListener("keyup", key => {
     let lines = input3.value;
     if (key.keyCode == 13) {
          getData(lines);
     }
});

// getData();
async function getData(lines) {
     const request = `https://becoderandomdata.000webhostapp.com/randomdata.php/?amount_of_lines=${lines}`;
     let response = await fetch(request);
     graphData = await response.json();
     let randomRGB = getRandomRgb();
     let xAxis = [];
     let data3 = [];
     let graphJson = [
          {
               label: "teletubbies",
               backgroundColor: randomRGB,
               data: data3
          }
     ];

     for (let i = 0; i < graphData.length; i++) {
          let xdata;
          let ydata;
          let array = graphData[i];
          xdata = array[0];
          ydata = array[1];
          xAxis.push(xdata.toString());
          data3.push(ydata);
     }

     const ctx3 = document.getElementById("myChart3").getContext("2d");
     var chart3 = new Chart(ctx3, {
          type: "line",
          data: {
               labels: xAxis,
               datasets: graphJson
          },
          options: {}
     });
}
