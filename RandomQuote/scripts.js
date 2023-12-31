//this function creates a dictionary of quotes


function generate(){
    var quotes = {
        "- Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "- Anne Morrow Lindbergh" : '“Him that I love, I wish to be free -- even from me.”',
        "- Jamie Ford, Songs of Willow Frost" : '“The library is like a candy store where everything is free.”',
        "- Matthew Edward Hall, San Mateo: Proof of The Divine" : '"Life is free, food grows on trees."'


    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() 
        * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;


}