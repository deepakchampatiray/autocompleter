define(['jquery', 'jqueryui', 'js/localdb'], function($, $ui, ldb){
  var _attachAutoComplete = function(jqSel) {
    $.each($(jqSel), function(idx, itm) {
      $(itm).autocomplete({
        source: ldb.getSource(itm)
      });

      var _frm = $(itm).closest("form");
      console.log(_frm);
      if(_frm.is("form") && !_frm.attr("data-dc-autocomplete")) {
        _frm.attr("data-dc-autocomplete", "true");
        _frm.on("submit", function(){
          ldb.saveData(_frm);
        })
      }
    });
  }

  return {
    attach : _attachAutoComplete
  }
});
