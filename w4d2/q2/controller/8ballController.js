exports.ballControll = function(req, res, next)
{
    //console.log("request was here");
    let data = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

    let randomize = Math.random();
    randomize = Math.floor(data.length * randomize);
    //res.status(200);
    res.json(data[randomize]);
    
}