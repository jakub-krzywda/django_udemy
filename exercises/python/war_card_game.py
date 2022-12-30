import random
from random import shuffle


class Card:
    def __init__(self, color, figure):
        self.color = color
        self.figure = figure

    def __str__(self):
        return f'{self.figure}{self.color}'

    def __gt__(self, other):
        if Deck.figures[self.figure] > Deck.figures[other.figure]:
            return True
        else:
            return False

    def __lt__(self, other):
        if Deck.figures[self.figure] < Deck.figures[other.figure]:
            return True
        else:
            return False

    def __eq__(self, other):
        if Deck.figures[self.figure] == Deck.figures[other.figure]:
            return True
        else:
            return False

    def __ne__(self, other):
        if Deck.figures[self.figure] != Deck.figures[other.figure]:
            return True
        else:
            return False


class Deck:
    suits = ('♥', '♤', '♦', '♧')
    figures = tuple(str(x) for x in range(2, 11)) + ('J', 'Q', 'K', 'A')
    figures = {figure: value for value, figure in enumerate(figures)}

    def __init__(self, multiple=1):
        self.cards = []
        for i in range(multiple):
            for suit in self.suits:
                self.cards += [Card(suit, figure) for figure in self.figures]

    def __str__(self):
        return ' '.join([str(card) for card in self.cards])

    def __len__(self):
        return len(self.cards)

    def __getitem__(self, slice):
        return self.cards[slice]

    def shuffle(self):
        print('shuffle in progress...')
        shuffle(self.cards)


class Player:

    def __init__(self, name: str, cards: list):
        self.name = name
        self.cards = cards

    def show_cards(self):
        print(f'{self.name}\'s cards:')
        print(' '.join([str(card) for card in self.cards]))

    def pop_card(self):
        card = self.cards.pop()
        print(f'{self.name}:{card}')
        return card

    def add_cards(self, cards):
        self.cards.extend(cards)

    def is_loser(self):
        return not bool(self.cards)


deck = Deck(2)
deck.shuffle()


class Game:
    def __init__(self, how_many_decks=1):
        self.deck = Deck(how_many_decks)
        self.deck.shuffle()
        player_one_name = 'Kuba'
        player_two_name = 'Julia'
        self.player_one = Player(player_one_name, deck[int(len(deck) / 2):])
        self.player_two = Player(player_two_name, deck[:int(len(deck) / 2)])
        self.winner = 0

    def check_win(self):
        if self.player_one.is_loser():
            return self.player_two
        elif self.player_two.is_loser():
            return self.player_one
        else:
            return 0

    def run(self):
        cards_to_win = []
        while self.winner == 0:
            self.winner = self.check_win()
            if self.winner != 0:
                break
            p1_card = self.player_one.pop_card()
            p2_card = self.player_two.pop_card()
            cards_to_win.extend([p1_card, p2_card])
            if p1_card != p2_card:
                if p1_card > p2_card:
                    self.player_one.add_cards(cards_to_win)
                    cards_to_win = []
                else:
                    self.player_two.add_cards(cards_to_win)
                    cards_to_win = []
                    self.winner = self.check_win()
            else:
                self.winner = self.check_win()
                if self.winner != 0:
                    break
                cards_to_win.extend([self.player_one.pop_card(), self.player_two.pop_card()])

        print(f'Game Over. {self.winner.name} wins')


game = Game()
game.run()
