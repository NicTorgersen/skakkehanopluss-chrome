(function ($) {

    // to do: clean up
    function getSiteElements (host) {
        var url = host,
            elements = [],
            count = 0;

        console.log(url);
        switch (url) {
            case "www.vg.no":
                var targets = $('.article-content .df-img-skin-pluss');

                $.each(targets, function (index, element) {
                    if (typeof $(element).parent('.article-extract') !== 'undefined') {
                        elements.push($(this).closest('.article-extract'));
                    }

                    count++;

                    if (typeof $(element).parent('.df-container') !== 'undefined') {
                        elements.push($(this).closest('.df-container'));
                    }

                    count++;
                });

                break;
            case "www.tb.no":
                var targets = $('.fw-pluss-label').closest('article');
                $.each(targets, function (index, element) {
                    if (typeof $(element).parent('.np-modTheme-2') !== 'undefined') {
                        elements.push($(element).closest('.np-modTheme-2'));
                    }
                    elements.push($(this));
                });
                break;
            case 'www.dagbladet.no':
                var targets = [$('.plussEmblem').closest('.ddCell'), $('.plussbox_container')];

                $.each(targets, function (index, elms) {
                    $.each(elms, function (index, element) {
                        elements.push($(element));
                    });
                });

                count++;
                break;
        }
        return elements;
    }

    $(document).ready(function () {
        var site = window.location.host,
            parent_nodes = getSiteElements(site);

        for (node in parent_nodes) {
            if (parent_nodes[node].length > 0 && typeof parent_nodes[node] !== 'undefined') {
                parent_nodes[node].css('display', 'none');
                parent_nodes[node] = undefined;
            }
        }

        console.log("Removed plus from " + site);
    });
})(jQuery);