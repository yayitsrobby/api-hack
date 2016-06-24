$(document).ready(function () {
    /*  var sadGenres = ['drama', 'tv movie', 'family'];
      var happyGenres = ['adventure', 'animation', 'comedy', 'family', 'fantasy'];
      var somberGenres = ['crime', 'documentary', 'drama', 'mystery', 'thriller', 'war'];
      var sappyGenres = ['romance', 'tv movie', 'comedy', 'drama', 'family'];
      var scaredGenres = ['horror', 'mystery', 'thriller', 'drama', 'documentary'];
      var angryGenres = ['action', 'crime', 'thriller']; */

    // will populate the html elements and return html
    function showRecs(movieList) {
        // $('.mood-choice').hide();
        var movieResult = $('.template .movie-wrapper').clone();

        var movieTitle = movieResult.find('.title');
        movieTitle.text(movieList.original_title + ' (' + movieList.release_date.slice(0, 4) + ')');

        var movieRatings = movieResult.find('.ratings');
        movieRatings.text(movieList.vote_average);

        var movieDirector = movieResult.find('.director');
        movieDirector.text(movieList.)

        console.log(movieList);


        return movieResult;

    }

    // will query the api and receive the object and print
    // the html
    function getMoodRecs(genre) {
        $.ajax({
            method: 'GET',
            url: 'http://api.themoviedb.org/3/discover/movie',
            dataType: 'jsonp',
            data: {
                api_key: 'b036e4fb522494bd075e0c895ed017a0',
                with_genres: genre
            }
        }).done(function (movies) {
            $.each(movies.results, function (index, value) {
                var moviesQuery = showRecs(value);
                // $('.')
                $('.mood-recs').append(moviesQuery);
            });
        });
    };

    function moodGenres(mood) {
        var genre;
        if (mood === 'sad') {
            genre = 18;
        } else if (mood === 'happy') {
            genre = 16;
        } else if (mood === 'somber') {
            genre = 80;
        } else if (mood === 'sappy') {
            genre = 10749;
        } else if (mood === 'scared') {
            genre = 27;
        } else {
            genre = 28;
        }
        getMoodRecs(genre);
    }

    // will take whatever tags and query the api and receive the
    // object and print the html
    function getClassicRecs(tags) {
        // showRecs();
    }

    // listen to button click for which method
    $('.mood-button').on('click', function () {
        event.preventDefault();
        $('.splash-page').hide();
        $('.mood-section').show();
    });

    $('.classic-button').on('click', function () {
        event.preventDefault();
        $('.splash-page').hide();
        $('.classic-section').show();
    });

    // listen for Mood dropdown
    $('.mood-choice').change(function () {
        $('.mood-recs').empty();
        var selectedMood = $(this).find(':selected').val();
        moodGenres(selectedMood);
    });

    // listen for Classic Search submit button
    $('.search-submit').on('click', function () {
        event.preventDefault();
        $('.classic-section').empty();
        var searchQuery = $(this).val();
        // getClassicRecs(searchQuery);
    });
});


/*--- AJAX CALL ---*/

//  $.ajax({
//      method: 'GET',
//      url: 'http://api.themoviedb.org/3/discover/movie',
//      dataType: 'jsonp',
//      data: {
//        api_key: 'b036e4fb522494bd075e0c895ed017a0'
//      }
//    })
//    .done(function (result) {
//      console.log(result);
//    })





// take the value given and pass it into a function that will query
// output the html elements - append to .mood-recs

// listen for submit button
// clear last .classic-recs
// take the value given and pass it into a function that will query
// output the html elements - append to .classic-recs
