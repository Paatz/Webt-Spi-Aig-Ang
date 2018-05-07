window.onload = function() {
  var sendButton = document.getElementById("sendButton");
  sendButton.onclick = function(){
    var message = document.getElementById("messInput");
    drawMessage(message.value);
  }
  drawMessage("Schluss");
  drawMessage("Unc nochmal");
  drawMessage("Juhu");
}

function drawMessage(message)
{
     var choosenDiv = document.getElementById("pcontainer");
     var sender = document.createElement("dt");
     var senderText = document.createTextNode("You");
     sender.appendChild(senderText);

     var text = document.createElement("dd");
     text.appendChild(document.createTextNode(message));
     choosenDiv.appendChild(sender);
     choosenDiv.appendChild(text);
   }
