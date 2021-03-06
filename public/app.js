const initialize = function(){

  const container = document.getElementById('main-map');
  const center = {lat: -50, lng: 160};
  const zoom = 14;

  const map = new MapWrapper(container, center, zoom);

  var contentString = '<p>Info</p>';

  map.addMarker(center, contentString);

  const chicagoButton = document.getElementById('button-chicago');
  chicagoButton.addEventListener('click', map.setCenterChicago.bind(map));

  const spyButton = document.getElementById('button-spy');
  spyButton.addEventListener('click', map.geoLocator.bind(map));
};

window.addEventListener('DOMContentLoaded', initialize);
