import Ember from 'ember';

const {
    Route,
    inject: { service },
    get
} = Ember;

export default Route.extend({
  fooBar: service(),
  session: service(),
  deferredTransition: service(),
  actions: {
      setTheThing() {
        console.log('setting property');
        let fooBar = Ember.get(this, 'fooBar');
        fooBar.setProperty('monkey');
      },
      loginUser() {
        get(this, 'session').login();
        let attemptedTranstition = get(this, 'deferredTransition').getTransition();
        if (attemptedTranstition) {
          attemptedTranstition.retry();
        }
      }
  }
});
