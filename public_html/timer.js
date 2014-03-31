/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

counter = 0;

function init()
{
    var timerId, panel = document.getElementById("panel");
    
    counter++;
    
    panel.innerHTML += 
            "<span style='background:black; color:white; margin:2px;'>"
            + counter + "</span>";
    
    if (counter > 19)
    {
        window.clearTimeout(timerId);
    }
    else
    {
        timerId = window.setTimeout(init, 1000);
    }
    
}

document.addEventListener("DOMContentLoaded", init, false);

