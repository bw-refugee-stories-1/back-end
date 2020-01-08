const bcrypt = require('bcryptjs')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('approve_stories').truncate()
    .then(() => knex('stories').truncate())
    .then(() => knex('users').truncate())

    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jelly', password: bcrypt.hashSync('belly', 8)}
      ]);
    })

    .then(() => {
      
      return knex('stories').insert([
        {id: 1, img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wyclefjean2_%28300dpi%29.jpg/800px-Wyclefjean2_%28300dpi%29.jpg', 
        author: 'Wyclef Jean', 
        email: 'wyclef@the90s.com', 
        title: 'Memoirs of an Immigrant', 
        text: `Yo, what up, this Wyclef with Mary J.
        I serenade the girls with my accoustic guitar
        You know what I'm sayin'?
        Yo, fellas havin' problems with the chicks?
        I want you right now to turn the lights down low
        Pull your girl up next to you
        I want you to sing this to her`, 
        approved: 'false'},

        {id: 2, img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lauryn_Hill_-_2014.jpg/800px-Lauryn_Hill_-_2014.jpg', author: 'Lauryn Hill', email: 'lauryn@the90s.com', title: 'Ready or Not', 
        text: `I play my enemies like a game of chess
        Where I rest, no stress, if you don't smoke sess
        Lest I must confess, my destiny's manifest
        In some Goretex and sweats, I make tracks like I'm homeless
        Rap orgies with Porgy and Bess
        Capture your bounty, like Elliot Ness, yes
        Bless you if you represent the Fu`,
        approved: 'false'},

        {id: 3, img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pras_at_2015_MIFF.jpg/800px-Pras_at_2015_MIFF.jpg', author: 'Pras Michel', email: 'pras@the90s.com', title: 'Memoirs of an Immigrant', text: `I dedicate this to my peeps who roam the streets
        God bless they souls, may they rest in peace
        There are those who finance and those who choose to lease
        Whatever suits you better on the terms of your lease
        Different strokes for different folks God
        I refuse to going back to being broke Lord`,
         approved: 'false'}
      ])
    })

    
};
