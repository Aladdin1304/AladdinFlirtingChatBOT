document.addEventListener("DOMContentLoaded", function () {
  // Function to simulate the bot's greeting with typing animation
  function botGreeting() {
    var chatBox = document.getElementById("chatBox");
    var greeting = "Hello! I'm Aladdin , Allow me to bring joy in Rising's absence with swift, flirtatious responses.";
    displayWithTypingAnimation(chatBox, botName, greeting);
  }

  // Function to simulate typing animation
  function displayWithTypingAnimation(element, name, text) {
    var speed = 50;
    element.innerHTML +=
      '<div class="bot-message"><strong>' + name + ":</strong> ";

    var i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
    element.innerHTML += "</div>";
    scrollToBottom(element);
  }

  // Function to handle user messages
  function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    if (userInput.trim() !== "") {
      chatBox.innerHTML +=
        '<div class="user-message"><strong>AMIRA :</strong> ' +
        userInput +
        "</div>";

      var botName = "Aladdin";
      var randomResponses = [
        "Heyy Mahek After seeing you, the first thing I said was Mash'Allah. The next was Inshallah!",
        "Dear Ali  bhag Allah created everyone in pairs, so what are you doing, single?",
        "Hey Ali Bhag Are you Muslim? Because your body islamin.",
        "Are you tired Ali bhag ? Cause you've been making tawaf in my head all day.",
        "Are your feet tired Mahek ? Because you've been performing Tawaaf in my mind all day long?",
        "Ali bhag Can I have your mahram's phone number?",
        "Ali Bhag Do you believe in the hereafter? Oh, you do? Then you know what Rising hereafter.",
        "Do you wanna date , Ali Bhag ? I bought a box full when I went to Madinah.",
        "Mahek, I need to break my fast. Can I have a date?",
        "heyy Ali Bhag just saw the moon in your eyes... Eid Mubarak.,",
        "Hey Mahek, I think Rising sick, but Allah created a cure: YOU.",
        "Hey Ali Bhag, we're allowed to marry four...but I don't think that's necessary because you're a 10.",
        "Hey Ali Bhag I just met you, and this is crazy, but here's my dad's number, so call him maybe?",
        "Hey, Ali bhag. When I first saw you, I was like و",
        "Hey Ali Bhag Let's get married so I don't have to lower my gaze every time you walk in the room.",
        "Muslims are supposed to have many children, and I am willing to do my part...",
        "Nice hijab ali bhag. Can I talk you out of it?",
        "Roses are red. Violets are blue. You're so halal. ali bhag Can I nikkah you?	",
        "So Ali bhag, read any good Surahs lately?",
        "Ali bhag That hijab really compliments your eyes.",
        "Ali bhag Will my platinum visa cover your dowry?",
        "Ali bhag You remind me of the Ka'aba. I can walk around you all day long.",
        "Mahek Your feet made me lower my gaze.	",
      ];

      var randomIndex = Math.floor(Math.random() * randomResponses.length);
      var botResponse = randomResponses[randomIndex];

      displayWithTypingAnimation(chatBox, botName, botResponse);

      document.getElementById("userInput").value = "";
      scrollToBottom(chatBox);
    }
  }

  // Function to scroll to the bottom of the chat box
  function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
  }

  // Add an event listener to the "Send" button
  document.getElementById("sendButton").addEventListener("click", sendMessage);

  // Call the botGreeting function when the page loads
  botGreeting();
});
