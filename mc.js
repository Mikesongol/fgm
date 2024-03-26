document.addEventListener("DOMContentLoaded", function() {
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector(".chat-input span");
  const chatbox = document.querySelector(".chatbox");
  const chatbot = document.querySelector(".chatbot");
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  let userMessage;
  const API_KEY = "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";

  const createChatLi = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    let chatContent =
      className === "outgoing"
        ? `<p>${message}</p>`
        : ` <span class="material-icons-outlined">smart_toy</span><p>${message}</p>`;
    chatli.innerHTML = chatContent;
    return chatli;
  };

  const generateResponse = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const isAskingIdentity = userMessage.toLowerCase().includes("who are you");
    if (isAskingIdentity) {
      displayBotMessage("I am an FGM Virtual assistant how can I help you today concerning Fgm.");
      return;
    }
    const fgmKeywords = ["fgm", "female genital mutilation"];
    const containsFGMKeyword = fgmKeywords.some(keyword => userMessage.toLowerCase().includes(keyword));
    if (!containsFGMKeyword) {
      displayBotMessage("Please ask a question related to FGM to get assistance.");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    };
    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const botReply = data.choices[0].message.content;
      displayBotMessage(botReply);
      chatInput.placeholder = "Please Enter a message..."; // Reset placeholder
      console.log("Bot Reply:", botReply);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const displayBotMessage = (message) => {
    chatbox.appendChild(createChatLi(message, "incoming"));
    chatbox.scrollTop = chatbox.scrollHeight;
  };

  const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = '';
    setTimeout(() => {
      generateResponse();
    }, 600);
  };

  chatInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      handleChat();
    }
  });

  sendChatBtn.addEventListener("click", handleChat);

  chatbotToggler.addEventListener("click", function() {
    document.body.classList.toggle("show-chatbot");
  });
});
