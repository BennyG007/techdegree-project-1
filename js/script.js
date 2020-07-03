/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
    tags: "motivation"
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
    tags: "education"
  }
];

/***
 * `getRandomQuote` function
 * This function grabs a random quote from the Quotes array above.
***/

// 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;  
}

/***
 * `printQuote` function
***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  const callRandomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let htmlString = `<p class="quote">${callRandomQuote.quote}</p>
                    <p class="source">${callRandomQuote.source}`;
  
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  if (callRandomQuote.citation) {
    htmlString += `<span class="citation">${callRandomQuote.citation}</span>`;
  } 

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  if (callRandomQuote.year) {
    htmlString += `<span class="year">${callRandomQuote.year}</span>`;
  } 
  
  if (callRandomQuote.tags) {
    htmlString += `<span class="tags">${callRandomQuote.tags.join(', ')}</span>`;
  } else {
    htmlString += `</p>`;
  }
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = htmlString;
}



setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);