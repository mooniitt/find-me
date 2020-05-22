export function random() {
  return Math.random() > 0.5 ? 1 : 0;
}

export function initTable(table, width = 10, heigt = 18) {
  for (let i = 0; i < heigt; i++) {
    table[i] = table[i] || [];
    for (let j = 0; j < width; j++) {
      table[i][j] = random();
    }
  }
  return table;
}
