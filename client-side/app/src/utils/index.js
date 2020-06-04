export function random() {
  return Math.random() > 0.5 ? 1 : 0;
}

export function initTable(table, width = 10, heigt = 18) {
  for (let i = 0; i < heigt; i++) {
    table[i] = table[i] || [];
    for (let j = 0; j < width; j++) {
      table[i][j] = 0;
    }
  }
  return table;
}

export function canMixed(table, block, x, y) {
  for (let row = y; row < block.length + y; row++) {
    for (let col = x; col < block[0].length + x; col++) {
      if (
        block[row - y][col - x] == 1 &&
        table[row][col] === block[row - y][col - x]
      ) {
        return false;
      }
    }
  }
  return true;
}

export function canRotate(table, block, x, y) {}

export function bottomMixed(table, block, x, y) {
  if (!canMixed(table, block, x, y)) {
    y -= 1;
    for (let row = y; row < block.length + y; row++) {
      for (let col = x; col < block[0].length + x; col++) {
        if (block[row - y][col - x] == 1) {
          table[row][col] = 1;
        }
      }
    }
  }
}

export function fillTable(table, block, x, y) {
  for (let row = y; row < block.length + y; row++) {
    for (let col = x; col < block[0].length + x; col++) {
      if (block[row - y][col - x] == 1) {
        table[row][col] = 1;
      }
    }
  }
  return table;
}
