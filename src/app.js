import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

$(document).ready(function() {
    var appView = new ApplicationView({
        el: $('body'),
    });

    appView.render();
});
