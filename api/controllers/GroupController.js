/**
 * GroupController
 *
 * @description :: Defines functionality for managing groups, users can initially go to a group
 * in the landing page (see the group/login view).  The users object is not defined, there is no
 * such thing as 'joining' a group. As long as the person knows the name of the group, they 
 * can see and edit scores. 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
module.exports = {
            // This controller will handle any changes or functionality for a group
            // If they create a new group, they will be
            // directed to the scores page, where they will be able to add
            // their first score to the group.
    'new' : function(req, res) {
        res.view('group/new');
    },
    'create' : function(req, res) {
        Group.create(req.allParams())
             .exec(function(err,group) {
            if (err) {
                sails.log.debug(err);
            }
            sails.log.debug(group);
            res.redirect('/score/show/' + group.id);
        });
    }
    
};

