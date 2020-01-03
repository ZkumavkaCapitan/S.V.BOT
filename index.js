const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjYyNTUzMDI4NDkwMTY2Mjgy.Xg7r6Q.P1I6P1A5UiEhrj9xcqQyvLfKBs4';

const cheerio = require('cheerio');

const request = require('request');

const PREFIX = '!';

var version = '1.3';

bot.on('ready', () => {
    console.log('This bot is online! ' + version);
 
})
 
 
 
 
bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'image':
        image(message);
 
        break;
    }
 
});
 
function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "dogs",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 
 
 
 
 
 
 
 
}

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'react':
            message.channel.send('Divné!').then(message.react('😕'));

        break;
    }

});

bot.on('guildMemberAdd', member =>{

    const chanel = member.guild.channels.find(channel => chanel.name === "vítej");
    if(!channel) return;

    channel.send(`Vítej na našem serveru, ${member}, nebuď toxic díky`)
}); 



bot.on('read', () => {
    console.log('This bot is online!' + version);

});


bot.on('message', msg=>{
    if(msg.content === "plz help"){
        msg.channel.sendMessage('Potřebuješ pomoct? Hmm, nedivím se.   https://sylvie-vaskova-help.webnode.cz/');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz sexy"){
        msg.channel.sendMessage('Ok. Posílám   http://bit.ly/2FcUGo7, http://bit.ly/37xCH82, http://bit.ly/36wIZEw, http://bit.ly/2ufLwVB');
    }
});

bot.on('message', msg=>{
    if(msg.content === "ahoj sylvie"){
        msg.channel.sendMessage('Ahoj');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz montage"){
        msg.channel.sendMessage('Ok. Posílám  http://bit.ly/2rPtnNp');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz playboy"){
        msg.channel.sendMessage('http://bit.ly/2Qjhtoo, http://bit.ly/2Qlbdg0');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz sportovec"){
        msg.channel.sendMessage('http://bit.ly/39DhN94');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz king"){
        msg.channel.sendMessage('http://bit.ly/2FhZNTT');
    }
});

bot.on('message', msg=>{
    if(msg.content === "plz pedofil"){
        msg.channel.sendMessage('http://bit.ly/2QE0ZGw')
    }
});

bot.login(token);
