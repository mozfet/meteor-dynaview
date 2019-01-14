// imports
import { Session } from 'meteor/session'
import { EJSON } from 'meteor/ejson'
// import { Log } from 'meteor/mozfet:meteor-logs'
import './dynaViewLauncher.html'

Template.DynaViewLauncher.events({
  "click .js-dynaview-launcher": function(event, instance){
    // Log.log(['debug', 'dynaview'], 'DynaView launcher template:', instance.data.dvTemplate)
    // Log.log(['debug', 'dynaview'], 'DynaView launcher data:', instance.data.dvData)
    Session.set('DynaView', EJSON.stringify({
      template: instance.data.dvTemplate,
      data: instance.data.dvData
    }))
  }
})
