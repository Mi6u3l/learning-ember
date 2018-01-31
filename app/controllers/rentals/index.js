import Ember from 'ember';

const {
  Controller,
  inject: { service },
  computed,
  get
} = Ember;

export default Controller.extend({
  fooBar: service(),
  session: service(),
  isAuthenticated: computed('session.authenticated', {
    get() {
      let isAuthenticated = get(this, 'session').isAuthenticated();
      console.log('is ' + isAuthenticated);
      return isAuthenticated;
    }
  }),
  
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
})