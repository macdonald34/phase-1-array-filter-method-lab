function findMatching(drivers, name){
    return drivers.filter(drivers=>drivers.toLowerCase()===name.toLowerCase());
}
function fuzzyMatch(drivers,Initials){
    return drivers.filter(drivers=>drivers.startsWith(Initials));
}
function matchName(drivers,name){
    return drivers.filter(drivers=>drivers.name===name);
}
