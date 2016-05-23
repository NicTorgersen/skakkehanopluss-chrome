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

            case "www.varden.no":
                var targets = $('.lastImg');

                $.each(targets, function (index, element) {
                    count++;
                    elements.push($(this).closest('article'));
                });

                break;

            case "www.vg.no":
                var targets = [$('.article-content .df-img-skin-pluss'), $('#pluss-teaser')];

                $.each(targets, function (index, elmts) {
                    $.each(elmts, function (index, element) {
                        if (typeof $(element).parent('.article-extract') !== 'undefined') {
                            count++;
                            elements.push($(this).closest('.article-extract'));
                        } else if (typeof $(element).parent('.df-container') !== 'undefined') {
                            elements.push($(this).closest('.df-container'));
                        } else if (typeof $(element).parent('.articles') !== 'undefined') {
                            elements.push($(this));
                        }
                    });
                });

                break;

            case "www.ta.no":
            case "www.gjengangeren.no":
            case "www.tb.no":
                var targets = $('.df-skin-paywall');
                $.each(targets, function (index, element) {
                    count++;
                    elements.push($(this));
                });

                break;

            case 'www.dagbladet.no':
                // dagbladet 23.05.2016
                // Plussartikler vises ved et label i sort under artikkelen
                // Labelet er et span-element med klassen "label" og "black"
                //
                // Top-level elementet er et HTML5 element "article"

                var targets = [$('.label.black')];
                var searchTerm = "Dagbladet Pluss";

                $.each(targets, function (index, elms) {
                    $.each(elms, function (index, element) {
                        if ($(element).text() === searchTerm) {
                            elements.push($(element).closest('article'));
                            count++;
                        }
                    });
                });

                break;

            case 'www.adressa.no':
            case 'www.smp.no':
            case 'www.rbnett.no':
                var targets = $('.payed');
                $.each(targets, function (index, element) {
                    elements.push($(this));
                    count++;
                });

                break;

            case 'www.avisa-valdres.no':
            case 'www.tk.no':
                var targets = $('.am-premium-newLogo').closest('.am-gridComp-item');
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
                var currentElement = parent_nodes.elements[node],
                    elementHeight = currentElement.height();



                parent_nodes.elements[node].css('display', 'none');
                parent_nodes.elements[node] = undefined;
            }
        }
    });
})(jQuery);
