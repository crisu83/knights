type Knight = {
  name: string;
  hitpoints: number;
};

const run = () => {
  const knights: Knight[] = [
    {name: 'K1', hitpoints: 10},
    {name: 'K2', hitpoints: 10},
    {name: 'K3', hitpoints: 10},
    {name: 'K4', hitpoints: 10},
    {name: 'K5', hitpoints: 10},
    {name: 'K6', hitpoints: 10},
  ];

  let currentIndex = 0;

  while (knights.length > 1) {
    const knight = knights[currentIndex];
    const targetIndex = getNextIndex(currentIndex, knights);
    const target = knights[targetIndex];
    const damage = getRandomArbitrary(1, 6);

    target.hitpoints -= damage;
    console.log(
      '%s attacks %s for %d damage',
      knight.name,
      target.name,
      damage
    );

    if (target.hitpoints <= 0) {
      knights.splice(targetIndex, 1);
      console.log('%s is defeated', target.name);
    }

    currentIndex = getNextIndex(currentIndex, knights);
  }

  console.log('%s is the winner', knights[0].name);
};

function getNextIndex(currentIndex: number, items: unknown[]) {
  return currentIndex < items.length - 2 ? currentIndex + 1 : 0;
}

function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

run();
