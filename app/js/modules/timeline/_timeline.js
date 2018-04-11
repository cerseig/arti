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
            "title" : "Westworld",
            "annee" : 1973,
            "author" : "Michael Crichton",
            "description" : "Westworld splits its time between various parts of futuristic theme park called Delos where guests get to live in recreations of three different time periods: the old west, medieval Europe, and ancient Pompeii. The three words are populated with androids the guests can fight and have sex with, all without the pesky morals that might come up if there were “real” people involved.\n \n In the movie, a virus begins spreading through the androids. A female android refuses a guest’s “advances” and a knight doesn’t let the guest win their sword fight.\n",
            "image" : "../../images/movies/articifial_consciousness_movie_westworld-1973.gif",
            "url" : "https://www.nytimes.com/1973/11/22/archives/the-screen-westworld-robots-and-fantasies-in-film-by-crichton-the.html",
            "articleId" : 1
        },
        {
            "title" : "Summer Wars - Platform “Oz world”",
            "annee" : 2010,
            "author" : "Mamoru Hosoda",
            "description" : "Summer Wars presents us with two different settings and conflicts. Oz, an internet-based society in which tens of millions of people and businesses around the world, represented by their own custom avatars can interact with each other in all manner of activities. The other contrasting setting is an old-style Japanese mansion in a calm countryside area. In the movie Oz is hacked by an intelligent machine, stealing people’s account.\n \nIs the movie trying to warn us from technology becoming so ingrained in our lives?\n",
            "image" : "../../images/movies/computer_games.gif",
            "url" : "http://animeyume.com/blog/2010/03/08/the-message-of-summer-wars-two-worlds/",
            "articleId" : 2
        },
        {
            "title" : "Star Wars - R2-D2",
            "annee" : 1977,
            "author" : "George Lucas",
            "description" : "Computers have bodies different from ours. But they still can give the appearance of having emotions. R2D2 doesn’t have a humanoid body, far from it, but the fact that he expresses himself with “facial” display or cute noises makes him endearing. Thus, the issue is not one of the body, or of the body’s capabilities to express, but the issue is a much harder one: how to get machines to express emotion in an appropriate way? ",
            "image" : "../../images/movies/emotion_expression.gif",
            "url" : "https://affect.media.mit.edu/pdfs/03.picard.pdf",
            "articleId" : 2
        },
        {
            "title" : "Blade Runner - Voight-Kampff",
            "annee" : 1982,
            "author" : "Ridley Scott",
            "description" : "The Voight-Kampff is a device inspired by lie detectors and the famous Turing test. It is used by the \"Blade Runners\", policemen in charge of the withdrawal of the illegal replicants, to determine if an individual is a replicant or a human being. This device measures biological responses to stimuli to assess the replicators' potential for empathy. Their eyes shine when they are troubled.",
            "image" : "../../images/movies/face_recognition_movie.gif",
            "url" : "",
            "articleId" : 4
        }
    ],

    "article":[
        {
            "title" : "Can machines achieve emotional intelligence ?",
            "date" : "October 2017",
            "author" : "Jen Clark",
            "description" : "A fully autonomous, conscious, decision-making humanoid bot is, at the moment, the stuff of fiction. And yet, ‘affective computing’, or the capability to recognize, respond to and even emulate human emotions is present in some of today’s machines. So to what extent can machines exhibit emotional intelligence? And how are these capabilities being put to use?",
            "image" : "../../images/movies/articifial_consciousness_article.gif",
            "url" : "https://www.ibm.com/blogs/internet-of-things/affective-computing/",
            "source" : "IBM blog",
            "articleId" : 1
        },
        {
            "title" : "Seizure during a chat in Virtual Reality",
            "date" : "January 2018",
            "author" : "Emanuel Maiberg",
            "description" : "VRChat is a free-to-play massively multiplayer online virtual reality video game [...]. It allows players to interact with others as 3D character models. VRChat users were goofing off in one of the app's virtual environments when suddenly one of the avatars in the room, a black and red robot, fell to the floor and began twitching. At first, it's unclear if it was just a bug or someone goofing off, which is what many VRChat users like to do.",
            "image" : "../../images/movies/computer_games.gif",
            "url" : "https://motherboard.vice.com/en_us/article/ne4myg/vrchat-seizure ",
            "source" : "Vice (Motherboard)",
            "articleId" : 2
        },

        {
            "title" : "Seizure during a chat in Virtual Reality",
            "date" : "January 2018",
            "author" : "Emanuel Maiberg",
            "description" : "VRChat is a free-to-play massively multiplayer online virtual reality video game [...]. It allows players to interact with others as 3D character models. VRChat users were goofing off in one of the app's virtual environments when suddenly one of the avatars in the room, a black and red robot, fell to the floor and began twitching. At first, it's unclear if it was just a bug or someone goofing off, which is what many VRChat users like to do.",
            "image" : "../../images/movies/computer_games.gif",
            "url" : "https://motherboard.vice.com/en_us/article/ne4myg/vrchat-seizure ",
            "source" : "Vice (Motherboard)",
            "articleId" : 3
        },
        {
            "title" : "The scary science behing Google Arts & Culture app",
            "date" : "January 2018",
            "author" : "Arwa Mahdawi",
            "description":"Google Arts & Culture app released an option that allows Google to find the artwork you most resemble – but it also supports the rise of the surveillance state [...] The app may be good fun, but it is also fundamentally frightening: Google’s latest experiment, you see, says less about art than it does the burgeoning science of facial recognition technology.\n While Google’s museum doppelgangers aren’t exactly 100% accurate, facial recognition technology has become increasingly sophisticated over the past few years and is fast becoming a pervasive part of our lives. [...]",
            "image" : "../../images/movies/face_recognition_article.jpg",
            "url" : "https://www.theguardian.com/commentisfree/2018/jan/16/find-your-art-doppelganger-facial-recognition-technology-frightening",
            "source" : "The Guardian",
            "articleId" : 4
        }

    ]


}

