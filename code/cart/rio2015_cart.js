var geet = require('users/elacerda/geet:geet');
var rio_2015 = geet.loadImg('TOA', 2015);
var rio_2015_ndvi = geet.ndviL8(rio_2015);
var newfc = urbano.merge(verde).merge(agua).merge(pasto);
var cart_class = geet.cart(rio_2015_ndvi, newfc, 'landcover');
var COLOR = {WATER: '0066ff', FOREST: '009933', PASTURE: '99cc00', URBAN: 'ff0000'};
Map.addLayer(cart_class, { min: 0, max: 3, palette: [COLOR.URBAN, COLOR.FOREST, COLOR.WATER, COLOR.PASTURE] }, 'class');
