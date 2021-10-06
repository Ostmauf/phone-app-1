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
      // styling div
      div1.style.marginBottom = "1rem"
      div1.style.backgroundColor = "yellow"
      div1.style.border = "solid darkyellow 1px"
      div1.style.borderRadius = "0.5rem"
      div1.style.padding = "0.5rem"


      chat.append(div1);
      div1.append(`From ${username}: ${chatInput.value}`);
      chat.innerHTML += "<br>";
      chatInput.value = "";
   }

    
}