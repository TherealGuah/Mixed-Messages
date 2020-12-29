// object wind
const wind = {
    strength: ['Weak','Average','Strong'],
    direction: ['North','East','South','West'],
};
// testing object wind
// console.log(wind.strength[2]);

let greeting = ['Hello user!','Good Morning!','Heya!','Hi!!!'];

const rain = {
    timeOfDay: ['this morning','this afternoon','this evening','tonight'],
    percipitation() {
        return Math.floor((Math.random() * 10) * 10);
    }
};
// testing method
// console.log(rain.percipitation());

const weather = {
    sun: ['clouded','sunny','rainy',],
    frequancy: ['mostly','fairly','all day','possibly']
};
 const warningMessage = {
    good: 'Hope you enjoy your day!',
    rain: 'Better take a umbrella!',
    bad: 'Stay home if possible!'
 };









 
// message format
/* 
1st sentance    
{greeting}! Today the weather is gonna be {mostly} {clouded} 
 2nd
The wind will blow {north} {weak} //
3rd
There is a probability of {30}% {in the afternoon}
4th
Hope you enjoin your day! || Better take a umbrella! || Stay home if possible! 


*/