function initTimeline(){
    getTimelineExtremities(movies);
    createTimeline();
}

var getTimelineExtremities = function (movies){

    max = movies.movie[0].annee;
    min = movies.movie[0].annee;
    for (var i = 0; i < movies.movie.length; i++) {

        if (max < movies.movie[i].annee) {
            max = movies.movie[i].annee
        }
        if (min > movies.movie[i].annee) {
            min = movies.movie[i].annee
        }
    }

    intervalMin = Math.floor(min/10)*10;
    intervalMax = (Math.ceil(max/10)*10 )+10;
//            timelineDuration = Math.floor((intervalMax - intervalMin)/10);
    timelineDuration = Math.floor(intervalMax - intervalMin);
};

var createTimeline = function(){
    timelineContainer = document.createElement("span");
    timelineContainer.classList.add("timeline-container")
    line.parentNode.insertBefore(timelineContainer, line);

    //markers
    for(var i = 0; i < movies.movie.length; i++){
        var movie = movies.movie[i]
        var article;

        for(var j = 0; j < movies.article.length; j++){
            console.log("hello")
            if(movie.articleId === movies.article[j].articleId){
                article = movies.article[j]
            }
        }


        var marker = new TimelineMarker(movie, article);
        markers.push(marker)
    }
};



/// CLASSES

/////////////// CLASS MARKER


class TimelineMarker {

    constructor(movie, article){
        console.log(movie)
        console.log(article)
        this.marker = document.createElement("div");
        this.title = movie.title.toString();


        console.log(movie.annee)
        this.description = movie.description.toString()

        this.source = movie.image.toString()
        this.position = ((movie.annee - intervalMin) * timeline.clientWidth) / timelineDuration;


        this.marker.classList.add("marker")
        this.marker.style.left = this.position + "px"
        timelineContainer.appendChild(this.marker)

        this.movieYear = document.createElement('span');
        this.movieYearText = document.createTextNode(movie.annee.toString());
        this.marker.appendChild(this.movieYear)
        this.movieYear.appendChild(this.movieYearText)

        this.bubble = new TimelineBubble(
            movie.title.toString(),
            this.position,
            movie.description.toString(),
            movie.image.toString(),
            "movie",
            movie.annee
        )
        this.listenOnMarker(this.bubble)

        this.description_bubble = new Description(this.description, this.position)
        this.bubble.listenOnBubble(this.bubble.img_more, this.description_bubble.description_bubble)


        this.article = new TimelineBubble(
            article.title.toString(),
            this.position,
            article.description.toString(),
            article.image.toString(),
            "that_article",
            article.date.toString())
        this.bubble.listenOnBubble(this.bubble.img_article, this.article.movie_bubble)
        // Articles

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


                    el.style.opacity = "1"
                    el.style.visibility = "visible"
                    zIndex++;
                    el.style.zIndex =zIndex

                    break
                case "web":

                    el.style.opacity = "1"
                    el.style.visibility = "visible"
                    zIndex++;
                    el.style.zIndex =zIndex
                    break

                case "that_article":

                    el.style.opacity = "1"
                    el.style.visibility = "visible"
                    zIndex++;
                    el.style.zIndex =zIndex
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

                    break

            }

            // bubble.hideOrDisplayBubble(true)

        })
    }
}

class TimelineBubble extends Bubble{

    constructor(title, position, description, imgSrc, type, date){
        super()

        this.position = position
        this.description = description

        this.movie_bubble = document.createElement("div");
        this.movie_bubble.classList.add("timeline_item")
        this.movie_bubble.classList.add(type)

        if(type === "movie"){
            this.movie_bubble.style.left = this.position + "px"  ////////////// Change
        }else{
            this.movie_bubble.style.left =this.position + 450 +"px"
            this.movie_bubble.style.top = "40px";
        }

        this.movie_bubble.style.visibility = "hidden"

        timelineContainer.appendChild(this.movie_bubble)

        this.movie_bubble_content = document.createElement("div");
        this.movie_bubble_content.classList.add("timeline_content")
        this.movie_bubble.appendChild(this.movie_bubble_content)

        //________________________________________ HEADER ___________________________________________

        this.movie_bubble_content_img = document.createElement("div");
        this.bubble_content_header(title, date, type)

        //________________________________________ BODY ___________________________________________
        this.bubble_content_body(imgSrc,type)

        //________________________________________ FOOTER ___________________________________________
        this.bubble_content_footer(type)

        this.listenOnBubble(this.movie_bubble_content_img, this.movie_bubble)

    }


