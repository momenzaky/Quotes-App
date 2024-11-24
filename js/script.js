
var quotes = [
    { quote: `“The fool doth think he is wise, but the wise man knows himself to be a fool.”`, author: `― William Shakespeare` },
    { quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, author: `― Albert Einstein` },
    {
        quote: `“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”`, author: `― Albert Camus`
    },
    { quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`, author: `―  Mahatma Gandhi` },
    { quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.”`, author: `― Oscar Wilde` },
    { quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`, author: `― Ralph Waldo Emerson` },
    { quote: `“It is better to be hated for what you are than to be loved for what you are not.”`, author: `―Andre Gide` },
    { quote: `“In three words I can sum up everything I've learned about life: it goes on.”`, author: `―Robert Frost` },
    { quote: `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`, author: `― Albert Einstein` },
];





function displayQuotes() {
    
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


    document.getElementById("quote").innerHTML = `
        <p class="font2 mt-3 m-auto">${randomQuote.quote}</p>
        <p class="font2 mt-3 m-auto">${randomQuote.author}</p>
    `;
}

