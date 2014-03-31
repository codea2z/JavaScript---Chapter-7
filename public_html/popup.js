/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML = "Regular information in the main window";
    
    var winObject = window.open("pop.html", "windowName", 
                    "top=200,left=100,width=450,height=100,status=yes");
    
}

document.addEventListener("DOMContentLoaded", init, false);

