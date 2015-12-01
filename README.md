# Ultimate-TicTacToe

Ultimate TicTacToe written in AngularJS as part of a General Assembly WDI homework.

## Rules

Each square of the traditional 3x3 TicTacToe is further divided into its own 3x3 board. The opponent's turn has to take place in the big square, corresponding to the small square that has just been played (e.g. player X starts with top-right of the middle square, player O has to play anywhere in the top-right square).

Once a small board has been won, it is owned by the player. Any move that sends a player to an owned square results in an open play, where the player can choose any remaining board.

The aim is to connect 3 big boards in a row.