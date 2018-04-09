import TimelineMarker from './TimelineMarker'



var timeline = document.getElementsByClassName('timeline')[0].parentNode;
var line = document.getElementsByClassName('timeline-divider')[0];
var intervalMin,
    intervalMax,
    timelineDuration,
    timelineContainer,
    max,
    min;
var markers = [];

var movies={
        "movie": [
            {
                "titre": "titre1",
                "annee": 1968,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc elit, volutpat hendrerit tortor ac, congue varius elit. ",
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

class Timeline{

  constructor(){
      this.getTimelineExtremities(movies);
      this.createTimeline();
  }
}

Timeline.prototype.getTimelineExtremities = function (movies){
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
};

Timeline.prototype.createTimeline = function(){
    timelineContainer = document.createElement("span");
    timelineContainer.classList.add("timeline-container")
    line.parentNode.insertBefore(timelineContainer, line);

    //markers
    for(var i = 0; i < movies.movie.length; i++){
        var marker = new TimelineMarker(movies.movie[i].titre.toString(), movies.movie[i].annee.toString(), movies.movie[i].description.toString());
        //var marker = "";
        markers.push(marker)
        // marker.eventLister()
        //________________________________________ HIDE ITEM ___________________________________________

        //marker.movie_bubble.style.display = "none"
        // Listener on Marker
        console.log(marker.ts)
    }

};
