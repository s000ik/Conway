
function checkTime(i) 
{
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10, matches the site's aesthetic
    return i;
}



function startClock() 
{
  updateClock(); // Call it once to avoid delay
  setInterval(updateClock, 1000); // Update every second
}

function updateClock() 
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = (h >= 12) ? "PM" : "AM";
  h = (h % 12) || 12; // Convert to 12-hour format

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s + " " + ampm;
}




function startDate() 
{
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("dateDisplay").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
}



//quote array
var quotes = [
    "Blank",
    "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>- Jake <small><em>(Adventure Time)</em></small>",
    "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
    "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
    "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
    "\"If you can dream it, you can do it.\"<br>- Walt Disney",
    "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
    "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
    "\"If you always put a limit on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"<br>- Winston Churchill",
    "\"Believe you can and you're halfway there.\"<br>- Theodore Roosevelt",
    "\"The only way to do great work is to love what you do.\"<br>- Steve Jobs",
    "\"The future depends on what you do today.\"<br>- Mahatma Gandhi",
    "\"Don't watch the clock; do what it does. Keep going.\"<br>- Sam Levenson",
    "\"The only thing standing between you and your dream is the will to try and the belief that it is actually possible.\"<br>- Joel Brown",
    "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\"<br>- Roy T. Bennett",
    "\"The harder the conflict, the greater the triumph.\"<br>- George Washington",
    "\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\"<br>- Albert Schweitzer",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\"<br>- Franklin D. Roosevelt",
    "\"It does not matter how slowly you go as long as you do not stop.\"<br>- Confucius",
    "\"Your time is limited, don't waste it living someone else's life.\"<br>- Steve Jobs",
    "\"The future belongs to those who believe in the beauty of their dreams.\"<br>- Eleanor Roosevelt",
    "\"You miss 100% of the shots you don't take.\"<br>- Wayne Gretzky",
    "\"The only person you should try to be better than is the person you were yesterday.\"<br>- Unknown",
    "\"Challenges are what make life interesting and overcoming them is what makes life meaningful.\"<br>- Joshua J. Marine",
    "\"The best way to predict the future is to create it.\"<br>- Peter Drucker",
    "\"Success is walking from failure to failure with no loss of enthusiasm.\"<br>- Winston Churchill",
    "\"Do what you can, with what you have, where you are.\"<br>- Theodore Roosevelt",
    "\"The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.\"<br>- Mark Zuckerberg",
    "\"Strive not to be a success, but rather to be of value.\"<br>- Albert Einstein",
    "\"The only time you should ever look back is to see how far you've come.\"<br>- Unknown",
    "\"The only place where success comes before work is in the dictionary.\"<br>- Vidal Sassoon",
    "\"Your life does not get better by chance, it gets better by change.\"<br>- Jim Rohn",
    "\"Dream big and dare to fail.\"<br>- Norman Vaughan",
    "\"Success is stumbling from failure to failure with no loss of enthusiasm.\"<br>- Winston Churchill",
    "\"The secret to getting ahead is getting started.\"<br>- Mark Twain",
    "\"You are the CEO of your life. Hire, fire, and promote accordingly.\"<br>- Unknown",
    "\"The only way to do great work is to love what you do.\"<br>- Steve Jobs",
    "\"The future depends on what you do today.\"<br>- Mahatma Gandhi",
    "\"Don't watch the clock; do what it does. Keep going.\"<br>- Sam Levenson",
    "\"The only thing standing between you and your dream is the will to try and the belief that it is actually possible.\"<br>- Joel Brown",
    "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\"<br>- Roy T. Bennett",
    "\"The harder the conflict, the greater the triumph.\"<br>- George Washington",
    "\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\"<br>- Albert Schweitzer",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\"<br>- Franklin D. Roosevelt",
    "\"It does not matter how slowly you go as long as you do not stop.\"<br>- Confucius",
    "\"Your time is limited, don't waste it living someone else's life.\"<br>- Steve Jobs",
    "\"The future belongs to those who believe in the beauty of their dreams.\"<br>- Eleanor Roosevelt",
    "\"You miss 100% of the shots you don't take.\"<br>- Wayne Gretzky",
    "\"The only person you should try to be better than is the person you were yesterday.\"<br>- Unknown",
    "\"Challenges are what make life interesting and overcoming them is what makes life meaningful.\"<br>- Joshua J. Marine",
    "\"The best way to predict the future is to create it.\"<br>- Peter Drucker",
    "\"Success is walking from failure to failure with no loss of enthusiasm.\"<br>- Winston Churchill",
    "\"Do what you can, with what you have, where you are.\"<br>- Theodore Roosevelt",
    "\"The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.\"<br>- Mark Zuckerberg",
    "\"Strive not to be a success, but rather to be of value.\"<br>- Albert Einstein",
    "\"The only time you should ever look back is to see how far you've come.\"<br>- Unknown",
    "\"The only place where success comes before work is in the dictionary.\"<br>- Vidal Sassoon",
    "\"Your life does not get better by chance, it gets better by change.\"<br>- Jim Rohn",
    "\"Dream big and dare to fail.\"<br>- Norman Vaughan",
    "\"Success is stumbling from failure to failure with no loss of enthusiasm.\"<br>- Winston Churchill",
    "\"The secret to getting ahead is getting started.\"<br>- Mark Twain",
    "\"You are the CEO of your life. Hire, fire, and promote accordingly.\"<br>- Unknown",
    "\"The only way to achieve the impossible is to believe it is possible.\"<br>- Charles Kingsleigh <small><em>(Alice in Wonderland)</em></small>",
    "\"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.\"<br>- Ferris Bueller <small><em>(Ferris Bueller's Day Off)</em></small>",
    "\"Courage is not the absence of fear, but the triumph over it.\"<br>- Nelson Mandela",
    "\"The future is unwritten. Tomorrow is a mystery. Today is a gift. That's why it's called the present.\"<br>- Master Oogway <small><em>(Kung Fu Panda)</em></small>",
    "\"You have to look inside yourself to save yourself from your other self. Only then will your true self reveal itself.\"<br>- Zuko <small><em>(Avatar: The Last Airbender)</em></small>",
    "\"If you're going through hell, keep going.\"<br>- Winston Churchill",
    "\"There's a difference between knowing the path and walking the path.\"<br>- Morpheus <small><em>(The Matrix)</em></small>",
    "\"The flower that blooms in adversity is the most rare and beautiful of all.\"<br>- The Emperor <small><em>(Mulan)</em></small>",
    "\"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life.\"<br>- Walter Mitty <small><em>(The Secret Life of Walter Mitty)</em></small>",
    "\"Even the darkest night will end and the sun will rise.\"<br>- Victor Hugo"

  ];
  
  function generateQuote() {
    var randNum = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quote');
    
    quoteElement.style.opacity = 0; // Fade out
    setTimeout(function () {
      quoteElement.innerHTML = quotes[randNum];
      quoteElement.style.opacity = 1; // Fade in
    }, 400); // Set the delay to match the transition duration
  }