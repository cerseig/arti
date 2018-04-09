function initTimeline(){
    var movies = {
        "movie": [
            {
                "titre": "titre1",
                "annee": 1968,
                "description": "jkljkl",
                "image": ""
            },
            {
                "titre": "titre2",
                "annee": 1977,
                "description": "deux",
                "image": ""
            },
            {
                "titre": "titre3",
                "annee": 1999,
                "description": "trois",
                "image": ""
            },
            {
                "titre": "titre4",
                "annee": 2004,
                "description": "quatre",
                "image": ""
            },
            {
                "titre": "titre5",
                "annee": 2014,
                "description": "cinq",
                "image": ""
            },
            {
                "titre": "titre6",
                "annee": 2018,
                "description": "six",
                "image": ""
            }
        ]
    }

    var timeline = document.getElementsByClassName('timeline')[0].parentNode;
    var line = document.getElementsByClassName('timeline-divider')[0];
    var intervalMin,
        intervalMax,
        timelineDuration,
        timelineContainer,
        max,
        min;

    window.onresize = function (event) {
        console.log(timeline.clientWidth)
    };

// Helper function to wrap an element in another HTML element
    function itemWrap(el, wrapper, classes) {
        wrapper.classList.add(classes);
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }

    function getTimelineExtremities(movies) {
        console.log(movies)
        max = movies.movie[0].annee;
        min = movies.movie[0].annee;
        for (var i = 0; i < movies.movie.length; i++) {
            console.log(movies.movie[i].annee)
            if (max < movies.movie[i].annee) {
                max = movies.movie[i].annee
            }
            if (min > movies.movie[i].annee) {
                min = movies.movie[i].annee
            }
        }

        intervalMin = Math.floor(min/10)*10;
        intervalMax = Math.ceil(max/10)*10;
//            timelineDuration = Math.floor((intervalMax - intervalMin)/10);
        timelineDuration = Math.floor(intervalMax - intervalMin);




    }

    function createTimeline(){

        timelineContainer = document.createElement("span");
        timelineContainer.classList.add("timeline-container")
        line.parentNode.insertBefore(timelineContainer, line);

        //markers
        for(var i = 0; i < movies.movie.length; i++){
            var marker = document.createElement("div");
            var position = ((movies.movie[i].annee - intervalMin) * timeline.clientWidth) /timelineDuration;
            console.log(movies.movie[i].annee - intervalMin)
            console.log("cW",timeline.clientWidth)
            console.log("timelineDuration", timelineDuration)

            marker.classList.add("marker")
            marker.style.left = position +"px"
            timelineContainer.appendChild(marker)

            var movieYear = document.createElement('span');
            var movieYearText = document.createTextNode(movies.movie[i].annee.toString());
            marker.appendChild(movieYear)
            movieYear.appendChild(movieYearText)

        }




        // Fin du cas test [ 1 ]
    }
    getTimelineExtremities(movies);
    createTimeline()
//


    function placeTimelineItem() {
        //coordonnées
    }

    function placeAMarker(coordonnees) {

    }

}
