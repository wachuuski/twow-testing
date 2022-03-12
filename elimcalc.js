function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function eliminate(contestants,zeropass,hundredpass){
// create three arrays, one for the players in the competition
// one for their respective point thresholds
// and one for all scores available in the round
// and then two empty buckets that we'll throw the results into
    let players = new Array;
    let threshold = new Array;
    let roundscores = new Array;
    let eliminated = new Array;
    let alive = new Array;
    for (let i = 0; i<contestants; i++){
        players.push(i+1);
        threshold.push((10 + Math.pow(30, (1.08/contestants)*i))); 
        roundscores.push((100/(contestants-1))*i);
    }
    console.log(threshold);
// shuffle roundscores so the next step assigns scores randomly (i could have done this better)
    shuffle(roundscores);
// now compare each player's score to their threshold-- if it's lower, eliminate them, if it's higher, keep them in
    for (let i = 0; i<contestants; i++){
        if (roundscores[i]<threshold[i]){
            eliminated.push(players[i]);
        }
        else {
            alive.push(players[i]);
        }
    }
    // console.log(players);
    // console.log(threshold);
    // console.log(roundscores);
    let elimRate = eliminated.length/contestants;
    // console.log("elimination rate is: " + elimRate*100 + "%");
    return elimRate;

}
// literally just run elim x amount of times have fun choosing x
// oh yea then average the elim rates and output that that's literally it
function runAverageRate (iterations){
    let archiveRates = new Array;
    for (let i = 0; i<=iterations; i++){
        let testCase = eliminate (57,.1,.4);
        archiveRates.push(testCase);
    }
    let rateSum = 0
    for (let i = 0; i<archiveRates.length; i++){
        rateSum = rateSum + archiveRates[i];
    }
    console.log("The overall average rate for this setup using " + iterations + " iterations was: " + rateSum*100/archiveRates.length + "%");
}
//runAverageRate (57);
eliminate(57,.1,.4);