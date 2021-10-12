// const year = new Date()
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const talkEventSchema = new mongoose.Schema({
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
    required: true,
  },
  price: {
    type: Number,
  },
  likedBy: [],
  comments: [],
  attends: [],
  saved: [],
  payments: [
    {
      type: String,
      required: true,
    },
  ],
  cancelledBy: [
    {
      type: String,
    },
  ],
})
class TalkEvent {
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
}

talkEventSchema.loadClass(TalkEvent)
talkEventSchema.plugin(autopopulate)

module.exports = mongoose.model('TalkEvent', talkEventSchema)
