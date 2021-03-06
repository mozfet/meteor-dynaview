// imports
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
// import { Log } from 'meteor/mozfet:meteor-logs'
import './dynaViewMaterialModal.html'

// when created
Template.DynaViewMaterialModal.onRendered(() => {

  // init modal
  const instance = Template.instance()
  const selector = '#'+instance.data.id
  const element = $(selector)
  M.Modal.init(element, {
    dismissible: true,
    onCloseEnd() {
      // Log.log(['debug', 'dynaview'], `Modal closed`)
      Session.set('DynaView', undefined)
    }
  })
  const modal = M.Modal.getInstance(element)
  modal.open()
})
