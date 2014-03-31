/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

counter = 0;

function init()
{
    var panel = document.getElementById("panel");
    
    panel.innerHTML += "Browser: " + navigator.appName;
    panel.innerHTML += "<br>Code Name: " + navigator.appCodeName;
    panel.innerHTML += "<br>Version: " + navigator.appVersion;
    panel.innerHTML += "<br>Platform: " + navigator.platform;
    
    if (document.addEventListener)
    {
        panel.innerHTML += "<br>This is a modern DOM Browser";
    }
            
}

document.addEventListener("DOMContentLoaded", init, false);

