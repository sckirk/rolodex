import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.template = options.template;
    },

    render: function() {
        console.log(this.model.attributes);
        var html = this.template({contact: this.model.attributes});
        this.$el.html(html);

        this.delegateEvents(); // this re-attaches DOM event listeners to our 'brand new' HTML every time we re-render the view

        return this;
    },

    events: {
        'click': 'showHandler'
    }, 

    showHandler: function(event) {
        console.log('showHandler called');
        event.stopPropagation();
        this.trigger('show', this.model);
    }
});

export default ContactView;
