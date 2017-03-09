/**
 * ScoreController
 *
 * @description :: Defines functionality for managing scores, users can initially go to a group
 * in the landing page (see the group/login view).  The users object is not defined, there is no
 * such thing as 'joining' a group. As long as the person knows the name of the group, they 
 * can see and edit scores. 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    
    'show' : function(req, res) {
        Group.findOne({name:req.param('name')}).populate('scores').exec(function(err, group) {
            if(err) {
                sails.log.debug(err);
            }
            if(group.scores.length===0) {
                group.scores = ['none'];
            }
            res.view('score/show', {scores: group.scores, group:group});
        });
    },
    'create' : function(req, res) {
        Score.create(req.allParams()).exec(function(err, score) {
            if(err) {
                sails.log.debug(err);
            }
            res.redirect('/score/edit/'+ score.id);
        });
    },
    'edit': function(req, res) {
        sails.log.debug(req.allParams());
        Score.findOne(req.param('id')).populate('measures').exec(function(err, score) {
            res.view('score/edit', {
                score: score
            });
        });
    },
    
   'joinRoom': function (req, res) {
      // if request is not a socket request
  
      if (!req.isSocket) {
        return res.badRequest();
        sails.log.debug("BAD request");
      }
      // the room name is just the score id, which is unique
      var roomName = req.param('id').toString();
      sails.sockets.join(req, roomName, function(err) {
        if (err) {
          return res.serverError(err);
        }
        
        return res.json({
          message: 'Subscribed to a fun room called '+roomName+'!'
        });
      });
    }
};