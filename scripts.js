document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messageArea = document.getElementById('messageArea');

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText !== '')  {
            displayMessage(messageText);
            messageInput.value = ''; // Clear the input field after sending
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey)  { // Check if enter key was pressed without shift
        event.preventDefault(); // Prevent default Enter key behavior (like adding a new line in the input)
        sendButton.click(); // Simulate a click on the send button
        }
    });

    function displayMessage(message) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        messageArea.appendChild(newMessage);

        // Scroll to the bottom of the message area to show the latest message
        messageArea.scrollTop = messageArea.scrollHeight;
    }
});
