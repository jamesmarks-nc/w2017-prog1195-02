
var level02 = {
  width: 10,
  height: 20,
  spawnRate: 40,
  playerStart: { x: 8, y: 1 }
};
level02.mapData = [
  1,1,1,1,1,1,1,1,3,1,
  1,0,2,1,2,2,2,2,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,2,2,2,2,2,2,1,
  1,2,1,1,1,1,2,1,1,1,
  1,1,1,2,2,2,2,2,2,1,
  1,2,2,2,2,1,2,2,2,3,
  1,0,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,1,2,2,2,2,2,1,
  1,2,2,2,2,2,2,2,2,1,
  1,2,1,1,1,1,2,1,1,1,
  1,1,1,2,2,2,2,2,2,1,
  1,2,2,2,2,1,2,2,2,3,
  1,3,1,1,1,1,1,1,1,1,
];

level01.nextLevel = level02;