/**
 * Score.js
 *
 * @description :: This is the model for a score, to begin with, this is initialised when a new score is created.
 * for now it cannot be edited after initialising because of the amount of rework that would have to be done on the client.
 * The things that might be editable are the name and the tempo, but changing the key and time would require 
 * a lot of work to restructure the song on the client side.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        owner: {
            model: 'group'
        },
        measures: {
            collection: 'measure',
            via: 'owner'
        },
        name: {
            type: 'string'
        },
        tempo: {
            type: 'integer'
        },
        key: {
            type: 'string'
        },
        time: {
            type: 'string'
        }
    }
};

