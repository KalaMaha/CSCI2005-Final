var map;
var geocoder;
var marker;
var locations = [];
locations = JSON.parse(window.localStorage.getItem("treeData"));

function initMap() {
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(44.945706, -93.182121);
    var mapOptions = {
        zoom: 8,
        center: latlng
    }    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    if (locations != null && locations.length > 0)
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'images/m' });

    map.addListener('click', function (e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
    map.addListener('center_changed', function () {
        window.setTimeout(function () {
            if (marker != undefined)
            map.panTo(marker.getPosition());
        }, 4500);
    });
}

function placeMarkerAndPanTo(latLng, map) {
    if (marker != null) {
        marker.setPosition(latLng);
    } else {
    var image = "images/tree icon.png";
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: latLng,
        title: "Drag me!",
        icon: image
        });
    }
    map.panTo(latLng);
    marker.addListener('click', function () {
        map.setZoom(13);
        map.setCenter(marker.getPosition());
    });
}

function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(12);
            if (marker != null) {
                marker.setPosition(results[0].geometry.location);
            } else {
                var image = "images/tree icon.png";
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: results[0].geometry.location,
                    title: "Drag me!",
                    icon: image
                });
            }
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
        marker.addListener('click', function () {
            map.setZoom(13);
            map.setCenter(marker.getPosition());
        });
    });
}

function recordMarker() {
    var mPoint = marker.getPosition();
    var mPoints = [];
    mPoints.push(mPoint);
    var storage = window.localStorage.getItem("treeData");
    if (storage != null && storage.length > 0) {
        var arr = JSON.parse(storage);
        arr.push(mPoint);
        window.localStorage.setItem("treeData", JSON.stringify(arr));
    } else {
        window.localStorage.setItem("treeData", JSON.stringify(mPoints));
    }    
    alert("Location Recorded")
    location.reload();
}

function deleteMarkers() {
    locations = [];
    window.localStorage.setItem("treeData", JSON.stringify(locations));
    location.reload();
}

function stateView() {
    map.setZoom(7);
    if (marker != undefined)
    map.setCenter(marker.getPosition());
}

function cityView() {
    map.setZoom(11);
    if (marker != undefined)
    map.setCenter(marker.getPosition());
}

//function markersView() {
//    var latlng = locations;
//    map.setCenter(latlng);
//}