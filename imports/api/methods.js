import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'find.random_number'(min, max) {
    if (!min) min = 0;
    if (!max) max = 100;
    const generatedNumber = Math.random() * (max - min) + min;
    return Math.floor(generatedNumber);
  },
})