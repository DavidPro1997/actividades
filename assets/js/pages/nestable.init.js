!function(n) {
    "use strict";
    
    function t() {}
    
    t.prototype.updateOutput = function(t) {
        var e = t.length ? t : n(t.target),
            a = e.data("output");
        window.JSON ? a.val(window.JSON.stringify(e.nestable("serialize"))) : a.val("JSON browser support required for this demo.")
    };
    
    t.prototype.init = function() {
        var $nestable1 = n("#nestable_list_1"),
            $nestable2 = n("#nestable_list_2"),
            $nestable3 = n("#nestable_list_3");
        
        if ($nestable1.length) {
            $nestable1.nestable({ group: 1 }).on("change", this.updateOutput);
            this.updateOutput($nestable1.data("output", n("#nestable_list_1_output")));
        }
        
        if ($nestable2.length) {
            $nestable2.nestable({ group: 1 }).on("change", this.updateOutput);
            this.updateOutput($nestable2.data("output", n("#nestable_list_2_output")));
        }
        
        if ($nestable3.length) {
            $nestable3.nestable();
        }

        n("#nestable_list_menu").on("click", function(t) {
            var e = n(t.target).data("action");
            if (e === "expand-all") {
                n(".dd").nestable("expandAll");
            }
            if (e === "collapse-all") {
                n(".dd").nestable("collapseAll");
            }
        });
    };

    n.Nestable = new t();
    n.Nestable.Constructor = t;

}(window.jQuery), function() {
    "use strict";
    
    if (window.jQuery && window.jQuery.Nestable && typeof window.jQuery.Nestable.init === 'function') {
        window.jQuery.Nestable.init();
    } else {
        console.error("Error: window.jQuery.Nestable.init no está definida.");
    }
}();
