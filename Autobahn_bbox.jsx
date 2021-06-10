var myAutobahn = prompt('Bitte Autobahnnummer eingeben A', "");

geolayers3.addToBrowser({
    type:"overpass",
    query:'[out:json][timeout:25];(node["highway"="motorway"][ref="A ' + myAutobahn + '"]({{bbox}});way["highway"="motorway"][ref="A ' + myAutobahn + '"]({{bbox}});relation["highway"="motorway"][ref="A ' + myAutobahn + '"]({{bbox}}););out body;>;out skel qt;'
})
