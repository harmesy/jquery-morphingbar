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
        levels, current_level;
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
    
    function applyLevel(current_percentage) {
      var level_to_apply;

      for(var i in levels) {
        if(current_percentage >= levels[i]) {
          level_to_apply = levels[i];
        }
      }
      
      if(level_to_apply && level_to_apply != current_level) {
        current_level = level_to_apply;
        options[level_to_apply](_self);
      }
    }
    
    this.on('morphingBar.updated', function() {
      applyLevel(getPercentage());
    });
    
    init();
  };
})(jQuery);