var ultimo = "0";
var reset = document.getElementById('reset');
var jogo = document.getElementById('jogo');
var cell = jogo.getElementsByTagName('div');
var bruno = {
    init: function () {
        var jogo = document.getElementById('jogo');
        for ( i = 0 ; i < 9 ; i++ ) {
            var cell = document.createElement('div');
            cell.onclick = function () {
        	    // variavel publica dentro do obj?
        	    ultimo = (ultimo == "x") ? 0 : "x";
        	    this.innerHTML = ultimo;
        	    bruno.checkWin();	
            };
            jogo.appendChild(cell);
        }
    },
	checkWin: function () {
        var jogo = document.getElementById('jogo');
        var cells = jogo.getElementsByTagName('div');
                            
        // Scan through every cell
        var numRows = 3;
        var numColumns = 3;
        for (var i = 0; i < cells.length; i++)
        {
            // Determine cell's position
            var isHorizontalFirstCell = ((i % numColumns) === 0);
            var isVerticalFirstCell = (i < numColumns);
            var isTopLeftCorner = (i == 0);
            var isTopRightCorner = (i == 2);
            
            // Check for horizontal matches
            if (isHorizontalFirstCell
                && bruno.checkCells(
                    cells, i, 
                    (i + 3), 1))
            {
                alert('Horizontal');
            }
                
            // Check for vertical matches
            if (isVerticalFirstCell
                && bruno.checkCells(
                    cells, i,
                    (i + 7), 3))
            {
                alert('Vertical');   
            }
            
            // Check for diagonal matches
            if (isTopLeftCorner
                && bruno.checkCells(
                    cells, i,
                    (i + 9), 4))
            {
                alert('Diagonal');
            }
             
            if (isTopRightCorner
                && bruno.checkCells(
                    cells, i,
                    (i + 5), 2))
            {
                alert('Diagonal');
            }            
        }
    },
    reset: function () {
        var jogo = document.getElementById('jogo');
        var cell = jogo.getElementsByTagName('div');
        for ( j = 0 ; j < cell.length ; j++ ) {
            cell[j].innerHTML = "";
        }
    },
    checkCells: function(cells, index, limit, step) {
        var sequenceChar = null;
        for (var i = index; i < limit; i += step)
        {
            // Return false immediately if one
            // of the cells in the sequence is empty
            if (!cells[i].innerHTML) 
                return false;
                
            // If this is the first cell we're checking,
            // store the character(s) it holds.
            if (sequenceChar === null)
                sequenceChar = cells[i].innerHTML;
            
            // Otherwise, confirm that this cell holds
            // the same character(s) as the previous cell(s).
            else if (cells[i].innerHTML !== sequenceChar)
                return false;
        }
            
        // If we reached this point, the entire sequence
        // of cells hold the same character(s).
        return true;
    }
};

bruno.init();

reset.onclick = function () {
    bruno.reset();
};

