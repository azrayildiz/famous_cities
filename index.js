const Person = require("./person");
const Photo = require("./photo");

const azra = new Person("azra", 43);
const karen = new Person("karen", 48);
const bedo = new Person("bedo", 17);
const jonathan = new Person("jonathan", 75);


const berlinPhoto = new Photo("berlin.jpg");
const munichPhoto = new Photo("koeln.jpg");

jonathan.addPhoto(berlinPhoto); 
jonathan.addPhoto(munichPhoto);

jonathan.bio = 
"An awesome guy who has seen it all, and now sharing them all with you.";

karen.likePhoto(berlinPhoto);
jonathan.addPhoto(berlinPhoto);
azra.likePhoto(berlinPhoto);
bedo.addPhoto(berlinPhoto);


//console.log(jonathan.profile); 



console.log(jonathan.profile); 

