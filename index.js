const { Client, RichEmbed } = require('discord.js');
const client  = new Client();

client.on('ready', () => {
    console.log( `Bot is ready as ${client.user.tag}`);
    client.user.setStatus('dnd');

    console.log(client.user.presence.status);

//    const testChannel = client.channels.find(channel => channel.name === 'test')
  //  ;
    //console.log(testChannel);
});

client.on('message', async message  => {
    console.log(message.content);
    if (message.content === 'jony es puto?') {
        message.reply('si, es muy puto');
    }
    if (message.content === 'gali tiene una terrible poronga?') {
        message.reply('si, es un porongudo venoso');
    }
    if (message.content === 'hello') {
        message.channel.send(`Hello! ${message.author} `);
    }
    if (message.content.includes('!test')) {
        message.channel.send(`Glad you are testing ${message.author} `);
    }
    if (message.content === '!redes') {
        message.channel.send('https://www.twitch.tv/galiasmu');
        message.channel.send('https://twitter.com/galiasmu');
        message.channel.send('https://www.instagram.com/galiasmu/');
    }

    if (message.content === '!pretty') {
        const embed = new RichEmbed()
            .setTitle ('A pretty message')
            .setColor('AQUA')
            .setAuthor('Gali',
             'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F24450999%2Fadd-border-around-png-image-using-imagick-php&psig=AOvVaw2svDOfeDSlKGYHzw7VEBQw&ust=1640565548089000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiU7oedgPUCFQAAAAAdAAAAABAD')
          //  .addField('Something one', 'Lorem Impsun')
            //.addField('Something one', 'Lorem Impsun')
           // .addField('Something one', 'Lorem Impsun')
            //.addField('Something one', 'Lorem Impsun');
        message.channel.send(embed);
    }

    if (message.content === '!clear') {
       const fetched =  await message.channel.fetchMessages({limit: 100});
       message.channel.bulkDelete(fetched)
       console.log('Mensajes eliminados')
    }

});

client.login('OTI0NDI2NjE2ODI5MDE4MTMy.YceZYA.gxMxmXexLA_rULz3lLur0B_gvI8');