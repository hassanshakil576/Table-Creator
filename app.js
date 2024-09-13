var table = document.querySelector("#table");
var div = document.querySelector(".div-1");


function createTable(){
   div.innerHTML = "";
    for(var i = 1; i<= 10; i++){
        console.log(`${table.value} x ${i} = ${table.value * i}`);
        div.innerHTML += `<br> ${table.value} x ${i} = ${table.value * i} <br>`;
    }
}