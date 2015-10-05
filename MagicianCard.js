'use strict'

import BaseCreature from './BaseCreature'

class MagicianCard extends BaseCreature {
  constructor() {
    super('Magician', 'Yellow', 20, 'CREATURE_MAGICIAN', ['TOP', 'MID']);
  }

  onSet() {
    console.log('Called onSet: Method implemented on MagicianCard');
  }


}


module.exports = MagicianCard;
