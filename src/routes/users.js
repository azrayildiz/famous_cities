const express = require('express')

const router = express.Router()

const User = require('../models/user')
const TourEvent = require('../models/tour-event')
const TalkEvent = require('../models/talk-event')

const jonathan = new User('Jonathan', 75, 157984340, 'jonathan@gmail.com', 'berlin')
const beatriz = new User('Beatriz', 37, 982490823, 'beatriz@hotmail.com', 'Spain')
const alex = new User('Alex', 48, 4395284756, 'alex@hotmail.com', 'England')
const jasemin = new User('Jasemin', 23, 'jasemin@gmail.com', 'Holland')
const karen = new User('Karen', 48, 3975284756, 'karen@gmail.com', 'Israel')
const hermann = new User('Hermann', 54, 2075284756, 'hermann@gmail.com', 'Germany')
const wendy = new User('Wendy', 22, 12975284756, 'nadine@gmail.com', 'USA')

// tourevent
const Cervantes = new TourEvent(
  'Cervantes - Knights and The Ottoman Palace!',
  'Live Tour',
  'Madrid',
  '23 October 2021',
  '19:00pm',
  '2 Hours'
)

const maryEdward = new TalkEvent(
  "Miss Mary Edward's Secret Love",
  'Online Talk',
  '18 September 2021',
  '19:00pm',
  '60 minutes'
)

const Rembrandt = new TalkEvent(
  'The Anatomy Lesson - Rembrandt',
  'Online Talk',
  '14 October 2021',
  '19:00pm',
  '60 minutes'
)

jasemin.attendTourEvent(Cervantes)
// alex.interestTourEvent(Cervantes)
alex.payForTourEvent(Cervantes)
karen.likeTourEvent(Cervantes)
hermann.likeTourEvent(maryEdward)
jonathan.commentTourEvent(maryEdward, 'The topic is very interesting.')
wendy.attendTourEvent(maryEdward)

jonathan.attendTourEvent(Rembrandt)
beatriz.commentTourEvent(Rembrandt, 'I will attend this talk. I am looking forward to the event!')

// console.log(alex)
// console.log(karen.likeTourEvent)

// jonathan.commented(Rembrandt, 'I will attend this talk. I am looking forward to the event!')
// beatriz.commented(Rembrandt, 'The topic is very interesting. I am sure we will learn new things about Rembrandt.')
const users =
  // console.log(jasemin)

  // console.log(karen, karen.attendTourEvent[0].attendedBy)
  /* GET users listing. */
  router.get('/', (req, res) => {
    let result = users

    if (req.query.name) {
      result = users.filter(user => user.name == req.query.name)
    }

    res.send(result)
  })

router.get('/:userId', (req, res) => {
  const user = users[req.params.userId]

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
