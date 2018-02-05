var geet = require('users/elacerda/geet:geet');
var rio_1985 = geet.loadImg('TOA', 1985);
var rio_1985_ndvi = geet.ndviL5(rio_1985);
var newfc = urbano.merge(verde).merge(agua).merge(pasto);
var cart_class = geet.cart(rio_1985_ndvi, newfc, 'landcover');
var COLOR = { WATER: '0066ff', FOREST: '009933', PASTURE: '99cc00', URBAN: 'ff0000' };
Map.addLayer(cart_class, { min: 0, max: 3, palette: [COLOR.URBAN, COLOR.WATER, COLOR.FOREST, COLOR.PASTURE] }, 'class');
