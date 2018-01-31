import Ember from 'ember';

const {
    Service,
    get,
    set
} = Ember;

export default Service.extend({
    authenticated: false,

    login() {
        console.log('logging in');
        set(this, 'authenticated', true);
        console.log(get(this, 'authenticated'));
    },

    logout() {
        set(this, 'authenticated', false);
    },

    isAuthenticated() {
        console.log('is authenticated');
        return get(this, 'authenticated');
    }
});
