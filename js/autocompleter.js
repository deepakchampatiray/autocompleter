requirejs.config({
    // Add this map config in addition to any baseUrl or
    // paths config you may already have in the project.
    paths: {
      'jquery' : ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min'],
      'jqueryui' : ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min']
    },
    map: {
      // '*' means all modules will get 'jquery-private'
      // for their 'jquery' dependency.
      '*': { 'jquery': 'jquery-private' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      'jquery-private': { 'jquery': 'jquery' }
    }
});

// and the 'jquery-private' module, in the
// jquery-private.js file:
define('jquery-private', ['jquery'], function (jq) {
    return jq.noConflict( true );
});

/*
require(['jquery', 'jqueryui', 'js/localdb'], function($, $ui, ldb){
  console.log('AMD', $.fn.jquery, ldb);
  $.widget("custom.dc_autocomplete", $.ui.autocomplete, {
      _create: function() {
                this._super();
                console.log('Create:',this);
                this.widget().menu("option", "items");
               }
  });

  $('input').dc_autocomplete({
    source: ldb.datasource
  });
});
*/

console.log('Original', $.fn.jquery);
