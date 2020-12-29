// object wind
const wind = {
    strength: ['Weak','Average','Strong'],
    direction: ['North','East','South','West'],
};
// testing object wind
// console.log(wind.strength[2]);

const rain = {
    timeOfDay: ['this morning','this afternoon','this evening','tonight'],
    percipitation() {
        return Math.floor((Math.random() * 10) * 10);
    }
};
// testing method
// console.log(rain.percipitation());

 const warningMessage = {
    good: 'Hope you enjoy your day!',
    rain: 'Better take a umbrella!',
    bad: 'Stay home if possible!'
 };

//1st sentance   
const firstPhrase = () => {
    const greeting = ['Hello user!','Good Morning!','Heya!','Hi!!!'];
    const weather = {
        sky: ['clouded','sunny','rainy',],
        frequency: ['mostly','fairly','all day','possibly']
    };
    let greet = greeting[Math.floor(Math.random() * 4)]; // returns random greeting item
    // console.log(greet);
    let skyWeather = weather.sky[Math.floor(Math.random() * 3)];
    let freqWeather = weather.frequency[Math.floor(Math.random() * 4)];
    
    return `${greet} Today the weather is gonna be ${freqWeather} ${skyWeather}.`
};
// console.log(firstPhrase()); // returns: "{greeting}! Today the weather is gonna be {frequency} {sky}"



/*  2nd
The wind will blow {north} {weak} //
3rd
There is a probability of {30}% {in the afternoon}
4th
Hope you enjoin your day! || Better take a umbrella! || Stay home if possible! 


*/