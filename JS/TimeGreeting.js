// A simple function for generating time-based greetings.
// https://twitter.com/nthnluu/status/1277283668948480000?s=21

function timeGreeting() {
    const myDate = new Date();
    const hrs = myDate.getHours();
    let greet = {greeting: '', emoji: ''};

    if (hrs < 12) {
        greet.greeting = 'Good morning';
        greet.emoji = '☀️️';
    } else if (hrs >= 12 && hrs <= 17) {
        greet.greeting = 'Good afternoon';
        greet.emoji = '👋';
    } else if (hrs >= 17 && hrs <= 24) {
        greet.greeting = 'Good evening';
        greet.emoji = '🌌';
    }

    return greet

}
