const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition(
        (position)=>{
            const {latitude, longitude} = position.coords;
            socket.emit("send-location", {latitude, longitude});
        },
        (error)=>{
            console.error(error);   
        },
        {
            enableHighAccuracy: true,
            timeout:5000,
            maximumAge: 0
        }
    );
}
// Delhi, India (approx.) - [28.471106,77.255859] 
const map = L.map('map').setView([0,0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution : "Ranit Saha - Coderooz"
}).addTo(map);

const markers = {};
socket.on("receive-location", (data)=>{
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude], 16);
    if (markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id]= L.marker([latitude, longitude]).addTo(map);
    }
})


socket.on("user-disconnect", (id)=>{
    if (markers[id]){
        map.removeLayer(markers[id]);
        console.log("user disconnected".markers[id]);
        delete markers[id];
    }
})
