const express = require('express')

const router = express.Router()

const colors = require('colors')

const User = require('../models/user')
const TourEvent = require('../models/tour-event')
const TalkEvent = require('../models/talk-event')
const Photo = require('../models/photo')
const { events } = require('../models/user')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.name) {
    query.name = req.query.name
  }
  if (req.query.age) {
    query.age = req.query.age
  }
  res.send(await User.find(query))
})

/*POST create a user*/
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

/* GET users listing. */
router.get('/initialize', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }
  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const jonathan = new User({
    name: 'Jonathan',
    age: 75,
    phoneNumber: 157984340,
    email: 'jonathan@gmail.com',
    location: 'Berlin',
  })
  await jonathan.setPassword('test')
  await jonathan.save()

  const beatriz = new User({
    name: 'Beatriz',
    age: 37,
    phoneNumber: 982490823,
    email: 'beatriz@hotmail.com',
    location: 'Spain',
  })
  await beatriz.setPassword('test')
  await beatriz.save()

  const alex = new User({
    name: 'Alex',
    age: 48,
    phoneNumber: 4395284756,
    email: 'alex@hotmail.com',
    location: 'England',
  })
  await alex.setPassword('test')
  await alex.save()

  const jasemin = new User({
    name: 'Jasemin',
    age: 23,
    phoneNumber: 8745284734,
    email: 'jasemin@gmail.com',
    location: 'Holland',
  })
  await jasemin.setPassword('test')
  await jasemin.save()

  const karen = new User({
    name: 'Karen',
    age: 48,
    phoneNumber: 3975284756,
    email: 'karen@gmail.com',
    location: 'Israel',
  })
  await karen.setPassword('test')
  await karen.save()

  const hermann = new User({
    name: 'Hermann',
    age: 54,
    phoneNumber: 2075284756,
    email: 'hermann@gmail.com',
    location: 'Germany',
  })
  await hermann.setPassword('test')
  await hermann.save()

  const wendy = new User({
    name: 'Wendy',
    age: 22,
    phoneNumber: 12975284756,
    email: 'nadine@gmail.com',
    location: 'USA',
  })
  await wendy.setPassword('test')
  await wendy.save()
  // tourevent

  const Cervantes = await TourEvent.create({
    name: 'Cervantes - Knights and The Ottoman Palace!',
    tour: 'Live Tour',
    location: 'Madrid',
    date: '23 October 2021',
    time: '19:00pm',
    duration: '2 Hours',
  })

  const maryEdward = await TalkEvent.create({
    name: "Miss Mary Edward's Secret Love",
    tour: 'Online Talk',
    date: '18 September 2021',
    time: '19:00pm',
    duration: '60 minutes',
  })

  const Rembrandt = await TalkEvent.create({
    name: 'The Anatomy Lesson - Rembrandt',
    talk: 'Online Talk',
    date: '14 October 2021',
    time: '19:00pm',
    duration: '60 minutes',
  })

  //photos
  const madridPhoto = await Photo.create({ filename: 'madrid.jpg' })
  const maryEdwardPhoto = await Photo.create({ filename: 'maryedward.jpg' })
  const rembrandtPhoto = await Photo.create({ filename: 'rembrandt.jpg' })

  await jasemin.likePhoto(madridPhoto)
  await wendy.likePhoto(rembrandtPhoto)
  await karen.likePhoto(maryEdwardPhoto)

  await madridPhoto.save()
  await rembrandtPhoto.save()
  await maryEdwardPhoto.save()

  await jasemin.attendTourEvent(Cervantes)
  // alex.interestTourEvent(Cervantes)
  await alex.payForTourEvent(Cervantes)
  await karen.likeTourEvent(Cervantes)
  await hermann.likeTourEvent(maryEdward)
  await jonathan.commentTourEvent(maryEdward, 'The topic is very interesting.')
  await wendy.attendTourEvent(maryEdward)

  await jonathan.attendTourEvent(Rembrandt)
  await beatriz.commentTourEvent(Rembrandt, 'I will attend this talk. I am looking forward to the event!')

  console.log(alex)
  console.log(karen.likeTourEvent)

  // jonathan.commented(Rembrandt, 'I will attend this talk. I am looking forward to the event!')
  // beatriz.commented(Rembrandt, 'The topic is very interesting. I am sure we will learn await things about Rembrandt.')

  // console.log(karen, karen.attendTourEvent[0].attendedBy)
  router.post('/:userId/adds', async (req, res) => {
    const user = await User.findById(req.params.userId)
    const photo = await Photo.findById(req.body.photoId)

    await user.addPhoto(photo)
    res.sendStatus(200)
  })

  console.log(jasemin)
  res.sendStatus(200)

  router.get('/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId)

    if (user) {
      res.render('user', { user })
    } else {
      res.sendStatus(404)
    }
  })
})

module.exports = router
