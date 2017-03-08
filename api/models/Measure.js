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
      // the measure number
      measureNumber: {
        type: 'integer'
      },
      // the value of the abc measure. Ex. `cdef e4 d4` is an example of 4 eight notes followed by 2 quarter notes in a 4/4 measure.
      measureValue: {
        type: 'string'
      }
     
  }
};

