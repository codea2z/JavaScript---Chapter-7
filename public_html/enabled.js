/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");

    if (navigator.javaEnabled())
    {
        panel.innerHTML = "Java support is enabled";
    }
    
    if (navigator.plugins.length !== 0)
    {
        panel.innerHTML += "<hr>Total plugins: " + navigator.plugins.length;
        panel.innerHTML += "<br>Example: " + navigator.plugins[1].name;
        panel.innerHTML += " - " + navigator.plugins[1].description;
    }
    
    if (navigator.mimeTypes.length !== 0)
    {
        panel.innerHTML += 
                "<hr>Total MIME types: " + navigator.mimeTypes.length;
        panel.innerHTML += 
                "<br>Example: " + navigator.mimeTypes[0].type;
        panel.innerHTML += 
                " - " + navigator.mimeTypes[0].description;
    }
          
}

document.addEventListener("DOMContentLoaded", init, false);

