function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value.trim();
  
    if (message !== "") {
      addMessageToLog(message, "user");
      processMessage(message);
    }
  
    userInput.value = "";
  }
  
  function processMessage(message) {
  
    var response;
  
    if (message.toLowerCase().includes("html")) {
      response = "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.";
    } else if (message.toLowerCase().includes("css")) {
      response = "CSS stands for Cascading Style Sheets. It is used for styling web pages and defining their layout.";
    } else if (message.toLowerCase().includes("javascript")) {
      response = "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.";
    } else {
      response = "I'm sorry, I cannot answer that question at the moment. Please try asking something else.";
    }
  
    addMessageToLog(response, "bot");
  }
  
  function addMessageToLog(message, sender) {
    var chatLog = document.getElementById("chat-log");
  
    var messageElement = document.createElement("p");
    messageElement.classList.add("chat-message");
  
    if (sender === "user") {
      messageElement.classList.add("user-message");
    } else if (sender === "bot") {
      messageElement.classList.add("bot-message");
    }
  
    messageElement.textContent = message;
  
    chatLog.appendChild(messageElement);
  
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  