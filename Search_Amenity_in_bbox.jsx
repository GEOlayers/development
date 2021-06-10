var myAmenity = prompt('Nach was wird gesucht?', "");

// var myCountry = prompt('Bitte Land eingeben in dem nach der Autobahn ' + 'A' + myAutobahn + ' gesucht werden soll?', "Deutschland");

geolayers3.addToBrowser({
    type:"overpass",
    query:'[out:json][timeout:50];(nwr["amenity"="' + myAmenity + '"]({{bbox}}););out body;>;out skel qt;'
})  