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

// 移动方块融合在表格中
export function canMixed(table, block, i, j) {}

export function canRotate(table, block, i, j) {}
