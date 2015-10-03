'use strict'

import BaseCreature from './BaseCreature'

class SoldierCard extends BaseCreature {
  constructor(name, color, points, creature_type) {
    super(name, color, points, creature_type);
  }

  onSet() {
    console.log('Called onSet: Method implemented on SoldierCard');
  }
}


module.exports = SoldierCard;
