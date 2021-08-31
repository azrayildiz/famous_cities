class City {
    constructor(city, museum) {
        this.city = city 
        this.museum = museum 
        this.photos = []
        this.likes = []
    }

    definition(cities) {
        console.log(`${cities.city} is one of the most famous cities in the world.`)
    }

    addPhoto(photo) {
        this.photos.push(photo)
    }

    likePhoto(photo) {
        this.likes.push(photo)
        photo.likedBy.push(this)
    }
}

class Photo {
    constructor(filename) {
        this.filename = filename
        this.likedBy = []
    }
}


const berlin = new City('Berlin', 'Pergamon Museum')
const london = new City('London', 'British Museum')
const istanbul = new City('Istanbul', 'Hagia Sophia')
const madrid = new City('Madrid', 'Prado Museum')
const newyork = new City('New York', 'Metropolitan Museum of Art')

const photo = new Photo('berlin.jpg')
berlin.addPhoto(photo)
istanbul.likePhoto(photo)
london.likePhoto(photo)


console.log(berlin.likes[0].likedBy[0].likes[0].filename == berlin.likes[0].filename, berlin.likes[0].filename == istanbul.photos[0].filename)

