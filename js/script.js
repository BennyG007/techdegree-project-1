/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Below is an array of 10 different quotes. The quotes include who said it, some include the year it was said and other attributes. 
***/
const quotes = [
  {
    quote: "I came, I saw, I conquered.",
    source: "Julius Ceasar",
    citation: "Letter to Roman Senate",
    year: "47 BC"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tags: ["motivation"]
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    tags: ["goals", "motivation"]
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    tags: ["education"]
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source:"Abraham Lincoln"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source:"Thomas A Edison"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Dr. Seuss"
  }
];

/***
 * The purpose of the random quote function is to grab a quote from the array above at random. It will ultimately be used to display that random quote on the web page. 
 ***/ 

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;  
}

/***
 * `printQuote` function - this function will print out a random quote to the webpage. 
***/
function printQuote() {
  const randomQuote = getRandomQuote();

  let htmlString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;
  
  // The following if statements will check if the objects contain citations, years or tags. If the statement is true, it will print to the page, if false, then it will close the strings above. 

  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  } 

  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  } 
  
  if (randomQuote.tags) {
    htmlString += `<span class="tags">, ${randomQuote.tags.join(', ')}</span>`;
  } else {
    htmlString += `</p>`;
  }

  document.getElementById('quote-box').innerHTML = htmlString;

/*** 
  *Function below creates a random color and sets the background color accordingly. 
***/

function randomBackground () {
  
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let backColor = `${r},${g},${b}`;
  document.body.style.background = `rgb(${backColor})`;
}   
  randomBackground();
}

// This simply refreshes the page automatically every 10 seconds if no action is taken. 
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

