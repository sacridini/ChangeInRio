var geet = require('users/elacerda/geet:geet');
var rio_2000 = geet.loadImg('TOA', 2000);
var rio_2000_ndvi = geet.ndviL5(rio_2000);
var newfc = urbano.merge(verde).merge(agua).merge(pasto);
var cart_class = geet.cart(rio_2000_ndvi, newfc, 'landcover');
var COLOR = { WATER: '0066ff', FOREST: '009933', PASTURE: '99cc00', URBAN: 'ff0000' };
Map.addLayer(cart_class, { min: 0, max: 3, palette: [COLOR.WATER, COLOR.URBAN, COLOR.FOREST, COLOR.PASTURE] }, 'class');
