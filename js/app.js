// TODO: write out the functions without code in them

$(document).ready(function() {



    // will populate the html elements and return html
    function showRecs() {

    }

    // will query the api and receive the object and print
    // the html
    function getMoodRecs(mood) {
        $.ajax({
            method: 'GET',
            url: '',
            dataType: 'json',
            data: {

            }
        }).done(function(mood) {

            showRecs();
        });
    };

    // will take whatever tags and query the api and receive the
    // object and print the html
    function getClassicRecs(tags) {
        // showRecs();
    }

    // listen to button click for which method
    $('.mood-button').on('click', function() {
        event.preventDefault();
        $('.splash-page').hide();
        $('.mood-section').show();
    });

    $('.classic-button').on('click', function() {
        event.preventDefault();
        $('.splash-page').hide();
        $('.classic-section').show();
    });

    // listen for Mood dropdown
    $('.mood-choice').change(function() {
        $('.mood-recs').empty();
        var selectedMood = $(this).find(':selected').val();
        getMoodRecs(selectedMood);
    });

    // listen for Classic Search submit button
    $('.search-submit').on('click', function() {
        event.preventDefault();
        $('.classic-section').empty();
        var searchQuery = $(this).val();
        getClassicRecs(searchQuery);
    });

    // take the value given and pass it into a function that will query
    // output the html elements - append to .mood-recs

    // listen for submit button
    // clear last .classic-recs
    // take the value given and pass it into a function that will query
    // output the html elements - append to .classic-recs
});