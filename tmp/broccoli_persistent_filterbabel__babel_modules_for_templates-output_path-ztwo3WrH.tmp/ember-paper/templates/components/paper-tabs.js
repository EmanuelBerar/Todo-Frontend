define("ember-paper/templates/components/paper-tabs", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "wqcegnSX", "block": "{\"statements\":[[9,\"md-tabs-wrapper\",{\"attrs\":[[16,\"class\",[33,[\"if\"],[[28,[\"shouldStretch\"]],\"md-stretch-tabs\"],null],null]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"shouldPaginate\"]]],null,{\"statements\":[[0,\"    \"],[9,\"md-prev-button\",{\"attrs\":[[15,\"role\",\"button\"],[16,\"class\",[33,[\"unless\"],[[28,[\"canPageBack\"]],\"md-disabled\"],null],null],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"previousPage\"],null],null]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n      \"],[1,[33,[\"paper-icon\"],[\"keyboard-arrow-left\"],null],false],[0,\"\\n    \"]]}],[0,\"\\n    \"],[9,\"md-next-button\",{\"attrs\":[[15,\"role\",\"button\"],[16,\"class\",[33,[\"unless\"],[[28,[\"canPageForward\"]],\"md-disabled\"],null],null],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"nextPage\"],null],null]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n      \"],[1,[33,[\"paper-icon\"],[\"keyboard-arrow-left\"],null],false],[0,\"\\n    \"]]}],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[9,\"md-tabs-canvas\",{\"attrs\":[[16,\"class\",[34,[[33,[\"if\"],[[28,[\"shouldPaginate\"]],\"md-paginated\"],null],\" \",[33,[\"if\"],[[28,[\"shouldCenter\"]],\"md-center-tabs\"],null]]]],[15,\"tabindex\",\"-1\"],[15,\"role\",\"tablist\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n    \"],[9,\"md-pagination-wrapper\",{\"attrs\":[[16,\"class\",[33,[\"if\"],[[28,[\"shouldCenter\"]],\"md-center-tabs\"],null],null],[16,\"style\",[33,[\"if\"],[[28,[\"shouldPaginate\"]],[28,[\"paginationStyle\"]]],null],null]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n\\n      \"],[18,\"default\",[[33,[\"hash\"],null,[[\"tab\"],[[33,[\"component\"],[\"paper-tab\"],[[\"noInk\",\"selected\",\"onSelect\"],[[28,[\"noInk\"]],[28,[\"selected\"]],[33,[\"action\"],[[28,[null]],\"onChange\"],null]]]]]]]]],[0,\"\\n\\n\"],[6,[\"unless\"],[[28,[\"noInkBar\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"paper-ink-bar\"],null,[[\"movingRight\",\"left\",\"right\"],[[28,[\"movingRight\"]],[28,[\"inkBarLeft\"]],[28,[\"inkBarRight\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n    \"]]}],[0,\"\\n  \"]]}],[0,\"\\n\\n\"]]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "ember-paper/templates/components/paper-tabs.hbs" } });
});