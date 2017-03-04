/*io.socket.on('connect', function(){
      io.socket.get('/score/subscribeToScore');
});

angular.module('Polytone').controller('Score', function ($scope) {
    

  $scope.score = $scope.score || [];

  if (!io.socket.alreadyListeningToScore) {
    io.socket.alreadyListeningToScore = true;
    io.socket.on('score', function onServerSentEvent (msg) {

      // Let's see what the server has to say...
      switch(msg.verb) {

        case 'created':
          $scope.orders.push(msg.data); // (add the new order to the DOM)
          $scope.$apply();              // (re-render)
          break;

        default: return; // ignore any unrecognized messages
      }
    });
  }
});*/