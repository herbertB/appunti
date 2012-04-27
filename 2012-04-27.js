// EXERCISE 1

var contorno = POLYLINE([ [0,0], [9,0], [9,7], [0,7], [0,0] ]);
var sopra = POLYLINE([ [0,3], [1,3], [1,1], [4,1], [4,3], [5,3], [5,1], [8,1], [8,3], [9,3] ]);
var sotto = POLYLINE([ [0,4], [1,4], [1,6], [4,6], [4,4], [5,4], [5,6], [8,6], [8,4], [9,4] ]);

var pianta = STRUCT( [contorno, sopra, sotto] );

var mura = EXTRUDE([1])(pianta);
mura = COLOR([0.12,0.5,0])(mura);
DRAW(mura);


//EXERCISE 2

var roof = T([2])([1])( BOUNDARY(CUBOID([9,7,1])) );
roof = COLOR([0.12,0.5,0]);
DRAW(roof);


// EXERCISE 3
var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[1,0],[1,1]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);