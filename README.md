# Polytone

a [Sails](http://sailsjs.org) application

To work on the project, fork the repository, clone your repository to your computer, and run
`npm install`

If you need anymore client side javascript, you run 
`bower install jquery`, this will put the javascripts into bower_components

To inject client side javascript, add lines like these to 'tasks/pipeline.js', you will have to find the exact location of the file you want to inject
`var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'bower_components/jquery/dist/jquery.min.js'`
  
Please open pull requests and open issues for the project on the [main repository](https://github.com/UNO-ISQA-4380/Polytone)
  

  
  
