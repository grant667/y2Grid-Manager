/////the grid master
Y2Grid = function(rows, cols, tileWide, tileTall, fillwith){
  this.rows = rows
  this.cols = cols
  this.tileWide = tileWide
  this.tileTall = tileTall
  this.grid = Array2D.build(rows, cols, fillwith)

  //////// tiles
this.tileLoc = function(r,c){return vector(r*this.tileWide, c*this.tileTall)}
this.tileRect = function(r,c){return(r,c,r + this.tileWide, c + this.tileTall)}
  // cell get/sets
this.get = function(r,c){return Array2D.get(this.grid,r,c)}              // get cell value 
this.set = function(r,c){Array2D.set(this.grid,r,c)}                     // set cell value
this.exists = function(r,c){return Array2D.exists(this.grid,r,c)}        // returns true if cell exists
this.occupied = function(r,c){return Array2D.occupied(this.grid,r,c)}    // returns true if cell has anything value beides null and undeclared
this.inBounds = function(r,c){return Array2D.inBounds(this.grid,r,c)}    // returns true if cell is not outside of grid

// converstions   
this.gridToText = function(){return Array2D.serialize(this.grid)}        // makes JSON format grid  
this.intToString = function(){return Array2D.stringize(this.grid)}       // puts quotes around all integers  
this.stringToInt = function(){return Array2D.intergize(this.grid)}       // removes quotes from integers
this.to2d = function(grid,w,h){return Array2D.fromArray(this.grid,w,h)}  // converts 1d array into a 2d array, pass the width and height

// grid get/sets
this.pad = function(v){ Array2D.pad(this.grid,v)}                        // adds a padded border to grid
this.trim = function(){ Array2D.trim(this.grid,v)}                       //trims off the pad
this.paste = function(gA,gB,r,c){return Array2D.paste(gA, gB,r,c)}       // paste the 2nd grid into 1st starting at the row and column    

//misc
this.check = function(){return Array2D.check(this.grid)}                  // check if grid is valad
this.shuffle = function(){return Array2D.shuffle(this.grid)}              // returns new grid with randomized values from given
this.isSymetrical = function(){return Array2D.rectangular(this.grid)}     // tells you if there is even rows/colls or they vary
this.tidy = function(){Array2D.tidy(this.grid)}                           // inserts null for ragged grids so they are symetrical
this.clone = function(){return Array2D.clone(this.grid)}                  // returns copy clone grid

// add/remove
this.deleteRow = function(r){Array2D.deleteRow(this.grid,r)}                        // deletes whole row
this.deleteColumn = function(c){Array2D.deleteColumn(this.grid, c)}                 // deletes whole column
this.addRow = function(r,thisArray){Array2D.spliceRow(this.grid,thisArray)}         // deletes whole row
this.addColumn = function(c,thisArray){Array2D.spliceColumn(this.grid, thisArray)}  // deletes whole columnn


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
this.diag = function(r,c){return Array2D.diagnals(this.grid,r,c)}      // returns diagnals like southeast...   
this.neighbors =function(r,c){return Array2D.neighbors(this.grid,r,c)} // return all 8 surrounding cells values
this.surrounds = function(r,c){return Array2D.surrounds(this.grid,r,c)} // returns all coordinates around cell

//distance info
this.shortestTo = function(r,c, x, y){return Array2D.euclidean(this.grid,r,c, x, y)}  //shortest line from 2 cells
this.movesTo = function(r,c, x, y){return Array2D.chebyshev(this.grid,r,c, x, y)}  //number of grid moves from 2 cells zig zag
this.twoTurnsTo = function(r,c, x, y){return Array2D.manhattan(this.grid,r,c, x, y)}  //number of grid moves from 2 cells in across and vertcal
  

    // canvas pixels set/gets
this.fromCanvas = function(r,c){return Array2D.fromCanvas()}   // returns a 2d array of every pixel containing rgb value
this.toCanvas = function(r,c){Array2D.fromCanvas()}   // returns a 2d array of every pixel containing rgb value
    
    

 
  
  
}
