var g

function setup(){
  createCanvas(800,600)

// Y2dGrid Object by Grant Rozmarin

/*
This Script piggybacks with Array2d - https://github.com/matthewtoast/Array2D.js
check the reference for even more functions that I did not use.
https://github.com/matthewtoast/Array2D.js/blob/master/REFERENCE.md
*/

/* Gets and Sets reference

1 Tiles - get map coordinate and rect
2 viewport
  - pixels g/s to canvas
  - slide / rotate / flip viewport
3 Conversions

*/
     g = new Y2Grid(10,10, 0, 64,64, 0, 10,10)
// var = new Y2Grid(^1,^2, 3, ^4,^5, ^6,^7, ^8)

/* when firing up a Y2Grid you need to pass it these instructions

  1 - how many rows in the map
  2 - how many columns in the map
  3 - the value/obj to insert into each cell
  4 - the cell width
  5 - the cell height
  6 - veiwport width
  7 - viewport height
  */

  /*
*/
}

function draw(){

}
/////the grid master
Y2Grid = function(rows, cols, , initvalue, tileWide, tileTall, vRows,vCols){
  this.rows = rows            //total rows of entire map
  this.cols = cols            //total columns of entire map
  this.vRows = vRows          //viewport rows
  this.vCols = vCols          //viewport cols
  this.tileWide = tileWide
  this.tileTall = tileTall
  this.initValue = initvalue


  //create the maps and player loc
this.grid = Array2D.build(rows, cols, fillwith);    //the whole map grid
this.vGrid = Array2D.build(vRows, vCols, fillwith); //the veiwportGrid
this.playerLoc = Array2D.center(this.vGrid),


// key codes   --- needs editing


  keys: [
      {id: 0,colour: '#333', solid: 0},                            //
      {id: 1,colour: '#888', solid: 0},
      {id: 2,colour: '#555',solid: 1,bounce: 0.35},                // main block/brick
      {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction:
          {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},  // water
      {id: 4,colour: '#777',jump: 1},
      {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},               //spring
      {id: 6,colour: '#666',solid: 1,bounce: 0},
      {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
      {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},     // end level
      {id: 9,colour: '#C93232',solid: 0,script: 'death'},         //lava
      {id: 10,colour: '#555',solid: 1},
      {id: 11,colour: '#0FF',solid: 0,script: 'unlock'}
  ],


  //////// tiles



//viewport

Y2grid.prototype.viewPortManager = function() {
// slide the viewport
this.slidevU = function(){Array2D.uslide(this.vGrid)};
this.slidevR = function(){Array2D.rslide(this.vGrid)};
this.slidevD = function(){Array2D.dSlide(this.vGrid)};
this.slidevL = function(){Array2D.lslide(this.vGrid)};

// rotate
this.vRotateR = function(){Array2D.transpose(this.vGrid)};
this.vRotateL = function(){Array2D.antitranspose(this.vGrid)};
///////////////////////////////////
}

///cells
Y2Grid.prototype.cells = function (){// cell get/sets
this.get = function(r,c){return Array2D.get(this.grid,r,c)};              // get cell value
this.set = function(r,c){Array2D.set(this.grid,r,c)};                     // set cell value
this.exists = function(r,c){return Array2D.exists(this.grid,r,c)};        // returns true if cell exists
this.occupied = function(r,c){return Array2D.occupied(this.grid,r,c)};    // returns true if cell has anything value beides null and undeclared
this.inBounds = function(r,c){return Array2D.inBounds(this.grid,r,c)};    // returns true if cell is not outside of grid

}

//drawing pixels
Y2grid.prototype.visuals = function() {
// canvas pixels set/gets
this.fromCanvas = function(r,c){return Array2D.fromCanvas()}   // returns a 2d array of every pixel containing rgb value
this.toCanvas = function(r,c){Array2D.fromCanvas()}   // returns a 2d array of every pixel containing rgb value
this.tileLoc = function(r,c){return vector(r*this.tileWide, c*this.tileTall)};
this.tileRect = function(r,c){return rect(r,c,r + this.tileWide, c + this.tileTall)};

// pixel painting
this.updateCanvas = function(){};
this.drawPixels = function(x,y,item){};
}


// grid manager
Y2Grid.prototype.gMangager = function() {
// converstions
this.gridToText = function(){return Array2D.serialize(this.grid)}        // makes JSON format grid
this.intToString = function(){return Array2D.stringize(this.grid)}       // puts quotes around all integers
this.stringToInt = function(){return Array2D.intergize(this.grid)}       // removes quotes from integers
this.to2d = function(grid,w,h){return Array2D.fromArray(this.grid,w,h)}  // converts 1d array into a 2d array, pass the width and height

// general
this.check = function(){return Array2D.check(this.grid)};                 // check if grid is valad
this.same = function(gB){return Array2D.antitranspose(this.Grid,gB)};     // compares 2 grids if they are exact same
this.diff = function(gB){return Array2D.antitranspose(this.Grid,gB)};     // tells you if there is even rows/colls or they vary
this.shuffle = function(){return Array2D.shuffle(this.grid)};              // returns new grid with randomized values from given
this.clone = function(){return Array2D.clone(this.grid)};                   // returns copy clone grid

//even out map
this.tidy = function(){Array2D.tidy(this.grid)};                           // inserts null for ragged grids so they are symetrical
this.isSymetrical = function(){return Array2D.rectangular(this.grid)};     // see if rows and cols are all even

///buffers
this.pad = function(v){ Array2D.pad(this.grid,v)};                        // adds a padded border to grid
this.trim = function(){ Array2D.trim(this.grid,v)};                       //trims off the pad
this.getView = function(gA,gB,r,c){return Array2D.paste(gA, gB,r,c)};     // extracts a portion of map

//rotate grid
this.rotateR = function(){Array2D.transpose(this.Grid)};                   // rotate clockwise
this.rRotateL = function(){Array2D.antitranspose(this.Grid)};               // rotate countercloockwise

//flip grid
this.hflip = function(axis){Array2D.hflip(this.Grid)};              // flips grid over x or y
this.vflip= function(){Array2D.vflip(this.Grid)};               // rotate countercloockwise


// add/remove
this.deleteRow = function(r){Array2D.deleteRow(this.grid,r)};                        // deletes whole row
this.deleteColumn = function(c){Array2D.deleteColumn(this.grid, c)};                 // deletes whole column
this.addRow = function(r,thisArray){Array2D.spliceRow(this.grid,thisArray)};         // deletes whole row
this.addColumn = function(c,thisArray){Array2D.spliceColumn(this.grid, thisArray)};  // deletes whole columnn


// fills
this.fillArea = function(r,c,w,h,v){ Array2D.pad(this.grid,r,c,w,h,v)}              // fills an area of grid with value row, col, wide, tall
this.fill = function(v){ Array2D.pad(this.grid,v)}                                  // fills entire grid with value
this.fillRow = function(r,thisArray){Array2D.fillRow(this.grid,r, thisArray)}       // fills row with value
this.fillColumn = function(c,thisArray){Array2D.fillColumn(this.grid,c, thisArray)} // fills column with value
this.nullify = function(){Array2D.nullify(this.grid)}                               // fills grid with null

// border gets
this.edges = function(r,c){return Array2D.edges(this.grid,r,c)}        // returns list of surrounding cells that are on border
this.isBorder = function(){return Array2D.interior(grid, r, c)}       // returns false if neither edge or corner
this.edge = function(r,c){return Array2D.edge(this.grid,r,c)}         // returns true if edge
this.corner = function(r,c){return Array2D.edge(this.grid,r,c)}         // returns true if corner


// neighbor gets
this.around = function(r,c){return Array2D.orthogonals(this.grid,r,c)} // returns cells up down left right
//// add set the border // suggest using the buffer for next viewports and boarder collision
this.diag = function(r,c){return Array2D.diagnals(this.grid,r,c)}      // returns diagnals like southeast...
this.neighbors =function(r,c){return Array2D.neighbors(this.grid,r,c)} // return all 8 surrounding cells values
this.surrounds = function(r,c){return Array2D.surrounds(this.grid,r,c)} // returns all coordinates around cell

//distance info
this.shortestTo = function(r,c, x, y){return Array2D.euclidean(this.grid,r,c, x, y)}  //shortest line from 2 cells
this.movesTo = function(r,c, x, y){return Array2D.chebyshev(this.grid,r,c, x, y)}  //number of grid moves from 2 cells zig zag
this.twoTurnsTo = function(r,c, x, y){return Array2D.manhattan(this.grid,r,c, x, y)}  //number of grid moves from 2 cells in across and vertcal

}


}







}
