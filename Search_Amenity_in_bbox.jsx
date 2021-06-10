var myAmenity = prompt('Nach was wird gesucht?', "");


geolayers3.addToBrowser({
    type:"overpass",
    query:'[out:json][timeout:50];(nwr["amenity"="' + myAmenity + '"]({{bbox}}););out body;>;out skel qt;'
})  
