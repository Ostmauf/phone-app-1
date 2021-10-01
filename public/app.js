const chat = document.getElementById("chat-window");
const chatButton = document.getElementById("chat-button");
const chatInput = document.getElementById("chat-input");

chatButton.addEventListener("click", onChatButtonClicked);

function onChatButtonClicked() {

    chat.innerHTML += "<br>" + chatInput.value


    chatInput.value = ""
}