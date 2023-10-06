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
  'Я тебя знаю не много, но уже уверен в том, что ты на многое готов, чтобы помочь другим.',
    'В костюме, котором я тебя видел постоянно, когда мы ходили обедать, ты просто супер респектабельный',
    'Только рядом с тобой я впервые за долго время почувствовал себя нужным',
    'Надежный. С тобой я уверен, что мне завтра будет есть что покушать и что я не попаду в какую нибудь авантюру. Потому что мне до сих пор иногда кажется, что когда я выложил свою фотку на доску и мне написали несколько людей, я ответил только тебе не случайно. Ведь мог кому-то другому, кто сделал бы мне больно. А глядя на то как ты заботишься о маме, я понимаю, что в своем окружении нужно иметь именно таких людей ',
    'Целеустремлённый и амбициозный. Не каждый человек почти весь мир объездил)',
    'Горячий. Это я ощущаю сразу, когда прихожу к тебе и ты меня в ушко целуешь',
    'Примерный. Я очень хочу быть похожим на тебя не только интровертностью',
    'Упоительный. Если я к тебе приезжаю в плохом настроении то уезжаю наверняка всегда в хорошем)',
    'Ласковый. Лублу когда ты меня гладишь по головке и успокаиваешь. Это как отдельный вид умиротворения',
    'Твои объятия очень теплые и приятные, поэтому я стал так быстро от них зависим'
    
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
    'https://disk.yandex.com.am/i/VAhfw-cGktrPEw',
    'https://disk.yandex.com.am/i/v5g3vBfoMuMwPA',
    'https://disk.yandex.com.am/i/KHkctRKawJMMXg',
    'https://disk.yandex.com.am/i/VpoyMwZe8W-2-Q',
    'https://disk.yandex.com.am/i/AT9xL1a0Xk4pLQ',
    'https://disk.yandex.com.am/i/g0FpJJlVUSbPvg',
    'https://disk.yandex.com.am/i/ndY73wwW0JKB2w',
    'https://disk.yandex.com.am/i/ck8hNfcwVtE1PA',
    'https://disk.yandex.com.am/i/axAs_6ZhQN59VA'
]
const sexPhoto = [
    'Красивая', 'умная', 'загадочная', 'сообразительная'
] // доступ только с определенным айди
let promises = ['Накачаться', 'Уровень английского', 'Canada']
const mood = [
      'Твой взгляд и твои рассказы привлекают меня больше, чем программирование',
    'Без тебя я бы ни за что не справился со всем, что на меня навалилось за последний год. С тобой моя жизнь наконец-то стала ярче',
    'У меня +100 к настроению, когда ты называешь меня малышом. Обычно мое депрессивное состояние сразу почти сходит на нет',
    'Перед первой встрече ты писал, что ты можешь мне не понравиться. И когда я ждал тебя, то постоянно думал что может быть не так.. Может ты будешь толстым, лицо в шрамах или некрасивым просто, но потом ко мне подошел идеальный мужчинка и я не понял вообще к чему были сказаны эти слова ',
    'При каждой нашей встрече ты вдохновляешь меня быть лучше.',
    'Я готов каждый день благодарить судьбу за то что ты стал частью моей жизни',
    'Рядом с тобой я всегда чувствую себя защищенным, особенно когда лежу на тебе, сильно прижавшись',
    'Знай, что у тебя появился человек, который всегда тебя поддержит и захочет с тобой встретиться',
    'Я помню, что говорил тебе, что поцелуи не возбуждают меня. После поцелуя с тобой, я понял, что просто целовался с кем то не тем. И да, я считаю что первый поцелуй у меня был с тобой и очень счастлив, потому что прежние даже были не в засос',
    'Мне тебя постоянно не хватает. Мне грустно что мы мало встречаемся и общаемся, но я понимаю что у тебя много работы. Поэтому я просто себя тешу тем, что проваливаюсь в воспоминания с тобой, когда мы были вместе',    
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
                        ['My photo']
                        
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
        else if (msg.text == 'My photo'){
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
                        ['My photo'],
                       
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

