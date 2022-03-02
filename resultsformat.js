let ranks = ["RyanQ.", "VarinS.", "VibhasS.", "SitaV.", "AnanyaK.", "BrandonL.", "DerekV.", "ArunaG.", "SylvanC.", "IshanshK.", "CharlieK.", "MeganC.", "JayW.", "ShiraS.", "BharatS.", "CalebC.", "ArjunA.", "BellaL.", "JayB.", "MiguelM.", "Chi-RayC.", "SimonC.", "AngelicaZ.", "RobertB.", "VivekP.", "ZavierM.", "SophiaD.", "SophieF.", "MadelineW.", "QuinnC.", "AinselF.", "RennB.", "PoojaP.", "AlexanderP.", "AmartyaI.", "LejoiR.", "ZaeemH.", "SorenW.", "SharanyaN.", "KingstonB.", "AryanP.", "ChrisL.", "JohnF.", "GregoryG.", "AmeeraH.", "MatthiasF.", "PeterW.", "DianaS.", "NihalV.", "ArjunC.", "RowanC.", "AdamS.", "JasonB."];
let scores = [150, 148, 145, 143, 140, 138, 135, 133, 130, 128, 125, 123, 120, 118, 115, 113, 110, 108, 105, 103, 100, 98, 95, 93, 90, 88, 85, 83, 80, 78, 75, 73, 70, 68, 65, 63, 60, 58, 55, 53, 50, 48, 45, 43, 40, 38, 35, 33, 30, 28, 25, 23, 20];
let originalRanks = ranks;
let newRanks = ["CharlieK.", "AlexanderP.", "ArjunC.", "RobertB.", "SimonC.", "BrandonL.", "VibhasS.", "IshanshK.", "AnanyaK.", "MiguelM.", "QuinnC.", "PeterW.", "SophiaD.", "VarinS.", "BellaL.", "ArjunA.", "BriannaB.", "Chi-RayC.", "JayW.", "RyanQ.", "AryanP.", "DerekV.", "ArunaG.", "SylvanC.", "DianaS.", "AngelicaZ.", "JayB.", "ZaeemH.", "MatthiasF.", "GregoryG.", "VivekP.", "MeganC.", "SorenW.", "ShiraS.", "MadelineW.", "BharatS.", "AinselF.", "SophieF.", "PoojaP.", "AmartyaI.", "ZavierM.", "SitaV.", "RennB.", "NihalV.", "KingstonB.", "AdamS.", "JohnF.", "RowanC."]
newScores = new Array;
//create newscores
for (let i = 0; i < newRanks.length; i++) {
    newScores.push(150 - (Math.floor(i * (130 / (newRanks.length - 1)))));
}
//tally scores
for (let i = 0; i < newRanks.length; i++) {
    let currentContestant = (name) => name == newRanks[i];
    if (ranks.includes(newRanks[i])) {
        scores[ranks.findIndex(currentContestant)] += newScores[i];
    }
}
// sort scores and players
function isNotSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            return true;
        }
    }
    return false;
}
function sortPass() {
    for (let i = 0; i < scores.length - 1; i++) {
        if (scores[i] < scores[i + 1]) {
            let temp = scores[i];
            scores[i] = scores[i + 1];
            scores[i + 1] = temp;
            let t2mp = ranks[i];
            ranks[i] = ranks[i + 1];
            ranks[i + 1] = t2mp;
        }
    }
}
while (isNotSorted(scores) == true) {
    sortPass();
}

// let copyScores = [...scores];
// scores = scores.sort((a, b) => b-a);
// ranks = ranks.sort((a, b) => {
//     return copyScores[ranks.indexOf(b)] - copyScores[ranks.indexOf(a)];
// })

//format nicely
for (let i = 0; i < ranks.length; i++) {
    let rankSplit = ranks[i].split("")
    let period = (character) => character == ".";
    rankSplit.splice(rankSplit.findIndex(period) - 1, 0, " ");
    ranks[i] = rankSplit.join("")
}
let ranksFormat = ranks.join("\n");
console.log(ranksFormat);
let scoresFormat = scores.join("\n")
console.log(scoresFormat);

//create percentiles
let percentiles = [1.0000, 0.9808, 0.9615, 0.9423, 0.9231, 0.9038, 0.8846, 0.8654, 0.8462, 0.8269, 0.8077, 0.7885, 0.7692, 0.7500, 0.7308, 0.7115, 0.6923, 0.6731, 0.6538, 0.6346, 0.6154, 0.5962, 0.5769, 0.5577, 0.5385, 0.5192, 0.5000, 0.4808, 0.4615, 0.4423, 0.4231, 0.4038, 0.3846, 0.3654, 0.3462, 0.3269, 0.3077, 0.2885, 0.2692, 0.2500, 0.2308, 0.2115, 0.1923, 0.1731, 0.1538, 0.1346, 0.1154, 0.0962, 0.0769, 0.0577, 0.0385, 0.0192, 0.0000]
newPercentiles = new Array;
for (let i = 0; i < newRanks.length; i++) {
    newPercentiles.push(1 - ((i * (1 / (newRanks.length - 1)))));
}
// console.log(newPercentiles.join("\n"))

// for (let i = 0; i<originalRanks.length;i++){
//     let currentContestantP = (nameP) => nameP == originalRanks[i];

// }