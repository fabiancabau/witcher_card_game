'use strict'

import BaseCreature from './BaseCreature'

class SoldierCard extends BaseCreature {
  constructor() {
    super('Soldier', 'Yellow', 20, 'CREATURE_SOLDIER', ['TOP', 'MID']);
  }

  onSet() {
    console.log('Called onSet: Method implemented on SoldierCard');
  }
  

}


module.exports = SoldierCard;
