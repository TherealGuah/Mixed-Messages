
 const warningMessage = {
    good: 'Hope you enjoy your day!',
    rain: 'Better take a umbrella!',
    bad: 'Stay home if possible!'
 };

//1st sentance 
const greeting = ['Hello user!','Good Morning!','Heya!','Hi!!!'];
    const weather = {
        sky: ['clouded','sunny','rainy',],
        frequency: ['mostly','fairly','all day','possibly']
    };
    let greet = greeting[Math.floor(Math.random() * 4)]; // returns random greeting item
    // console.log(greet);
    let skyWeather = weather.sky[Math.floor(Math.random() * 3)];
    let freqWeather = weather.frequency[Math.floor(Math.random() * 4)];  

const firstPhrase = () => {
    return `${greet} Today the weather is gonna be ${freqWeather} ${skyWeather}.`
};
// console.log(firstPhrase()); // returns: "{greeting}! Today the weather is gonna be {frequency} {sky}"

// 2nd sentance
const wind = {
    strength: ['weak','average','strong'],
    direction: ['North','East','South','West'],
};
let direction = wind.direction[Math.floor(Math.random() * 4)];
let strength = wind.strength[Math.floor(Math.random() * 3)];
const windCondition = () => {
    return `The wind will blow ${direction} ${strength}.`
};
 // console.log(windCondition()); // returns: The wind will blow {north} {weak}

// 3rd
const percipitation = () => {
    const rain = {
        timeOfDay: ['this morning','this afternoon','this evening','tonight'],
        percipitation() {
            return Math.floor((Math.random() * 10) * 10);
        }
    };
    let timeOfDay = rain.timeOfDay[Math.floor(Math.random() * 4)];
    const chanceOfRain = rain.percipitation();
    if (skyWeather === 'sunny' || chanceOfRain === 0) {
        return `No rain is predicted for today!`;
    } else {
    return `There is ${chanceOfRain}% change of rain ${timeOfDay}.`;
    }
};
// console.log(percipitation()); // returns string dependent of the selection of the first with probability of rain
// 4th
const dayRecommendation = () => {
    let recommendation = '';
    if  (skyWeather === 'rainy' && strength !== 'strong') {
        recommendation = 'Better take an umbrella!';
    } else if (skyWeather === 'rainy' && strength === 'strong') {
        recommendation = 'Stay home if possible!';
    } else {
        recommendation = 'Hope you enjoy your day!';
    }
    return recommendation;
};
// console.log(dayRecommendation()); // returns: one possible string depending on the weather type.

// ASCII art
const clouded = () => {
    console.log("                _                                     ");
    console.log("              (`  ).                   _              ");
    console.log("             (     ).              .:(`  )`.          ");
    console.log(")           _(       '`.          :(   .    )         ");
    console.log("        .=(`(      .   )     .--  `.  (    ) )        ");
    console.log("       ((    (..__.:'-'   .+(   )   ` _`  ) )         ");
    console.log("`.     `(       ) )       (   .  )     (   )  ._      ");
    console.log("  )      ` __.:'   )     (   (   ))     `-'.-(`  )    ");
    console.log(")  )  ( )       --'       `- __.'         :(      ))  ");
    console.log(".-'  (_.'          .')                    `(    )  )) ");
    console.log("                  (_  )                     ` __.:'   ");
    console.log("                                                      ");
    console.log("--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.-a:f--");
};

const sunny = () => {
    console.log("           |");
    console.log("    \\     |     /");
    console.log("      \\       /");
    console.log("         ,d8b,           .,");
    console.log(" (')-\")_ 88888 ---   ;';'  ';'.");
    console.log("('-  (. ')98P'      ';.,;    ,;");
    console.log(" '-.(PjP)'    \\       '.';.'");
    console.log("           |    \\");
    console.log("           |");
};

const rainy = () => {
    console.log("                                 000      00");
    console.log("                           0000000   0000");
    console.log("              0      00  00000000000000000");
    console.log("            0000 0  000000000000000000000000       0");
    console.log("         000000000000000000000000000000000000000 000");
    console.log("        0000000000000000000000000000000000000000000000");
    console.log("    000000000000000000000000000000000000000000000000");
    console.log("00000000000000000000000000000000000000000000000000000000");
    console.log("              / / / / / / / / / / / / / / / /");
    console.log("            / / / / / / / / / / / / / / /");
    console.log("            / / / / / / / / / / / / / / /");
    console.log("          / / / / / / / / / / / / / /");
    console.log("          / / / / / / / / / / / / /");
    console.log("        / / / / / / / / / / / /");
    console.log("        / / / / / / / / / /");

};



// function to bring everything together.
const weatherForecast = () => {
    // 1st
    console.log(firstPhrase());
    // 2nd
    console.log(windCondition());
    // 3rd
    console.log(percipitation());
    // ASCII art
    switch (skyWeather) {
        case 'sunny':
            sunny();
            break;
        case 'rainy':
            rainy();
            break;
        case 'clouded':
            clouded();
            break;
        default:
            console.log(']------------------------------------------------------[');
            break;
    };
    // recommendation
    console.log(dayRecommendation());
};

weatherForecast();
