
module.exports = {
    
    'show' : function(req, res) {
        sails.log.debug(req.allParams());
        Group.findOne({name:req.param('name')}).populate('scores').exec(function(err, group) {
            sails.log.debug(group);
            if(!group) {
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
            sails.log.debug(score);
            res.redirect('/score/edit/'+ score.id);
        });
    },
    'edit': function(req, res) {
        sails.log.debug(req.allParams());
        Score.findOne(req.param('id')).populate('notes').exec(function(err, score) {
            res.view('score/edit', {
                score: score
            });
        });
    },
    
   'subscribeToScore': function (req, res) {
    // if request is not a socket request
    if (!req.isSocket) {
      return res.badRequest('Only a client socket can subscribe to Louies.  You, sir or madame, appear to be an HTTP request.');
    }

    // First we'll find all users named "louie" (or "louis" even-- we should be thorough)
    Score.find({ and: [{group: req.param('group')},{score: req.param('score')}] }).exec(function(err, theScore){
      if (err) {
        return res.serverError(err);
      }

      // Now we'll use the ids we found to subscribe our client socket to each of these records.
      Group.subscribe(req, _.pluck(theScore, 'id'));

      // Now any time a user named "louie" or "louis" is modified or destroyed, our client socket
      // will receive a notification (as long as it stays connected anyways).

      // All done!  We could send down some data, but instead we send an empty response.
      // (although we're ok telling this vengeful client socket when our users get
      //  destroyed, it seems ill-advised to send him our Louies' sensitive user data.
      //  We don't want to help this guy to hunt them down in real life.)
      return res.ok();
    });
    }
    
};