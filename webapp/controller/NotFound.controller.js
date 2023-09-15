sap.ui.define(['com/postmanui/controller/BaseController'], function(BaseController) {
  'use strict';

  return BaseController.extend('com.postmanui.controller.NotFound', {
    /**
     * Navigates to the masterPR when the link is pressed
     * @public
     */
    onLinkPressed: function() {
      this.getRouter().navTo('StartPage');
    },
  });
});
