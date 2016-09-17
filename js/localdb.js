define([], function(){
  var ls = localStorage;


  var _getSource = function(itm) {
    console.log('get source : ', itm);
    if(itm && itm.name) {
      var data = ls.getItem(itm.name) || '[]';
      $(itm).attr('data-dc-autocomplete', 'true');
      return JSON.parse(data);
    }
    else
      return [];
  }

  var _saveToStore = function(name, value) {
    var existingItem = JSON.parse(ls.getItem(name) || '[]');
    (existingItem.indexOf(value) !== -1) || existingItem.push(value);
    console.log(existingItem);
    ls.setItem(name, JSON.stringify(existingItem));
  }

  var _saveData = function(frm) {
    $('*[data-dc-autocomplete=true]', frm).each(function(idx,itm) {
      _saveToStore(itm.name, itm.value);
    })
  }

  return {
    getSource: _getSource,
    saveData : _saveData,
    saveToStore: _saveToStore
  }
})
