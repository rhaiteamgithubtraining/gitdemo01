/**Historical changes 
 * 1) Base copy of master
 * 2) Base copy of resource 01 - revision 01.
 * 3) Base copy of resource 01 - revision 02.
 * 4) Rebase this version onto the master.
*/

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Git_prjGitExploration01/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Git_prjGitExploration01.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});