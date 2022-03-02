let recieved = ["SimonCapper","SreeVemuri","ArjunAri","RohamArbabi","RafaelFrans","AaryujBhushan","Purveshkhatri","AnveshaKhatri","AnjaliAmbati","ViditKwatra","ChristianDubiel","SophieFan","VarinSikka","EvanPerry","VishnutejasMummidi","SeeratDang","AdamShams","ZorezSyed","ImranKhan","VikramSinha","AnanyaKamath","RyanQuinlivan","GregoryGavi","CynthiaLitchi","LaurenWang"]
let members = ['AdamShams','AditiJain','AnanyaKamath','AnjaliAmbati','AnveshaKhatri','ArjunAri','CharlieKunz','EvanPerry','GregoryGavi','ImranKhan','JackKolecke','KingstonBaynard','KunaalIyer','LaurenWang','MiguelMasliah','NihalVerghese','PoojaPunn','RafaelFranz','RaineMacAskill','RohamArbabi','RyanQuinlivan','SebastianDubiel','SeeratDang','SophieFan','SreeVemuri','VarinSikka','ViditKwatra','VikramSinha','VishnutejasMummidi','ZavierMandhro','ZorezSyed','ChristianDubiel','CynthiaLitchi','DollyDhariwal','DonMacAskill','GregPerry','KimQuail']
for (let j = 0; j<members.length; j++){
    if(recieved.includes(members[j])){
        members[j]="";
    }
}
function notBlank(word){
    return word != "";
}
let newMembers = members.filter(notBlank);
console.log(newMembers);