class TourEvent {
  constructor(tourName, eventDate, location, price) {
    this.tourName = tourName
    this.eventDate = eventDate
    this.location = location
    this.price = price
    this.likedBy = []
    this.attended = [] // created
    this.payments = []
    this.cancelledBy = []
    this.comments = []
  }

  // Event class extend that class
  // event.js extend from event.js to talkEvent speaker Array
  // Guide name
  // speaker

  // for every event new eventDate???

  // attendants  Method

  get profile() {
    return `${this.tourName} will take place in ${this.location} on (${this.eventDate})`
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter.. you can't override it with ${newValue}`)
  }
}

module.exports = TourEvent
