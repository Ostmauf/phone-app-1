const chat = document.getElementById("chat-window");
const chatButton = document.getElementById("chat-button");
const chatInput = document.getElementById("chat-input");
const username = "Sebastian"

chatButton.addEventListener("click", onChatButtonClicked);

function onChatButtonClicked() {
   if (chatInput.value == "" || chatInput.value == " ") {
    //Do nothing.
   } else {
      const div1 = document.createElement("div");

      const fromMessage = document.createElement("span");
      const userMessage = document.createElement("span");

      div1.setAttribute("id", "user-message-and-were-it-is-from");
      const div1New = document.getElementById("user-message-and-were-it-is-from");
      

      chat.append(div1New);
      div1.append(fromMessage, userMessage)
      fromMessage.append(`From ${username}: `);
      userMessage.append(chatInput.value);
      
      // Styling div
      div1New.style.minWidth = "35%";
      div1New.style.width = "fit-content";
      div1New.style.minHeight = "1rem";
      div1New.style.backgroundColor = "yellow";
      div1New.style.border = "solid darkyellow 1px";
      div1New.style.borderRadius = "0.5rem";
      div1New.style.padding = "0.5rem 0.5rem 0.5rem 0";
      div1New.style.display = "flex";
      div1New.style.alignItems = "center";
      
      // Styling fromMessage
      fromMessage.style.fontFamily = "'Merriweather', serif"
      fromMessage.style.fontWeight = "900";
      fromMessage.style.fontStyle = "italic";

      // Styling userMessage
      userMessage.style.fontFamily = "'Merriweather', serif";
      userMessage.style.fontSize = "smaller";
      
      
      


      chat.innerHTML += "<br>";
      chatInput.value = "";
   }

    
}