// TODO: write code here
import { orderByProperties } from './orderByProperties';
orderByProperties(
  {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40
  },
  [
    'defence', 'name', 'level'
  ]
);

console.log('app worked!');