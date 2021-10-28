// const year = new Date()

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const tourEventSchema = new mongoose.Schema({
  tourName: [
    {
      type: String,
      required: true,
    },
  ],
  eventDate: {
    type: Number,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  likedBy: [],
  comments: [],
  attendees: [],
  saved: [],
  payments: [
    {
      type: Object,
      required: true,
    },
  ],
  cancelledBy: [
    {
      type: String,
    },
  ],
})

// --------------------------------

class TourEvent {
  async addPhoto(photo) {
    this.photo.push(photo)
    await this.save()
  }
  async addInfo(info) {
    this.info = info
    await this.save()
  }
  async addDate(date) {
    this.date.push(date)

    await this.save()
  }
  // get profile() {
  //   return `${this.tourName} will take place in ${this.location} on (${this.eventDate})`
  // }
  // set profile(newValue) {
  //   throw new Error(`profile is only a getter.. you can't override it with ${newValue}`)
  // }
}

tourEventSchema.loadClass(TourEvent)
tourEventSchema.plugin(autopopulate)

// --------------------------------

// Event class extend that class
// event.js extend from event.js to talkEvent speaker Array
// Guide name
// speaker

// for every event new eventDate???

// attendants  Method

module.exports = mongoose.model('TourEvent', tourEventSchema)
