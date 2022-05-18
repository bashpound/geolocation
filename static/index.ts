function drawMap(latitude:number, longitude:number): void {
  const current_position = { lat: latitude, lng: longitude };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 11,
      center: current_position,

    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: current_position,
    map: map,
  });
}

// Initialize and add the map
  function processLocation(position:any):void {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    if (latitude) {
      drawMap(latitude, longitude)
    }
    
    
 }

 function errorHandler(err:any):void {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

 function initMap() {

    if(navigator.geolocation) {
       const options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(processLocation, errorHandler, options);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
 }




                       