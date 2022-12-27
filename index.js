let count = 0;
let batch = 0;
let batchNo = 0;


function increment(){
    count += 1;
    document.getElementById("count-batch").innerHTML = count;
}

function save() {
    batch += count;
    document.getElementById("count-total").innerHTML = batch;
    batchNo += 1;
    myFunction();
    console.log({
        "Batch No":batchNo,
        "No of People":count,
        "Date": Date()
    });
    count = 0;
    document.getElementById("count-batch").innerHTML = count;
}
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var ceil3 = row.insertCell(2);
    var ceil4 = row.insertCell(3);
    cell1.innerHTML = batchNo;
    cell2.innerHTML = count;
    ceil3.innerHTML = Date().slice(4,15);
    ceil4.innerHTML = Date().slice(16,24);
  }