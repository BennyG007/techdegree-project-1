/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Below is an array of quotes. Some quotes include who said it, the year it was said and certain attributes. 
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
  }
];

/***
 * The purpose of the random quote function is to grab a quote from the array above at random. It will ultimately be used to display that random quote on the web page. 
 ***/

// The getRandomQuote() function generates a random number. This is used to grab a random ojbect from the array of quotes above.  

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;  
}

/***
 * `printQuote` function - this function will print out a random quote to the webpage. 
***/
function printQuote() {
  const callRandomQuote = getRandomQuote();

  let htmlString = `<p class="quote">${callRandomQuote.quote}</p>
                    <p class="source">${callRandomQuote.source}`;
  
  // The following if statements will check if the objects contain citations, years or tags. If the statement is true, it will print to the page, if false, then it will close the strings above. 

  if (callRandomQuote.citation) {
    htmlString += `<span class="citation">${callRandomQuote.citation}</span>`;
  } 

  if (callRandomQuote.year) {
    htmlString += `<span class="year">${callRandomQuote.year}</span>`;
  } 
  
  if (callRandomQuote.tags) {
    htmlString += `<span class="tags">, ${callRandomQuote.tags.join(', ')}</span>`;
  } else {
    htmlString += `</p>`;
  }

  document.getElementById('quote-box').innerHTML = htmlString;

  randomBackground();
}

// This simply refreshes the page automatically every 10 seconds if no action is taken. 
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Function below creates a random color and sets the background color accordingly. 

function randomBackground () {
  
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let backColor = `${r},${g},${b}`;
  document.body.style.background = `rgb(${backColor})`;
} 