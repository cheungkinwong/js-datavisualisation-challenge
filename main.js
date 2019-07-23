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
          backgroundColor: "rgb(255,255,255,0)",
          borderColor: randomRGB,
          data: data
     };
     for (let j = 2; j < tableRow.cells.length; j++) {
          data.push(parseInt(tableRow.cells[j].innerHTML));
     }
     dataSet1.push(rowJson);
}
console.log(dataSet1);

const canvas1 = document.createElement("canvas");
canvas1.id = "myChart1";
table1.parentNode.insertBefore(canvas1, table1);
const ctx = document.getElementById("myChart1").getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var chart = new Chart(ctx, {
     type: "line",
     data: {
          labels: years1,
          datasets: dataSet1
     },
     options: {}
});

// graph2

// let years2 = [];
// for (let i = 2; i < table2.rows[0].cells.length; i++) {
//      years2[i - 2] = table2.rows[0].cells[i].innerHTML;
// }

// let dataSet2 = [];
// for (let i = 2; i < table2.rows.length; i++) {
//      let randomRGB = getRandomRgb();
//      let tableRow = table2.rows[i];
//      let country = tableRow.cells[1].innerHTML;
//      let data = [];
//      let rowJson = {
//           label: country,
//           backgroundColor: randomRGB,
//           data: data
//      };
//      for (let j = 2; j < tableRow.cells.length; j++) {
//           data.push(parseInt(tableRow.cells[j].innerHTML));
//      }
//      console.log(rowJson);
//      dataSet2.push(rowJson);
// }
// console.log(dataSet2);

// const canvas2 = document.createElement("canvas");
// canvas2.id = "myChart2";
// table2.parentNode.insertBefore(canvas2, table2);
// const ctx2 = document.getElementById("myChart2").getContext("2d");
// ctx2.canvas.width = window.innerWidth;
// ctx2.canvas.height = window.innerHeight;

// var chart = new Chart(ctx2, {
//      type: "bar",
//      data: {
//           labels: years2,
//           datasets: dataSet2
//      },
//      options: {}
// });

// graph2 v2

let dataSet2 = [];
let country2 = [];
for (let i = 1; i < table2.rows.length; i++) {
     let tableRow = table2.rows[i];
     let country = tableRow.cells[1].innerHTML;
     country2.push(country);
}

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
ctx2.canvas.width = window.innerWidth;
ctx2.canvas.height = window.innerHeight;

var chart = new Chart(ctx2, {
     type: "bar",
     data: {
          labels: country2,
          datasets: dataSet2
     },
     options: {}
});
console.log(country2);
console.log(dataSet2);
