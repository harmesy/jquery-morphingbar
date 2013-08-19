(function($) {
  "use strict";
  
  var defaults = {
    25: function(el) {
      $(el).addClass('progress-bar-success');
    },

    50: function(el) {
      $(el).addClass('progress-bar-warning');
    },

    75: function(el) {
      $(el).addClass('progress-bar-danger');
    }
  };
  
  $.fn.morphingBar = function(percent_attr, options) {
    var _self = this,
        levels;
    options = options === undefined ? defaults : options
    
    function init() {
      levels = buildLevels();
      $(_self).trigger('morphingBar.updated');
    }
    
    function getPercentage() {
      if(percent_attr) {
        return $(_self).attr(percent_attr);
      }

      return Math.floor(100 * ($(_self).width() / $(_self).offsetParent().width()));
    }
    
    function buildLevels() {
      var levels = [];
      
      for(var i in options) {
        if(options.hasOwnProperty(i)) {
           levels.push(parseInt(i, 10));
        }
      }
      
      return levels;
    }
    
    function applyLevel(current_width) {
      var callback;
 
      for(var i in levels) {
        if(current_width >= levels[i]) {
          callback = options[levels[i]];
        }
      }
      
      if(callback !== undefined) {
        callback(_self);
      }
    }
    
    this.on('morphingBar.updated', function() {
      applyLevel(getPercentage());
    });
    
    init();
  };
})(jQuery);