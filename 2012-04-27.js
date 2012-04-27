var contorno = POLYLINE([ [0,0], [9,0], [9,7], [0,7], [0,0] ]);
var sopra = POLYLINE([ [0,3], [1,3], [1,1], [4,1], [4,3], [5,3], [5,1], [8,1], [8,3], [9,3] ]);
var sotto = POLYLINE([ [0,4], [1,4], [1,6], [4,6], [4,4], [5,4], [5,6], [8,6], [8,4], [9,4] ]);

var pianta = STRUCT( [contorno, sopra, sotto] );

var mura = EXTRUDE([1])(pianta);
mura = COLOR([0.12,0.5,0])(mura);
DRAW(mura);