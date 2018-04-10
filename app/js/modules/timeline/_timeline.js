export {initTimeline};

var timeline = document.getElementsByClassName('timeline')[0].parentNode;
var line = document.getElementsByClassName('timeline-divider')[0];
var intervalMin,
    intervalMax,
    timelineDuration,
    timelineContainer,
    max,
    min;
var markers = [];
var zIndex = 2
var movies={
        "movie": [
            {
                "titre": "titre1",
                "annee": 1968,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc elit, volutpat hendrerit tortor ac, congue varius elit. ",
                "image": "../../images/movies/oz_SummerWars.jpg"
            },
            {
                "titre": "titre2",
                "annee": 1977,
                "description": "deux",
                "image": "../../images/movies/oz_SummerWars.jpg"
            },
            {
                "titre": "titre3",
                "annee": 1999,
                "description": "trois",
                "image": "../../images/movies/oz_SummerWars.jpg"
            },
            {
                "titre": "titre4",
                "annee": 2004,
                "description": "quatre",
                "image": "../../images/movies/oz_SummerWars.jpg"
            },
            {
                "titre": "titre5",
                "annee": 2014,
                "description": "cinq",
                "image": "../../images/movies/oz_SummerWars.jpg"
            },
            {
                "titre": "titre6",
                "annee": 2018,
                "description": "six",
                "image": "../../images/movies/oz_SummerWars.jpg"
            }
        ]
    }

function initTimeline(){
    getTimelineExtremities(movies);
    createTimeline();
}

