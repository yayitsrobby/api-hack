$(document).ready(function () {
    /*  var sadGenres = ['drama', 'tv movie', 'family'];
      var happyGenres = ['adventure', 'animation', 'comedy', 'family', 'fantasy'];
      var somberGenres = ['crime', 'documentary', 'drama', 'mystery', 'thriller', 'war'];
      var sappyGenres = ['romance', 'tv movie', 'comedy', 'drama', 'family'];
      var scaredGenres = ['horror', 'mystery', 'thriller', 'drama', 'documentary'];
      var angryGenres = ['action', 'crime', 'thriller']; */

    // will populate the html elements and return html
    function showRecs(movieList, credits) {
        // $('.mood-choice').hide();
        var movieResult = $('.template .movie-wrapper').clone();

        var movieTitle = movieResult.find('.title');
        movieTitle.text(movieList.original_title + ' (' + movieList.release_date.slice(0, 4) + ')');

        var movieRatings = movieResult.find('.ratings');
        movieRatings.text(movieList.vote_average);

        var movieDirector = movieResult.find('.director');
        movieDirector.text(credits[0]);

        var movieCast = movieResult.find('.cast');
        movieCast.text(credits[1] + ', ' + credits[2] + ', ' + credits[3]);

        var movieLink = movieResult.find('.movie-image a');
        movieLink.attr('href', 'https://youtube.com/')
        var movieImg = movieResult.find('.movie-image img');
        movieImg.attr('src', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movieList.poster_path);

        console.log(movieList);




        return movieResult;
    }

    function findDirector(credits) {
        return credits.job === 'Director';
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

                var id = value.id;
                var movieUrl = 'http://api.themoviedb.org/3/movie/' + id + '/credits';
                var cast = [];

                $.ajax({
                    method: 'GET',
                    url: movieUrl,
                    dataType: 'jsonp',
                    data: {
                        api_key: 'b036e4fb522494bd075e0c895ed017a0'
                    }
                }).done(function (credits) {
                    console.log("in done");
                    var director = credits.crew.find(findDirector);
                    cast.push(director.name);

                    for (i = 0; i < 3; i++) {
                        cast.push(credits.cast[i].name);
                    }
                    var videoUrl = 'http://api.themoviedb.org/3/movie/' + id + '/videos';
                    $.ajax({
                        method: 'GET',
                        url: videoUrl,
                        dataType: 'jsonp',
                        data: {
                            api_key: 'b036e4fb522494bd075e0c895ed017a0'
                        }
                    }).done(function (trailer) {
                        //console.log(trailer.results[0].key);
                        var trailerLink = 'http://youtu.be/' + trailer.results[0].key;
                    })
                    var moviesQuery = showRecs(value, cast);
                    console.log(moviesQuery);
                    $('.mood-recs').append(moviesQuery);
                });
            });
        });
    }

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
