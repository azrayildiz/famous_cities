// eslint-disable-next-line no-unused-vars
const color = require('colors')
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },

  // password: String,

  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
      autopopulate: true,
    },
  ],

  interestIn: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TourEvent',
    },
  ],
  commentOn: [],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TourEvent',
    },
  ],
  saved: [],
})

class User {
  async likePhoto(photo) {
    this.likes.push(photo)
    photo.likedBy.push(this)

    await photo.save()
    await this.save()
  }
  // location check all files
  async likeTourEvent(tourevent) {
    // like
    tourevent.likes.push(this.name)
    tourevent.likedBy.push(this)

    await tourevent.save()
    await this.save()
  }
  async commentTourEvent(tourevent, comment) {
    // comment

    tourevent.comments.push(this) // tourEvent

    await tourevent.save()
  }
  async attendTourEvent(tourevent) {
    tourevent.attended.push(this.name.brightRed.bold)
    tourevent.payments.push(this.name)
    tourevent.cancelledBy.push(this.name)

    await tourevent.save()
    await this.save()
  }

  async saveTourEvent(tourevent) {
    tourevent.saved.push(this.name)
    tourevent.interestedBy.push(this.name)

    await tourevent.save()
    await this.save()
  }
  // ask speakers -  question array
  async payForTourEvent(tourevent, user, time) {
    // pay simple name
    tourevent.payments.push({ user, time })

    await tourevent.save()
  }

  async cancelTourEvent(tourevent, user, time) {
    tourevent.cancelledBy.push({ user, time })

    await tourevent.save()
  }

  // Talk Event

  async liveTalkEvent(livetalk) {
    //
    livetalk.attendedBy.push(this)

    await livetalk.save()
  }

  get profile() {
    return `${this.name.rainbow} has ${this.photos.length} photos.` // added rainbow
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
