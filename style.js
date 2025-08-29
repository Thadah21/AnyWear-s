body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f9f9f9;
  color: #333;
}

header {
  background: linear-gradient(to right, #8360c3, #2ebf91);
  padding: 60px 0;
  color: white;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: auto;
}

main {
  padding: 40px 20px;
  text-align: center;
}

button {
  background-color: #2ebf91;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #25a17e;
}

#chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 500px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 1000;
}

.chat-hidden {
  display: none;
}

#chat-header {
  background-color: #2ebf91;
  color: white;
  padding: 10px;
  font-weight: bold;
}

#chat-body {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  font-size: 14px;
}

.chat-message {
  margin-bottom: 10px;
}

.chat-message.user {
  text-align: right;
  color: #2ebf91;
}

.chat-message.ai {
  text-align: left;
  color: #333;
}

#chat-form {
  display: flex;
  border-top: 1px solid #ccc;
}

#user-input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  font-size: 14px;
}

#user-input:focus {
  outline: none;
}

#chat-form button {
  background: #2ebf91;
  color: white;
  border: none;
  padding: 10px;
}
