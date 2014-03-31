/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var property;
    
    for (property in window)
    {
        if (property) 
        {
            panel.innerHTML += property + "<br>";
        }
    }
}

document.addEventListener("DOMContentLoaded", init, false);

