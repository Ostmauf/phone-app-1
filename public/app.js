const chat = document.getElementById("chat-window");
const chatButton = document.getElementById("chat-button");
const chatInput = document.getElementById("chat-input");

const username = "User";

chatButton.addEventListener("click", onChatButtonClicked);

function onChatButtonClicked() {
   if (chatInput.value == "" || chatInput.value == " ") {
    // Do nothing.
   } else {
      // container to message holder.
      const div1 = document.createElement("div");

      // creating were it displays who sent the message and the message.
      const fromMessage = document.createElement("span");
      const userMessage = document.createElement("span");

      // putting who sent message and message to div1.
      div1.append(fromMessage, userMessage);

      //adding content to fromMessage and userMessage.
      fromMessage.append("From " + username + ":" + " ");
      userMessage.append(chatInput.value);

      // putting message container in the chat.
      chat.append(div1);

      // Styling div1.
      div1.style.minWidth = "10%";
      
      div1.style.minHeight = "1rem";
      div1.style.backgroundColor = "yellow";
      div1.style.border = "solid darkyellow 1px";
      div1.style.borderRadius = "0.5rem";
      div1.style.padding = "0.5rem 0.5rem 0.5rem 0";
      div1.style.display = "flex";
      div1.style.alignItems = "center";

      // Styling fromMessage.
      fromMessage.style.fontFamily = "'Merriweather', serif"
      fromMessage.style.fontWeight = "900";
      fromMessage.style.fontStyle = "italic";

      // Styling userMessage.
      userMessage.style.fontFamily = "'Merriweather', serif";
      userMessage.style.fontSize = "smaller";

      // makes newline to the chat after message sent.
      chat.innerHTML += "<br>";

      // takes away chat message away from the input after message is sent.
      chatInput.value = "";

      //Makes it so everytime someone sends a message it goes to the bottom of the screen.
      window.scrollTo(0,document.body.scrollHeight);
   }
}