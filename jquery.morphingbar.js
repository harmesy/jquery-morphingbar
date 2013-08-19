(function($) {
  "use strict";
  
  var defaults = {
    20: {
      up: function(el) {
        el.addClass('progress-bar-success');
      },
      down: function(el) {
        el.removeClass('progress-bar-success');
      }
    },
    40: {
      up: function(el) {
        el.addClass('progress-bar-info');
      },
      down: function(el) {
        el.removeClass('progress-bar-info');
      }
    },
    60: {
      up: function(el) {
        el.addClass('progress-bar-warning');
      },
      down: function(el) {
        el.removeClass('progress-bar-warning');
      }
    },
    80: {
      up: function(el) {
        el.addClass('progress-bar-danger');
      },
      down: function(el) {
        el.removeClass('progress-bar-danger');
      }
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
        if(current_level) {
          options[current_level].down(_self);
        }

        options[level_to_apply].up(_self);
        current_level = level_to_apply;
      }
    }
    
    this.on('morphingBar.updated', function() {
      applyLevel(getPercentage());
    });
    
    init();
  };
})(jQuery);