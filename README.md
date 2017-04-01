# Polytone

A collaborative ABC music creation application, also a [Sails](http://sailsjs.org) application

To work on the project, fork the repository, clone to your computer, and run
`npm install` and also `bower install`. This gets all the javascript packages. 
Feel free to add more database adapters if necessary.

If you need anymore client side javascript, you run 
`bower install package-name`, this will automatically put the javascripts into bower_components

To inject client side javascript, add lines like these to 'tasks/pipeline.js', you will have to find the exact location of the file you want to inject

`var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'bower_components/jquery/dist/jquery.min.js'`
  
Please open pull requests and open issues for the project on the [main repository](https://github.com/UNO-ISQA-4380/Polytone)
  
# Todo

2 APIs are pretty much done, the third rhyming API should be easy. Need to find fourth.
Need to clean of the code, as well as error/bounds checking, weed out variables and functions that don't need to be on the angular $scope. 


  
  
