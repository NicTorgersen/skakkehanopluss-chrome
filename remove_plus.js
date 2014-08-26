(function ($) {

    // to do: clean up

    $(document).ready(function () {

        var targets = $('.article-content .df-img-skin-pluss'),
            page = window.location.host,
            parent_nodes = [],
            count = 0;

        $.each(targets, function (index, element) {
            if (typeof $(element).parent('.article-extract') !== 'undefined') {
                parent_nodes.push($(this).closest('.article-extract'));
            }

            count++;

            if (typeof $(element).parent('.df-container') !== 'undefined') {
                parent_nodes.push($(this).closest('.df-container'));
            }

            count++;
        });
        for (node in parent_nodes) {
            if (parent_nodes[node].length > 0 && typeof parent_nodes[node] !== 'undefined') {
                parent_nodes[node].css('display', 'none');
                parent_nodes[node] = undefined;
            }
        }
    });
})(jQuery);