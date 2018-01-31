import Ember from 'ember';

const {
    Service,
    get,
    set
} = Ember;

export default Service.extend({
    attemptedTransition: null,

    setTransition(transition) {
        set(this, 'attemptedTransition', transition);
    },

    getTransition() {
        return get(this, 'attemptedTransition');
    }

});
