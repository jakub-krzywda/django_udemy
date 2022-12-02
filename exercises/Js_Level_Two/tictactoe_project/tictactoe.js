var which_player = false;

function change_color() {
    this.style.background = "gray";
}

function change_color_back() {
    this.style.background = "white";
}

function check_win(player_tics) {

    var diag_sum1 = player_tics[0][0] +
        player_tics[1][1] +
        player_tics[2][2];
    var diag_sum2 = player_tics[2][0] +
        player_tics[1][1] +
        player_tics[0][2];
    if (diag_sum1 == 3 || diag_sum2 == 3) {
        winner = which_player + 1;
        console.log('We have a winner player: ' + winner);
        var game_status = document.querySelector('#gamestatus')
        game_status.textContent = 'We have a winner player: ' + winner + '\n Refresh to Restart';
        return true;
    }
    for (var i = 0; i < 3; i++) {
        var col_sum = 0;
        var row_sum = 0;
        for (var j = 0; j < 3; j++) {
            row_sum += player_tics[i][j];
            col_sum += player_tics[j][i];
            if (row_sum === 3 || col_sum === 3) {
                winner = which_player + 1;
                console.log('We have a winner player: ' + winner);
                var game_status = document.querySelector('#gamestatus')
                game_status.textContent = 'We have a winner player: ' + winner + '\n Refresh to Restart';
                return true;
            }
        }
    }




}

function assign_tick() {
    if (this.clicked === false) {
        var clk_x = this.id.split('_')[1];
        var clk_y = this.id.split('_')[2];

        if (which_player === false) {
            this.textContent = 'O';
            player_one_tics[clk_x][clk_y] = 1;
            console.log(player_one_tics);
            check_win(player_one_tics);
            change_player()
        } else {
            this.textContent = 'X';
            player_two_tics[clk_x][clk_y] = 1;
            console.log(player_two_tics);
            check_win(player_two_tics);
            change_player()
        }
        this.clicked = true
    }
}

function change_player() {
    which_player = !which_player;
    var game_status = document.querySelector('#gamestatus');
    var player_num = which_player + 1;
    game_status.textContent = 'Player ' + player_num + ' Turn';
}

var tics = document.querySelectorAll('.tic');
player_one_tics = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
player_two_tics = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
for (tic of tics) {
    tic.addEventListener('mouseover', change_color)
    tic.addEventListener('mouseout', change_color_back)
    tic.addEventListener('click', assign_tick)
    tic.clicked = false
}