    bubble_content_header(title, date, type){

        this.type = type
        // <div class="timeline__content__header">
        this.movie_bubble_content_header = document.createElement("div");
        this.movie_bubble_content_header.classList.add("timeline_content_header")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_header)


        // <h2>2018</h2>

        if(this.type !=="movie"){
            this.movie_bubble_content_date = document.createElement("h2");
            this.movie_bubble_content_header.appendChild(this.movie_bubble_content_date)
            this.movie_bubble_content_date.appendChild(document.createTextNode(date))
        }


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

    bubble_content_body(imgSrc, type){
        this.type = type
        this.movie_bubble_content_body = document.createElement("div");
        this.movie_bubble_content_body.classList.add("timeline_content_body")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_body)

        this.img = document.createElement("img")
        this.img.src = imgSrc

        if(this.type !=="movie"){
            this.img_container_body = document.createElement("div");
            this.movie_bubble_content_body.appendChild(this.img_container_body )
            this.img_container_body.appendChild(this.img)
        }else{
            this.movie_bubble_content_body.appendChild(this.img)
        }




        this.summary = document.createElement("p")
        this.movie_bubble_content_body.appendChild(this.summary)

        this.movie_bubbleText = document.createTextNode(this.description);
        this.summary.appendChild(this.movie_bubbleText)
    }

    bubble_content_footer(type){
        this.type = type
        this.movie_bubble_content_footer = document.createElement("div");
        this.movie_bubble_content_footer.classList.add("timeline_content_footer")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_footer)

        this.movie_bubble_content_footer_container = document.createElement("div");
        this.movie_bubble_content_footer_container.classList.add("timeline_content_footer_container")
        this.movie_bubble_content_footer.appendChild(this.movie_bubble_content_footer_container)

        this.more_content;
        this.img_more

        if(this.type ==="movie"){
            this.article_content = document.createElement("div");
            this.article_content.classList.add("article_content")
            this.movie_bubble_content_footer_container.appendChild(this.article_content)
            this.img_article = document.createElement("img")
            this.img_article.classList.add("that_article")
            this.img_article.src = "../../images/icons/icon_article-orange.svg"
            this.article_content.appendChild(this.img_article)

        }





        this.web_content = document.createElement("div");
        this.web_content.classList.add("web_container")
        this.link = document.createElement('a')
        this.link.appendChild(this.web_content)
        this.link.href = "http://www.google.fr"
        this.link.target = "_blank"
        this.movie_bubble_content_footer_container.appendChild( this.link)

        this.img_web = document.createElement("img")
        this.img_web.classList.add("web")
        this.img_web.src = "../../images/icons/icon_web.svg"
        this.web_content.appendChild(this.img_web)

        if(this.img_article && this.web_content){
            //this.listenOnBubble(this.img_article, this.web_content)
            this.listenOnBubble(this.img_web, this.web_content)
        }

        //this.listenOnBubble(this.img_more, this.web_content) ////




        //MOVIE

        if(this.type ==="movie") {
            this.more_content = document.createElement("div");
            this.more_content.classList.add("more_content")
            this.movie_bubble_content_footer_container.appendChild(this.more_content)
            this.img_more = document.createElement("img")
            this.img_more.classList.add("more")
            this.img_more.src = "../../images/icons/icon_more.svg"
            this.more_content.appendChild(this.img_more)
        }



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
        //this.position = position
        this.description_bubble = document.createElement('div')
        this.description_bubble.style.left= position + 200 +"px"
        this.description_bubble.style.top = "30px";
        this.description_bubble.classList.add('description_bubble')
        timelineContainer.appendChild(this.description_bubble)

        this.description_bubble_content_header = document.createElement("div");
        this.description_bubble_content_header.classList.add("timeline_content_header")

        this.description_bubble_content_title = document.createElement("h2");
        this.description_bubble_content_header.appendChild(this.description_bubble_content_title)
        this.description_bubble_content_title.appendChild(document.createTextNode("suite"))

        this.description_bubble_content_img = document.createElement("div");
        this.description_bubble_content_img.classList.add("img_container")
        this.description_bubble_content_header.appendChild(this.description_bubble_content_img)


        this.img_close = document.createElement("img")
        this.img_close.src = "../../images/icons/icon_close.svg"
        this.img_close.classList.add("close")

        this.description_bubble_content_img.classList.add("img_container")

        this.description_bubble_content_img.appendChild(this.img_close)

        this.description_text = document.createElement('h2')

        this.description_text_content = document.createTextNode(description)
        this.description_text.appendChild(this.description_text_content)


        this.description_bubble.appendChild(this.description_bubble_content_header)
        this.description_bubble.appendChild(this.description_text)

        this.listenOnBubble(this.img_close, this.description_bubble)

    }
}

