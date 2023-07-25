const quoteText = document.querySelector('.quote'),
    authorName = document.querySelector('.name'),
    quoteBtn = document.querySelector('#new-quote'),
    soundBtn = document.querySelector('.sound'),
    copyBtn = document.querySelector('.copy'),
    twitterBtn = document.querySelector('.twitter');

// radomQuote function
function radomQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote...';
    // fetcing  random quotes/data from the API and parsing it into javasc object
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';

        quoteBtn.classList.remove('loading');
    });
}

quoteBtn.addEventListener('click', radomQuote);

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis .speak(utterance);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, 'blank');
});