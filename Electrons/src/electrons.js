function electrons(dice) {
  let total = 0;
  for (const roll of dice) {
    switch (roll) {
      case 3:
        total += 2;
        break;
      case 5:
        total += 4;
        break;
      default:
        break;
    }
  }
  return total;
}
