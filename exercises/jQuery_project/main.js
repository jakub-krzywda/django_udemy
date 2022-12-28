var game_field = [[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]];
var playerTics = {
    1: [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]],
    2: [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]]
};
var whichPlayer = 1;

function changeColorBlack() {
    const tic_x = this.className.split('_')[1];
    var col = $('.x_' + tic_x);
    col.css({ 'background-color': 'black' })
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (game_field[i][j] == 1) {
                $('#y_' + j + ' .x_' + i).css({ 'background-color': 'blue' });
            } else if (game_field[i][j] == 2) {
                $('#y_' + j + ' .x_' + i).css({ 'background-color': 'red' });
            }
        }
    }
}

function changeColorGray() {
    const tic_x = this.className.split('_')[1];
    var col = $('.x_' + tic_x);
    col.css({ 'background-color': 'gray' })
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (game_field[i][j] == 1) {
                $('#y_' + j + ' .x_' + i).css({ 'background-color': 'blue' });
            } else if (game_field[i][j] == 2) {
                $('#y_' + j + ' .x_' + i).css({ 'background-color': 'red' });
            }
        }
    }
}

function checkWin() {
    var winner = 0;
    for (var i = 0; i < 7; i++) {
        var col_sum = 0;
        var row_sum = 0;
        for (var j = 0; j < 7; j++) {
            if (playerTics[whichPlayer][i][j] == 1) {
                row_sum += playerTics[whichPlayer][i][j];
            } else if (row_sum === 4) {
                winner = whichPlayer;
                console.log('We have a winner player: ' + winner);
                $('#game_status p').text = 'We have a winner player: ' + winner + '\n Refresh to Restart';
            } else {
                row_sum = 0;
            }

            if (playerTics[whichPlayer][j][i] == 1) {
                col_sum += playerTics[whichPlayer][i][j];
            } else if (col_sum === 4) {
                winner = whichPlayer;
                console.log('We have a winner player: ' + winner);
                $('#game_status p').text = 'We have a winner player: ' + winner + '\n Refresh to Restart';
            } else {
                col_sum = 0;
            }
        }
    }
}

function gameStatusChange() {
    checkWin()
    $('#game_status p').text('Player ' + whichPlayer + ' Turn. Click to drop coin');
    console.log('PlayerTics:\n')
    console.log(playerTics)

}

function afterclick() {
    const tic_x = this.className.split('_')[1];
    var col = $('.x_' + tic_x);
    for (i = 6; i >= 0; i--) {
        if (game_field[tic_x][i] == 0) {
            game_field[tic_x][i] = whichPlayer;
            var tic = $('#y_' + i + ' .x_' + tic_x);
            if (whichPlayer == 1) {
                tic.css({ 'background-color': 'blue' });
                playerTics[whichPlayer][tic_x][i] = 1;
                whichPlayer = 2;
            } else {
                tic.css({ 'background-color': 'red' });
                playerTics[whichPlayer][tic_x][i] = 1;
                whichPlayer = 1;
            }
            gameStatusChange()
            break
        } else {
            continue;
        }
    }


}


tics = $('td');
tics.hover(changeColorBlack, changeColorGray);
tics.click(afterclick);
