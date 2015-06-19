(function ($) {

    // to do: clean up

    function getSiteElements (host) {
        var url = host,
            elements = [],
            count = 0;

        switch (url) {
            case "www.bt.no":
                var targets = $('.df-skin-paywall-closed');
                
                $.each(targets, function (index, element) {
                    elements.push($(this));
                    count++;
                });

                break;

            case "www.vg.no":
                var targets = $('.article-content .df-img-skin-pluss');

                $.each(targets, function (index, element) {
                    if (typeof $(element).parent('.article-extract') !== 'undefined') {
                        count++;
                        elements.push($(this).closest('.article-extract'));
                    }
                    if (typeof $(element).parent('.df-container') !== 'undefined') {
                        elements.push($(this).closest('.df-container'));
                    }
                });

                break;

            case "www.tb.no":
                var targets = $('.df-skin-paywall');
                $.each(targets, function (index, element) {
                    /*if (typeof $(element).parent('.np-modTheme-2') !== 'undefined') {
                        elements.push($(element).closest('.np-modTheme-2'));
                    }*/
                    elements.push($(this));
                    count++;
                });

                break;

            case 'www.dagbladet.no':
                var targets = [$('.plussEmblem').closest('.ddCell'), $('.plussbox_container')];

                $.each(targets, function (index, elms) {
                    $.each(elms, function (index, element) {
                        elements.push($(element));
                        count++;
                    });
                });

                break;

            case 'www.adressa.no':
                var targets = [$('.pluss').closest('.widget'), $('.plussDeck')];

                $.each(targets, function (index, elms) {
                    $.each(elms, function (index, element) {
                        elements.push($(element));
                        count++;
                    });
                });

                break;
            
            case 'www.smp.no':
            case 'www.rbnett.no':
                var targets = $('.payed');
                $.each(targets, function (index, element) {
                    elements.push($(this));
                    count++;
                });
                
                break;
                
            case 'www.tk.no':
                var targets = $('.am-premium-logo').closest('.am-articleEntry');
                $.each(targets, function (index, element) {
                    elements.push($(this));
                    count++;
                });
        }
        return {
            elements: elements,
            count: count
        };
    }

    $(document).ready(function () {
        var site = window.location.host,
            parent_nodes = getSiteElements(site),
            count = parent_nodes.count;

        chrome.runtime.sendMessage({fromCS: true, type: 'main', url: site, objectsFound: count});

        for (node in parent_nodes.elements) {
            if (parent_nodes.elements[node].length > 0 && typeof parent_nodes.elements[node] !== 'undefined') {
                parent_nodes.elements[node].css('display', 'none');
                parent_nodes.elements[node] = undefined;
            }
        }
    });
})(jQuery);