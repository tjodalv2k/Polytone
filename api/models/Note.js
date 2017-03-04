/**
 * Note.js
 *
 * @description :: This is the model for the a 'Note'
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      owner: {
        model: 'score'
      },
      // the measure that the note occurs
      measure: {
        type: 'number'
      },
      // the position that the note starts on, depends on time signature and how many different . Ex. in 4/4 time, the beat could be 1.0, 1.25, 1.5, 1.75, 2.0 ... 4.0
      beat: {
        type: 'number'
      },
      // can be sharp, flat, or natural, will want to defaults to natural
      accidental: {
        type: 'string'
      },
      // can be whole, half, quarter, or eigth to start, may allow sixteenth in the future
      type: {
        type: 'string'
      },
      // 0 to 87 because we are representing an 88 key piano, 0 is the lowest A, 87 is the highest C
      // 1, 4, 6, 9, 11, 13, 16, 18, 21, 23, 25 ... black keys occur starting at 1 (the lowest) with a pattern of +3, +2, +3, +2, +2, +3, +2, +3, +2, +2, +3, +2, +3, +2, +2 ...
      value: {
        type: 'number'
      }
      // future addition 'chord', where notes can be grouped logically into chords, multiple notes occuring on the same beat
  }
};

