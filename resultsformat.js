let ranks = ["VibhasS.","BrandonL.","CharlieK.","AnanyaK.","VarinS.","IshanshK.","RyanQ.","SimonC.","RobertB.","MiguelM.","DerekV.","ArunaG.","JayW.","BellaL.","ArjunA.","SylvanC.","AlexanderP.","Chi-RayC.","SophiaD.","QuinnC.","MeganC.","JayB.","SitaV.","ShiraS.","AngelicaZ.","ArjunC.","BharatS.","VivekP.","PeterW.","AryanP.","MadelineW.","ZaeemH.","SophieF.","ZavierM.","AinselF.","SorenW.","DianaS.","PoojaP.","CalebC.","GregoryG.","MatthiasF.","AmartyaI.","RennB.","KingstonB.","JohnF.","LejoiR.","NihalV.","SharanyaN.","AdamS.","ChrisL.","RowanC.","AmeeraH.","JasonB.","AdhyaK.","ShreyaA.","SebastianD."];
let scores = [279,275,275,268,263,259,248,237,235,229,227,223,221,220,219,217,216,203,202,201,188,184,180,177,176,173,169,158,155,145,136,136,131,128,126,120,117,115,113,113,111,108,107,82,68,63,62,55,49,48,45,40,20,0,0,0];
let originalRanks = ranks;
let newRanks = ["ArjunC.","VibhasS.","RobertB.","VarinS.","PeterW.","AdamS.","BriannaB.","VivekP.","SimonC.","SylvanC.","RyanQ.","JayB.","MatthiasF.","MadelineW.","AinselF.","AmeeraH.","ArjunA.","SebastianD.","MiguelM.","BrandonL.","SitaV.","DerekV.","AlexanderP.","ZavierM.","IshanshK.","SharanyaN.","CharlieK.","JohnF.","CalebC.","KingstonB.","SorenW.","AnanyaK.","DianaS.","GregoryG.","AryanP.","MeganC.","JayW.","RowanC.","BellaL.","AngelicaZ.","SophieF.","JasonB.","ZaeemH.","ShiraS.","QuinnC.","AdhyaK.","NihalV.","RennB.","BharatS.","ShreyaA."]
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
let percentiles = [0.9169,0.9038,0.8987,0.8764,0.8521,0.839,0.7979,0.7555,0.7469,0.7216,0.7189,0.7115,0.6986,0.6931,0.6876,0.6866,0.6784,0.6721,0.6596,0.6268,0.6223,0.6148,0.5644,0.5503,0.535,0.5239,0.5225,0.5076,0.493,0.4501,0.4407,0.4026,0.3691,0.3666,0.3468,0.3341,0.3286,0.3269,0.3038,0.2928,0.2881,0.278,0.2694,0.2692,0.2582,0.2551,0.2115,0.1569,0.1538,0.1068,0.081,0.0309,0.0192,0]
newPercentiles = new Array;
for (let i = 0; i < newRanks.length; i++) {
    newPercentiles.push(1 - ((i * (1 / (newRanks.length - 1)))));
}
console.log(newPercentiles.join("\n"))

// for (let i = 0; i<originalRanks.length;i++){
//     let currentContestantP = (nameP) => nameP == originalRanks[i];

// }