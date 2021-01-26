const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newq = document.getElementById("newq");
const tweetMe = document.getElementById("tweetMe");
let realdata = "";
let quotesdata = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${
    quotesdata.text
  }                              By ${
    quotesdata.author == null
      ? (author.innerText = "'Unknown'")
      : (author.innerText = `${quotesdata.author}`)
  }`;
  window.open(tweetPost);
};
const getnewquotes = () => {
  // console.log(realdata.length);
  let rnum = Math.floor(Math.random() * (realdata.length + 1));
  quotesdata = realdata[rnum];
  quotes.innerText = `${quotesdata.text}`;
  quotesdata.author == null
    ? (author.innerText = "Unknown")
    : (author.innerText = `${quotesdata.author}`);
  // console.log(realdata[rnum].text,rnum)
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realdata = await data.json();
    getnewquotes();
    // console.log(realdata[rnum].text);
  } catch (error) {}
};
tweetMe.addEventListener("click", tweetNow);
newq.addEventListener("click", getnewquotes);
getQuotes();
