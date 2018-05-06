# y2Grid-Manager
A wrapper for Array2d.js 

Array2D by Mathew Toast is required 
get it at https://github.com/matthewtoast/Array2D.js/blob/master/dist/Array2D.min.js

Problem -
Overview - 2D arrays [[0,0,0,].[0,0,0,]] are looked down on as unnecessary as you can simply use a 1d array and divide by the width + the cell width  to access the aaray like the good old list[1][1]. I am used to. Learning from the Codetraqin there are so many grid based tutorials and challenges I found myself rewriting the same code over and over again.  I need a utilty that can do all of those  things and more to assist in efficient coding. The Array2D script is perfect with over 100 functions.

It will be mostly used for tile based 2d games, but also serve as as solution to canvas based UI. There is no good solution for DOM on the canvas that I can find. These methods should allow to snap to grid style UI elements. 

Solution - 
Array2D is where its at, i just stumbed upon it today and it had everything i need to work with aarays and more. I spent much time turning their functions into a Object script with several prototypes to hande diffent areas of a matrix. They are listed below

Y2Grid Structure

0 - setup 
you start a new instance providing theese parameters 
rows, cols, tileWide, tileTall, veiwport_rows, veiwport_cols

1 - key index 
these are the guides to workinbg with JSON formatted maps where a number describes the type of tile.

2 - viewport manager
slide/shift the viewport any direction
rotates the viewport either way

3- cells
get/set values, check if exists, if occupied or on the boarder

4 -  grid manager
does all kinds of conversions to 1d array, 1d to 2d , intigers to strings, string sot integers
checks and balance, is it a 2dgrid, are thesee 2 grids the exact same or different
mix up the grid randomly

clone this grid, create padding , insert, delete rows, values fill all cells. and more
paints the tiles as pixels and manages canvas interaction

check if symetrical or unbalancesd, control and feed the veiwport with slice

border and neighbor gets

distance functions for pathfinding



