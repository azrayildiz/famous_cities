// eslint-disable-next-line no-unused-vars
const color = require('colors')

class User {
  constructor(name, age, phoneNumber, email) {
    this.name = name
    this.age = age
    this.phoneNumber = phoneNumber
    this.email = email
    this.photos = []
    this.interestIn = []
    this.commentOn = []
    this.likes = []
    this.saved = []
  }

  // location check all files
  attendTourEvent(tourevent) {
    tourevent.attended.push(this.name.brightRed.bold) // added colors 07.09.2021
    tourevent.payments.push(this.name) // use push //  tourevent.attended.push(this.name)
    tourevent.cancelledBy.push(this.name) // tourevent.attended.push(this.name)
  }

  likeTourEvent(tourevent) {
    // like
    this.likes.push(tourevent) // ??? problem??
    tourevent.likedBy.push(this) // ? Problem???
  }

  saveTourEvent(tourevent) {
    // save
    // changed
    tourevent.saved.push(this.name)
    tourevent.interestedBy.push(this.name)
  }
  // ask speakers -  question array

  commentTourEvent(tourevent, comment) {
    // comment

    tourevent.comments.push(this) // tourEvent
  }

  payForTourEvent(tourevent, user, time) {
    // pay simple name
    tourevent.payments.push({ user, time })
  }

  // Talk Event

  liveTalkEvent(livetalk) {
    //
    livetalk.attendedBy.push(this)
  }

  get profile() {
    return `${this.name.rainbow} has ${this.photos.length} photos.` // added rainbow
  }
}

module.exports = User
