# Knights

A game of knights.

## Usage

Clone or download the repository.

Install dependencies:

```sh
yarn install
```

Start the game:

```sh
yarn start
```

## Output

Example output for a single game:

```sh
K1 hits K2 for 5 damage
K2 hits K3 for 2 damage
K3 hits K4 for 4 damage
K4 hits K5 for 5 damage
K5 hits K6 for 4 damage
K6 hits K1 for 1 damage
K1 hits K2 for 2 damage
K2 hits K3 for 3 damage
K3 hits K4 for 5 damage
K4 hits K5 for 1 damage
K5 hits K6 for 1 damage
K6 hits K1 for 3 damage
K1 hits K2 for 1 damage
K2 hits K3 for 5 damage
K3 is defeated
K4 hits K5 for 6 damage
K5 is defeated
K6 hits K1 for 1 damage
K1 hits K2 for 4 damage
K2 is defeated
K4 hits K6 for 6 damage
K6 is defeated
K1 hits K4 for 2 damage
K4 is defeated
K1 is the winner
```

## Improvement ideas

* [x] Make constants easy to configure
* [x] Create a factory for knights
* [x] Do not mutate the knights array
* [x] Use a range for the damage
* [ ] Add some unit tests
* [ ] Introduce a game state
* [ ] Use reducers to update the game state
* [ ] Use a linked list for the knights
* [ ] Move knight logic into a `Knight` class
