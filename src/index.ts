const MAX_HITPOINTS = 10;
const DAMAGE_RANGE = [1, 6];

type Knight = {
  name: string;
  hitpoints: number;
};

(function run() {
  let knights = createKnights(['K1', 'K2', 'K3', 'K4', 'K5', 'K6']);
  let currentIndex = 0;

  while (knights.length > 1) {
    const knight = knights[currentIndex];
    const targetIndex = nextIndex(currentIndex, knights);
    const target = knights[targetIndex];
    const damage = randomInRange(DAMAGE_RANGE);

    target.hitpoints -= damage;
    console.log('%s hits %s for %d damage', knight.name, target.name, damage);

    if (target.hitpoints <= 0) {
      knights = knights.filter((_k, i) => i !== targetIndex);
      console.log('%s is defeated', target.name);
    }

    currentIndex = nextIndex(currentIndex, knights);
  }

  console.log('%s is the winner', knights[0].name);
})();

function createKnights(names: string[]): Knight[] {
  return names.map(name => ({name, hitpoints: MAX_HITPOINTS}));
}

function nextIndex<T>(currentIndex: number, list: T[]) {
  return currentIndex < list.length - 2 ? currentIndex + 1 : 0;
}

function randomInRange([min, max]: number[]) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
