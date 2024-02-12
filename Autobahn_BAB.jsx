var myAutobahn = prompt('Bitte Autobahnnummer eingeben A', "");
var myCountry = prompt('Bitte Land eingeben in dem nach der Autobahn ' + 'A' + myAutobahn + ' gesucht werden soll?', "Germany");
myCountry = "\'" + myCountry + "\'";
alert("so sieht das jetzt aus: " + myCountry);
alert('A ' + myAutobahn);

geolayers3.addToBrowser({
    type:"overpass",
    // query:'[out:json][timeout:25];{{geocodeArea:' + myCountry + '}}->.searchArea;(node["highway"="motorway"][ref="A ' + myAutobahn + '"](area.searchArea);way["highway"="motorway"][ref="A ' + myAutobahn + '"](area.searchArea);relation["highway"="motorway"][ref="A ' + myAutobahn + '"](area.searchArea););out body;>;out skel qt;'
    query:'[out:json][timeout:60];{{geocodeArea:' + myCountry + '}}->.searchArea;(nwr["highway"="motorway"][ref="A "' + myAutobahn + '](area.searchArea););out body;>;out skel qt;'
})
