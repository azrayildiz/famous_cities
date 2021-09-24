class Person {
    constructor(name, age) {
        this.name = name ;
        this.age = age;
        this.bio = "";
        this.photos = [];
        this.likes = []; 
    }

    greet(person) {
        console.log(`${person.name} is one of the most famous person in the world.`)
    }

    addPhoto(photo) {
        this.photos.push(photo);
    }

    likePhoto(photo) {
      this.likes.push(photo);
      photo.likedBy.push(this); 
    }

    get profile() {
        return `
        # ${this.name}  (${this.age})
        Bio: ${this.bio}
        
        ## Photos (${this.photos.length})

        ${ this.photos
            .map((photo) => {
            return `### ${photo.filename}
           ${photo.likedBy.map((person) => person.name).join(", ")} 
            `;
        }) 
        .join("\n")}
        `;
    }

    set profile(newValue) {
        throw new Error(`Profile is only a getter. You can't override it.`) 
    }
}
module.exports = Person; 

