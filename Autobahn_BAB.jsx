var myAutobahn = prompt('Bitte Autobahnnummer eingeben A', "");
var myCountry = prompt('Bitte Land eingeben in dem nach der Autobahn ' + 'A' + myAutobahn + ' gesucht werden soll?', "Germany");
//alert('A ' + myAutobahn);

geolayers3.addToBrowser({
    type:"overpass",
    query:'[out:json][timeout:60];{{geocodeArea: \'Germany\'}}->.searchArea;(nwr["highway"="motorway"][ref="A 4"](area.searchArea););out body;>;out skel qt;'
})
