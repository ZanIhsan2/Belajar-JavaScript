// Object in JavaScript:

var movie = {
name : 'Tanah-Siapa',
actor: 'Angelina',
director : 'rzn',
musicdirector : 'pong'
};

// Object contains properties

// Property is key value pair


var movie1 = 'Tanah-Siapa$Angelina$rzn$pong'

var movie2 = ['Tanah-Siapa', 'Angelina', 'rzn', 'pong']

console.log('String: ' +movie1['$'](0));

console.log('Array: ' +movie2[1]);

console.log('Objeck: ' +movie.name);