'use strict'

import BaseCard from './BaseCard'

export default class BaseCreature extends BaseCard {
  constructor(name, color, points, creature_type, rows) {
    super(name, color);
    this.points = points;
    this.creature_type = creature_type;
    this.rows = rows;

  }

  onSet() {

  }

  canPlaceOnRow(row) {
    if (this.rows.indexOf(row) >= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  onDestroy() {

  }

  onReturnToHand() {

  }

}
