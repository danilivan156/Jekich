const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '6352436068:AAEgPp3HJFxAgePNiq5-VJ2H_N9Zr2Ga7U4'
const bot = new TelegramBot(TOKEN, {
    polling: true
})
const comandOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Комплимент', callback_data:'1'},{text: 'Подними настроение', callback_data:'2'}], 
            [{text: 'My photo', callback_data:'3'}],
    [{text: 'Защита от пиздабола', callback_data:'4'}]
        ]
    }
    )
}
const comandOptions1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Показать все обещания', callback_data:'5'}],
            [{text: 'Добавить обещание', callback_data:'6'}],
            [{text: 'Удалить обещание', callback_data:'7'}], 
          
        ]
    }
    )
}

const kompliments = [
    'Добрый и сопереживающий. Безвозмездно помогаешь мне, хотя мы мало знакомы.. Я очень это ценю',
    'Привлекательный. Особенно меня все встречи поражало как от тебя вкусно пахло, я даже смотрел какими духами ты пользуешься когда ходил в уборную очень манит. ',
    'Интересный. Я всегда слушаю о твоих путешествиях с открытым ртом ',
    'Заботливый. Всегда когда я приезжаю спрашиваешь голодный ли я. Мне это особенно приятно',
    'Умный. Я даже разъяснять не буду, просто можно посмотреть чего ты добился',
    'Душевный и чувственный. Ты единственный человек при котором я дал волю чувствам за последние лет 10. ',
    'Сексик. Пока я тебя не встретил, я думал что мне не нравится целоваться, помню я говорил тебе об этом. А теперь мне хочется это делать',
    'Родной. Мне трудно открываться людям, но с тобой это происходит просто само собой, мне не нужно перешагивать через себя'
    
]
const photos = [
    'https://disk.yandex.com.am/i/a3MIMSFhK8biKg',
    'https://disk.yandex.com.am/i/8VaOlBCyhh6l6g',
    'https://disk.yandex.com.am/i/TSG6FII96GAYXQ',
    'https://disk.yandex.com.am/i/0tKJuLcJ2aEPng',
    'https://disk.yandex.com.am/i/WB0Z77MRPCl0EQ',
    'https://disk.yandex.com.am/i/tu7iZtvx26dbVw',
    'https://disk.yandex.com.am/i/TOiEyLvC-yfm4Q',
    'https://disk.yandex.com.am/i/g_TztJNk1JZ1sA',
    'https://disk.yandex.com.am/i/uicJywaweSz89g',
    'https://disk.yandex.com.am/i/Ah_gYJhW-GYdNQ',
    'https://disk.yandex.com.am/i/QdQ5HPC0kYAVww',
    'https://disk.yandex.com.am/i/VAhfw-cGktrPEw'

]
const sexPhoto = [
    'Красивая', 'умная', 'загадочная', 'сообразительная'
] // доступ только с определенным айди

const mood = [
    'Я очень рад что у меня появился человек, который беспокоится за меня',
    'Я безумно счастлив и благодарен тебе, что ты разделяешь мои проблемы и помогаешь мне их решать',
    'Многие хотели бы иметь рядом с собой такого человека, как ты и ищут его десятками лет. А  мне выпал джекпот и в моей жизни ты появился внезапно и быстро',
    'Спасибо, что теперь мне есть кому отправлять свои видосы и голосовые с жалобами на усталость посреди ночи)',
    'У тебя теперь есть человек, который наверняка думает о тебе перед сном)',
    'Ты вновь зажег огонь в моих глазах, я снова поверил в себя и смог довериться человеку-тебе',
    'Благодаря тебе я могу хотя бы иногда заниматься тем чем безумно хочу, учиться и программировать',
    'У тебя теперь появился человек, который тебя любит, дорожит тобой, боится потерять и который готов тебе всегда тоже помочь)'
]
let text = promises.join (',')
const start = async()=>{
    bot.setMyCommands([
        {command: '/start', description: 'Начать'},
    ])
    bot.on('message', async msg=>{
        const chatId = msg.chat.id
        let itemMood = Math.floor(Math.random() * mood.length);
        let itemKompliment = Math.floor(Math.random() * kompliments.length);
        let itemPhoto = Math.floor(Math.random() * photos.length);
        if (msg.text == '/start') {await bot.sendMessage(chatId,'What do you want? ',{
                reply_markup:{
                    keyboard:[
                        ['Комплимент','Подними настроение'],
                        ['My sexy photo'],
                        ['Защита от пиздабола']
                    ]
                }
            })
        }
        if (msg.text == 'Подними настроение'){
            await  bot.sendMessage(chatId,mood[itemMood],)
        }
        else if (msg.text == 'Комплимент'){
            await bot.sendMessage(chatId,kompliments[itemKompliment])
        }
        else if (msg.text == 'My sexy photo'){
             bot.sendPhoto(chatId, photos[itemPhoto])
        }
        else if (msg.text == 'Защита от пиздабола'){
            await bot.sendMessage(chatId,"ХУХ",{
                reply_markup:{
                    keyboard:[
                        ['Показать все обещания'],
                        ['Добавить обещание'],
                        ['Назад']
                    ]
                }
            })  
        }
        else if (msg.text == 'Показать все обещания'){
            await  bot.sendMessage(chatId,text)

        }
        else if (msg.text == 'Назад'){
            await  bot.sendMessage(chatId,'What do you want? ',{
                reply_markup:{
                    keyboard:[
                        ['Комплимент','Подними настроение'],
                        ['My sexy photo'],
                        ['Защита от пиздабола'],
                    ]
                }
            })
        }
        else if (msg.text == 'Добавить обещание'){
        await  bot.sendMessage(chatId,'Пиши')
        }
        else if (!(msg.text == 'Добавить обещание')&&!(msg.text == 'Защита от пиздабола')&&!(msg.text == '/start')&&!(msg.text == 'My sexy photo')&&!(msg.text == 'Назад')&&!(msg.text == 'Показать все обещания')&&!(msg.text == 'Подними настроение')&&!(msg.text == 'Комплимент')){
            promises.push(msg.text)
                text = promises.join (',')
        }

       /* bot.on('callback_query',async msg =>{
            const data = msg.data
            const chatId = msg.message.chat.id
            if (data == '5'){
            await bot.sendMessage(chatId,text,comandOptions1)
        }
        }
        )
        bot.on('callback_query',async msg =>{
            const data = msg.data
            const chatId = msg.message.chat.id
            if (data == '6'){
            await bot.sendMessage(chatId,'Пиши:')
            bot.on('message', async msg=>{
                promises.push(msg.text)
                text = promises.join (',')
            })
        }
        }
        )
    /*bot.on('callback_query', async msg =>{
        const data = msg.data
        const chatId = msg.message.chat.id
        let itemMood = Math.floor(Math.random() * mood.length);
        let itemKompliment = Math.floor(Math.random() * kompliments.length);
        let itemPhoto = Math.floor(Math.random() * sexPhoto.length);
        let uslovie1 = 0

        if (data == '2'){
                await bot.sendMessage(chatId,mood[itemMood],comandOptions)
        }
        if (data == '1'){
           await bot.sendMessage(chatId,kompliments[itemKompliment],comandOptions)
        }
        if (data == '3'){
           await bot.sendMessage(chatId,sexPhoto[itemPhoto],comandOptions)
        }
        if (data == '4'){
            await bot.sendMessage(chatId,sexPhoto[itemPhoto],comandOptions1)
         }
         if (data == '5'){
            await bot.sendMessage(chatId,promises,comandOptions1)
         }
    })    */
    })
}
start()

