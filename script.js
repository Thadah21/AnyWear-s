const chatWidget = document.getElementById('chat-widget');
const chatBody = document.getElementById('chat-body');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const startChatBtn = document.getElementById('start-chat');

startChatBtn.addEventListener('click', () => {
  chatWidget.classList.remove('chat-hidden');
  addMessage("Hi! I'm your accessory assistant 💎. Tell me what you're looking for — colors, style, or event?", 'ai');
});

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  // Simulated AI response (replace with OpenAI API call if desired)
  const response = await getAIResponse(message);
  addMessage(response, 'ai');
});

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `chat-message ${sender}`;
  msg.innerText = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function getAIResponse(userMessage) {
  // Simulated response logic
  if (userMessage.toLowerCase().includes('wedding')) {
    return "For weddings, I’d recommend elegant pearl earrings or a delicate gold necklace. Do you like gold or silver?";
  } else if (userMessage.toLowerCase().includes('minimal')) {
    return "Minimalist style? Consider thin stackable rings or geometric stud earrings.";
  } else if (userMessage.toLowerCase().includes('color')) {
    return "What colors are you thinking? I can match accessories with any palette.";
  } else {
    return "Got it! Tell me more about the style, event, or colors you're into ✨";
  }
