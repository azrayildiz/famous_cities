class TalkEvent {
  constructor(filename) {
    this.filename = filename
    this.likedBy = []
    this.comments = []
    this.attended = []
    this.payments = []
    this.cancelledBy = []
  }
}

module.exports = TalkEvent
