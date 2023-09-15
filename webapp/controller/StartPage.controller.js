sap.ui.define(['com/postmanui/controller/BaseController'], function(BaseController) {
  'use strict';

  return BaseController.extend('com.postmanui.controller.StartPage', {
    onInit: function() {
      BaseController.prototype.init.apply(this, arguments);
    },
  });
});
