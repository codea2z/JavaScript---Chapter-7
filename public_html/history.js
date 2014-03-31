/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");

    panel.innerHTML += "<a href='history-1.html'>Page 1</a> | ";
    panel.innerHTML += "<a href='history-2.html'>Page 2</a> | ";
    panel.innerHTML += "<a href='history-3.html'>Page 3</a> | ";
    
    panel.innerHTML += "<br>History length: " + history.length + "<br>";
    panel.innerHTML += "Current location: " + location.pathname + "<br>";
    
    panel.innerHTML += 
            "<button onclick='history.back()'>Back</button>";
    panel.innerHTML += 
            "<button onclick='history.forward()'>Forward</button>";
    
}

document.addEventListener("DOMContentLoaded", init, false);