var getTimelineExtremities = function (movies){
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

var createTimeline = function(){
    timelineContainer = document.createElement("span");
    timelineContainer.classList.add("timeline-container")
    line.parentNode.insertBefore(timelineContainer, line);

    //markers
    for(var i = 0; i < movies.movie.length; i++){
        var marker = new TimelineMarker(
            movies.movie[i].titre.toString(),
            movies.movie[i].annee.toString(),
            movies.movie[i].description.toString(),
            movies.movie[i].image.toString()
        );

        markers.push(marker)
    }
};

/// CLASSES

/////////////// CLASS MARKER


class TimelineMarker {

    constructor(title, year, description, source){
        this.marker = document.createElement("div");
        this._title = title;
        this._year = year;
        this._description = description
        this._source = source
        this.position = ((year - intervalMin) * timeline.clientWidth) / timelineDuration;
        console.log("hel")

        this.marker.classList.add("marker")
        this.marker.style.left = this.position + "px"
        timelineContainer.appendChild(this.marker)

        this.movieYear = document.createElement('span');
        this.movieYearText = document.createTextNode(this._year);
        this.marker.appendChild(this.movieYear)
        this.movieYear.appendChild(this.movieYearText)

        this.bubble = new TimelineBubble(this._title,this.position, this._description, this._source)
        this.listenOnMarker(this.bubble)

        this.description_bubble = new Description(this._description, this.position)
        this.bubble.listenOnBubble(this.bubble.img_more, this.description_bubble.description_bubble)

    }

    listenOnMarker(bubble){
        this.marker.addEventListener("click", function(){
            bubble.hideOrDisplayBubble(true)
        })
    }

}

/////////////// CLASS BUBBLE

class Bubble{
    constructor(){

    }

    listenOnBubble(target, el){
        target.addEventListener("click", function(){
            switch (target.classList.value){
                case "more":
                    console.log("f",target.classList.value)

                    el.style.opacity = "1"
                    el.style.visibility = "visible"
                    zIndex++;
                    el.style.zIndex =zIndex

                    break
                case "web":
                    console.log("w",target.classList.value)
                    break
                case "img_container":
                    el.style.opacity = "0"
                    el.style.visibility = "hidden"
                    break

                case "close":
                    el.style.opacity = "0"
                    el.style.visibility = "hidden"
                    break
                default:
                    console.log("didn't work")
                    break

            }

            // bubble.hideOrDisplayBubble(true)

        })
    }
}

class TimelineBubble extends Bubble{

    constructor(title, position, description, imgSrc){
        super()
        this.position = position
        this.description = description
        this.img_src = imgSrc

        this.movie_bubble = document.createElement("div");
        this.movie_bubble.classList.add("timeline_item")
        this.movie_bubble.style.left = this.position + "px"
        this.movie_bubble.style.visibility = "hidden"


        //marker.appendChild(movie_bubble)
        timelineContainer.appendChild(this.movie_bubble)

        this.movie_bubble_content = document.createElement("div");
        this.movie_bubble_content.classList.add("timeline_content")
        this.movie_bubble.appendChild(this.movie_bubble_content)

        //________________________________________ HEADER ___________________________________________

        this.movie_bubble_content_img = document.createElement("div");
        this.bubble_content_header(title)

        //________________________________________ BODY ___________________________________________
        this.bubble_content_body(this.img_src)

        //________________________________________ FOOTER ___________________________________________
        this.bubble_content_footer()

        this.listenOnBubble(this.movie_bubble_content_img, this.movie_bubble)
        console.log(this.movie_bubble)
        console.log("this.movie_bubble")
    }


    bubble_content_header(title){
        // <div class="timeline__content__header">
        this.movie_bubble_content_header = document.createElement("div");
        this.movie_bubble_content_header.classList.add("timeline_content_header")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_header)

        // <h2>2018</h2>
        this.movie_bubble_content_title = document.createElement("h2");
        this.movie_bubble_content_header.appendChild(this.movie_bubble_content_title)
        this.movie_bubble_content_title.appendChild(document.createTextNode(title))

        //<div class="img__container">

        this.movie_bubble_content_img.classList.add("img_container")
        this.movie_bubble_content_header.appendChild(this.movie_bubble_content_img)

        this.img_close = document.createElement("img")
        this.img_close.src = "../../images/icons/icon_close.svg"
        this.img_close.classList.add("close")
        this.movie_bubble_content_img.appendChild(this.img_close)

    };

    bubble_content_body(imgSrc){
        this.movie_bubble_content_body = document.createElement("div");
        this.movie_bubble_content_body.classList.add("timeline_content_body")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_body)

        this.img = document.createElement("img")
        this.img.src = imgSrc
        this.movie_bubble_content_body.appendChild(this.img)

        this.summary = document.createElement("p")
        this.movie_bubble_content_body.appendChild(this.summary)

        this.movie_bubbleText = document.createTextNode(this.description);
        this.summary.appendChild(this.movie_bubbleText)
    }

    bubble_content_footer(){
        this.movie_bubble_content_footer = document.createElement("div");
        this.movie_bubble_content_footer.classList.add("timeline_content_footer")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_footer)

        this.movie_bubble_content_footer_container = document.createElement("div");
        this.movie_bubble_content_footer_container.classList.add("timeline_content_footer_container")
        this.movie_bubble_content_footer.appendChild(this.movie_bubble_content_footer_container)

        this.more_content = document.createElement("div");
        this.more_content.classList.add("more_content")
        this.movie_bubble_content_footer_container.appendChild(this.more_content)

        this.img_more = document.createElement("img")
        this.img_more.classList.add("more")
        this.img_more.src = "../../images/icons/icon_more.svg"
        this.more_content.appendChild(this.img_more)

        this.web_content = document.createElement("div");
        this.web_content.classList.add("web_container")
        this.movie_bubble_content_footer_container.appendChild(this.web_content)

        this.img_web = document.createElement("img")
        this.img_web.classList.add("web")
        this.img_web.src = "../../images/icons/icon_web.svg"
        this.web_content.appendChild(this.img_web)

        //this.listenOnBubble(this.img_more, this.web_content) ////
        this.listenOnBubble(this.img_web, this.web_content)
    }

    hideOrDisplayBubble(visibility){
        if(visibility === true){
            this.movie_bubble.style.visibility = "visible"
            this.movie_bubble.style.opacity = "1"
            zIndex++;
            this.movie_bubble.style.zIndex =zIndex
        }else{
            this.movie_bubble.style.opacity = "0"
            this.movie_bubble.style.visibility = "hidden"
        }
    }






}

class Description extends Bubble{
    constructor(description, position){
        super()
        this.position = position
        this.description_bubble = document.createElement('div')
        this.description_bubble.style.left=this.position+ "px"
        this.description_bubble.classList.add('description_bubble')
        timelineContainer.appendChild(this.description_bubble)
        this.img_close = document.createElement("img")
        this.img_close.src = "../../images/icons/icon_close.svg"
        this.img_close.classList.add("close")

        this.description_text = document.createElement('h2')
        console.log(description)
        this.description_text_content = document.createTextNode(description)
        this.description_text.appendChild(this.description_text_content)
        this.description_bubble.appendChild(this.img_close)
        this.description_bubble.appendChild(this.description_text)

        this.listenOnBubble(this.img_close, this.description_bubble)

    }
}

