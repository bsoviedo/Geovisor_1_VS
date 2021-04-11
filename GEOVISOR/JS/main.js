/* para mas detalles ir acá https://gis.stackexchange.com/questions/375450/cluster-geojson-data-with-prunecluster*/


var map =  L.map('mapid', {
    center: [4, -74],
    zoom: 5
});
  
var base= L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',).addTo(map);


//Esta versión se hace con marker cluster


var markers = L.markerClusterGroup({
  attribution: 'Twitter/ Vidas silenciadas'
}); //Se establece la variable  markers que sera en esencia
//un array de los datos que se le pongan. Acá se pone vacia

var geoJsonLayer = L.geoJson(data, { //acá se lee el layer del geojson
  onEachFeature: function (feature, layer) { //Y se establece la función para desplegar el popup
    layer.bindPopup("<h2> Detalles: </h2> <table class= 'table' border='1'> <tr> <td> <strong>Municipio: </strong> </td> <td>" + feature.properties.Municipio+ "</td> </tr>"+
    "<br> <br>"+ "<tr> <td> <strong>Descripción: </strong> </td> <td>" + feature.properties.Desc + "<br> </td> </tr> </table>" ); // Se le dice: cuando se haga clic, se despliega esa información
  }// la función .bindPopup permite el uso de HTML, por lo que se puede personalizar lo que sale en cada dato.
});
markers.addLayer(geoJsonLayer);  //y acá se añade cada punto a la variable markers


map.addLayer(markers);  // Se añade la variable al mapa
map.fitBounds(markers.getBounds()); // Y esta si no se para que es :v

