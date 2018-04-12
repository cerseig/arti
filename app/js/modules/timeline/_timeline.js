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
var movies=

    {
        "movie": [
            {
                "title" : "2001: A Space Odyssey",
                "annee" : 1968,
                "author" : "Michael Crichton",
                "description" : "HAL-9000 seems to be the most powerful and developed computer in the world. In the film 2001, HAL became operational on 12 January 1992. \n \nHe has the ability to control everything in the spacecraft in order to bring it on Jupiter’s moon. \n \n He is so obsessed with his goal, that he comes to see human astronauts as threats, which triggers his murderous impulses. His neutral and calm way of speaking makes him cold.\n",
                "image" : "images/movies/vocal_ass_m.gif",
                "url" : "https://gizmodo.com/you-can-soon-own-a-hal-9000-replica-that-uses-amazon-al-1823648187",
                "articleId" : 1
            },
            {
                "title" : "Westworld",
                "annee" : 1973,
                "author" : "Michael Crichton",
                "description" : "Westworld splits its time between various parts of futuristic theme park called Delos where guests get to live in recreations of three different time periods: the old west, medieval Europe, and ancient Pompeii. The three words are populated with androids the guests can fight and have sex with, all without the pesky morals that might come up if there were “real” people involved.\n \n In the movie, a virus begins spreading through the androids. A female android refuses a guest’s “advances” and a knight doesn’t let the guest win their sword fight.\n",
                "image" : "images/movies/articifial_consciousness_movie_westworld-1973.gif",
                "url" : "https://www.nytimes.com/1973/11/22/archives/the-screen-westworld-robots-and-fantasies-in-film-by-crichton-the.html",
                "articleId" : 2
            },
            {
                "title" : "Star Wars",
                "annee" : 1977,
                "author" : "George Lucas",
                "description" : "Computers have bodies different from ours. But they still can give the appearance of having emotions. R2D2 doesn’t have a humanoid body, far from it, but the fact that he expresses himself with “facial” display or cute noises makes him endearing. Thus, the issue is not one of the body, or of the body’s capabilities to express, but the issue is a much harder one: how to get machines to express emotion in an appropriate way?\n",
                "image" : "images/movies/emotion_exp_m.gif",
                "url" : "https://affect.media.mit.edu/pdfs/03.picard.pdf",
                "articleId" : 3
            },

            {
                "title" : "Blade Runner - Voight-Kampff",
                "annee" : 1982,
                "author" : "Ridley Scott",
                "description" : "The Voight-Kampff is a device inspired by lie detectors and the famous Turing test. It is used by the \"Blade Runners\", policemen in charge of the withdrawal of the illegal replicants, to determine if an individual is a replicant or a human being. This device measures biological responses to stimuli to assess the replicators' potential for empathy. Their eyes shine when they are troubled.",
                "image" : "images/movies/face_rec_m.gif",
                "url" : "http://www.allocine.fr/film/fichefilm_gen_cfilm=1975.html",
                "articleId" : 4
            },
            {
                "title" : "Ghost in the Shell",
                "annee" : 1995,
                "author" : "Mamoru Oshii",
                "description" : "Motoko Kusanagi, protagonist of the anime and manga Ghost in the Shell, is a synthetic “full-body prosthesis” augmented-cybernetic human. She’s dedicated to be a perfect soldier devoted and enforce the law of Public Security. She was created to be strong-willed, physically powerful and highly intelligent. Her human ressemblances allows her to blend in the crowd.",
                "image" : "images/movies/humanoid_rob_m.gif",
                "url" : "",
                "articleId" : 5
            },
            {
                "title" : "Wall-E",
                "annee" : 2008,
                "author" : "Andrew Stanton",
                "description" : "Disney animators have demonstrated that emotion expression can be communicated effectively through characters, such as Wall-E, even though he doesn’t have a humanoid bodies. Little robot Wall-E was designed to clean the Earth of its waste, while humans are fattening in the space. He is self sufficient, every day repeating the same routine. He doesn’t feel loneliness until he meets EVE, another robot.",
                "image" : "images/movies/physical_ass_m.gif",
                "url" : "",
                "articleId" : 6
            },
            {
                "title" : "Summer Wars - Platform “Oz world”",
                "annee" : 2010,
                "author" : "Mamoru Hosoda",
                "description" : "Summer Wars presents us with two different settings and conflicts. Oz, an internet-based society in which tens of millions of people and businesses around the world, represented by their own custom avatars can interact with each other in all manner of activities. The other contrasting setting is an old-style Japanese mansion in a calm countryside area. In the movie Oz is hacked by an intelligent machine, stealing people’s account.\n \nIs the movie trying to warn us from technology becoming so ingrained in our lives?\n",
                "image" : "images/movies/computer_games.gif",
                "url" : "http://animeyume.com/blog/2010/03/08/the-message-of-summer-wars-two-worlds/",
                "articleId" : 7
            },
            {
                "title" : "HER",
                "annee" : 2013,
                "author" : "Mamoru Hosoda",
                "description" : "Theodore is a lonely man in the final stages of his divorce. When he's not working as a letter writer, his down time is spent playing video games and occasionally hanging out with friends. He decides to purchase the new OS1, which is advertised as the world's first artificially intelligent operating system, \"It's not just an operating system, it's a consciousness,\" the ad states. Theodore quickly finds himself drawn in with Samantha, the voice behind his OS1.",
                "image" : "images/movies/vocal_ass_bis_m.gif",
                "url" : "http://animeyume.com/blog/2010/03/08/the-message-of-summer-wars-two-worlds/",
                "articleId" : 8
            }
            ,
            {
                "title" : "A.I. Intelligence artificielle - Gigolo Joe",
                "annee" : 2001,
                "author" : "Steven Spielberg",
                "description":"In a futuristic world ravaged by global warming and where procreation is strictly regulated, human beings live in perfect harmony with the \"mechas\", androids robots specially created to meet their needs: household chores, services and love. Gigolo Joe is a male pleasure Mecha.",
                "image" : "images/movies/sex_doll_m2.gif",
                "url" : "",
                "articleId" : 9
            }
        ],

        "article":[
            {
                "title" : "Hal 9000 replica controlled by Amazon Alexa",
                "date" : "March 2018",
                "author" : "Jen Clark",
                "description" : "Master Replicas Group has created a HAL 9000 Replica that uses Amazon Alexa to control Your Home. [...] Not only can you talk and interact with HAL, recreating some of the movie’s more quotable human-AI repartee, the wall-mounted replica also has Amazon’s Alexa built-in, which you can use to check the weather, turn lights on and off, or ask to open the pod bay doors when HAL refuses.",
                "image" : "images/movies/vocal_ass_a2.jpg",
                "url" : "https://gizmodo.com/you-can-soon-own-a-hal-9000-replica-that-uses-amazon-al-1823648187 ",
                "source" : "Gizmodo",
                "articleId" : 1
            },
            {
                "title" : "Can machines achieve emotional intelligence ?",
                "date" : "October 2017",
                "author" : "Jen Clark",
                "description" : "A fully autonomous, conscious, decision-making humanoid bot is, at the moment, the stuff of fiction. And yet, ‘affective computing’, or the capability to recognize, respond to and even emulate human emotions is present in some of today’s machines. So to what extent can machines exhibit emotional intelligence? And how are these capabilities being put to use?",
                "image" : "images/movies/artificial_con_a.jpg",
                "url" : "https://www.ibm.com/blogs/internet-of-things/affective-computing/",
                "source" : "IBM blog",
                "articleId" : 2
            },

            {
                "title" : "Fur-covered robots are the new therapy animal",
                "date" : "April 2018",
                "author" : "Patrick Holland",
                "description":"Robots called comfort companions can fill this void, by offering the benefits of therapy animals without the downsides of germs, allergies and cost. [...] Paro started in 1993 as a project in Japan and went into production in 2005. Now in its ninth design, it's used in over 30 countries to treat people with dementia, cancer, anxiety, autism and Down syndrome.",
                "image" : "images/movies/emotion_exp_a.jpg",
                "url" : "https://www.cnet.com/news/comfort-robots-aflac-duck-and-paro-seal-help-sick-people/",
                "source" : "CNET",
                "articleId" : 3
            },
            {
                "title" : "Chinese Police now use Facial Recognition Glasses",
                "date" : "February 2018",
                "author" : "Josh Shin",
                "description" : "Chinese police officers were spotted wearing surveillance sunglasses equipped with facial recognition software that allows them to identify individuals in a crowd. These surveillance sunglasses were actually rolled out last year, but a recent report from China’s QQ published a series of photos of the glasses in action.",
                "image" : "images/movies/face_rec_a1.jpg",
                "url" : "https://www.wsj.com/articles/chinese-police-go-robocop-with-facial-recognition-glasses-1518004353",
                "source" : "The Wall Street Journal",
                "articleId" : 4
            },
            {
                "title" : "First robot to have citizenship",
                "date" : "October 2017",
                "author" : "Andrew Griffin",
                "description":"Saudi Arabia has become the first country to give a robot citizenship.[...]The robot, named Sophia, was confirmed as a Saudi citizen during a business event in Riyadh, according to an official Saudi press release. [...] Then followed an interview during which Mr Sorkin asked the robot a series of questions.",
                "image" : "images/movies/humanoid_rob_a.jpg",
                "url" : "https://www.independent.co.uk/life-style/gadgets-and-tech/news/saudi-arabia-robot-sophia-citizenship-android-riyadh-citizen-passport-future-a8021601.html",
                "source" : "The independent",
                "articleId" : 5
            },
            {
                "title" : "Pepper’s next gig is at Pizza Hut",
                "date" : "March 2018",
                "author" : "Trevor Mogg",
                "description" : "Pepper is a friendly robotic fella who can interact with humans and even be your best buddy, if you like. SoftBank, which created the cute humanoid robot in collaboration with French robotics company Aldebaran SAS, had high hopes for Pepper when the first one rolled off the production line in 2015.",
                "image" : "images/movies/physical_ass_a.jpg",
                "url" : "https://www.digitaltrends.com/cool-tech/pepper-working-at-pizza-hut/ ",
                "source" : "",
                "articleId" : 6
            },

            {
                "title" : "Seizure during a chat in Virtual Reality",
                "date" : "January 2018",
                "author" : "Emanuel Maiberg",
                "description" : "VRChat is a free-to-play massively multiplayer online virtual reality video game [...]. It allows players to interact with others as 3D character models. VRChat users were goofing off in one of the app's virtual environments when suddenly one of the avatars in the room, a black and red robot, fell to the floor and began twitching. At first, it's unclear if it was just a bug or someone goofing off, which is what many VRChat users like to do.",
                "image" : "images/movies/computer_gam_a.jpg",
                "url" : "https://motherboard.vice.com/en_us/article/ne4myg/vrchat-seizure ",
                "source" : "Vice (Motherboard)",
                "articleId" : 7
            },
            {
                "title" : "Why Alexa was Laughing at customers ?",
                "date" : "March 2018",
                "author" : "Iraj Chokshi",
                "description":"For weeks, users of Amazon’s digital assistant, Alexa, have reported versions of the same unsettling event: being startled as they went about their day by Alexa letting out an eerie laugh. [...] “In rare circumstances, Alexa can mistakenly hear the phrase ‘Alexa, laugh,’” when other words are spoken [...]",
                "image" : "images/movies/vocal_ass_bis_a.jpg",
                "url" : "https://www.nytimes.com/2018/03/08/business/alexa-laugh-amazon-echo.html",
                "source" : "New York Times",
                "articleId" : 8
            },
            {
                "title" : "Hard wired: Now you'll be able to buy MALE sex robots too as artificial 'companions' with bionic penises are set to go on sale this year",
                "date" : "January 2018",
                "author" : "Connor Boyd",
                "description":"Male sex robots with bionic penises will be rolled out this year according to the  pioneer of pleasure behind the popular female versions that dropped last year. Matt McMullen, founder of Realbotix, is the man who created Harmony, an artificial intelligence app that syncs up with a robotic head system. The application enables users to match an AI personality with a humanoid robot head, to create the most realistic sex doll imaginable.",
                "image" : "images/movies/sex_doll_a.jpg",
                "url" : "http://www.dailymail.co.uk/news/article-5244155/Male-sex-robots-bionic-penises-coming-2018.html ",
                "source" : "New York Times",
                "articleId" : 9
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
    intervalMax = (Math.ceil(max/10)*10 )+20;
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
        this.marker = document.createElement("div");
        this.title = movie.title.toString();
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
            movie.annee,
            movie.url,
            movie.author.toString(),
            movie.articleId
        )

        this.listenOnMarker(this.bubble)

        this.description_bubble = new Description(this.description, this.position)
        this.bubble.listenOnBubble(this.bubble.more_content, this.description_bubble.description_bubble)

        this.article = new TimelineBubble(
            article.title.toString(),
            this.position,
            article.description.toString(),
            article.image.toString(),
            "that_article",
            article.date.toString(),
            article.url,
            article.author.toString(),
            article.articleId
        )
        this.bubble.listenOnBubble(this.bubble.article_content, this.article.movie_bubble)
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
                case "more_content":

                    el.style.opacity = "1"
                    el.style.visibility = "visible"
                    zIndex++;
                    el.style.zIndex =zIndex
                    break
                case "article_content":
                    //put a change classe function

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
                case "timeline_item":

                    zIndex++;
                    el.style.zIndex =zIndex
                    el.changeIndex(el, zIndex)
                default:

                    break
            }
        })
    }
}

class TimelineBubble extends Bubble{

    constructor(title, position, description, imgSrc, type, date, url, author, article_id){
        super()
        this.position = position
        this.description = description
        this.movie_bubble = document.createElement("div");
        this.movie_bubble.classList.add("timeline_item")
        this.movie_bubble.classList.add(type)

        if(type === "movie"){
            this.movie_bubble.style.left = this.position + "px"  ////////////// Change
        }else{
            this.movie_bubble.style.left =this.position + 150 +"px"
            this.movie_bubble.style.top = "370px";
        }

        this.movie_bubble.style.visibility = "hidden"

        timelineContainer.appendChild(this.movie_bubble)

        this.movie_bubble_content = document.createElement("div");
        this.movie_bubble_content.classList.add("timeline_content")
        this.movie_bubble.appendChild(this.movie_bubble_content)

        //________________________________________ HEADER ___________________________________________

        this.movie_bubble_content_img = document.createElement("div");
        this.bubble_content_header(title, date, type, author)

        //________________________________________ BODY ___________________________________________
        this.bubble_content_body(imgSrc,type, article_id)

        //________________________________________ FOOTER ___________________________________________
        this.bubble_content_footer(type, url)

        this.listenOnBubble(this.movie_bubble_content_img, this.movie_bubble)
    }

    bubble_content_header(title, date, type, author){

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

        this.title_container = document.createElement('div')

        this.movie_bubble_content_title = document.createElement("h2");
        this.movie_bubble_content_title.setAttribute("data-text", title + " - "+author)



        this.movie_bubble_content_header.appendChild(this.title_container)

        this.title_container.appendChild(this.movie_bubble_content_title)


        this.movie_bubble_content_title.appendChild(document.createTextNode(title + " - "+author))

        //<div class="img__container">

        this.movie_bubble_content_img.classList.add("img_container")
        this.movie_bubble_content_header.appendChild(this.movie_bubble_content_img)

        this.img_close = document.createElement("img")
        if(this.type !=="movie"){
            this.img_close.src = "images/icons/icon_close_blue.svg"
        }else{
            this.img_close.src = "images/icons/icon_close.svg"
        }

        this.img_close.classList.add("close")
        this.movie_bubble_content_img.appendChild(this.img_close)

    };

    bubble_content_body(imgSrc, type, article_id){
        this.type = type
        this.movie_bubble_content_body = document.createElement("div");
        this.movie_bubble_content_body.classList.add("timeline_content_body")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_body)

        this.img = document.createElement("img")
        this.img.src = imgSrc

        if(this.type !=="movie"){
            this.img_container_body = document.createElement("div");
            this.movie_bubble_content_body.appendChild(this.img_container_body )
            this.img_container_body.classList.add('movie'+article_id.toString())
            this.img_container_body.appendChild(this.img)
        }else{
            this.movie_bubble_content_body.appendChild(this.img)
        }

        this.summary = document.createElement("p")
        this.movie_bubble_content_body.appendChild(this.summary)

        this.movie_bubbleText = document.createTextNode(this.description);
        this.summary.appendChild(this.movie_bubbleText)
    }

    bubble_content_footer(type, url){
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
            this.img_article.src = "images/icons/icon_article-orange.svg"
            this.article_content.appendChild(this.img_article)
        }

        this.web_content = document.createElement("div");
        this.web_content.classList.add("web_container")

        if(url!=""){
            this.link = document.createElement('a')
            this.link.appendChild(this.web_content)
            this.link.href = url
            this.link.target = "_blank"
            this.movie_bubble_content_footer_container.appendChild( this.link)
        }else{
            this.movie_bubble_content_footer_container.appendChild(this.web_content)
        }

        this.img_web = document.createElement("img")
        this.img_web.classList.add("web")
        if(this.type ==="movie"){
            this.img_web.src = "images/icons/icon_web.svg"
        }else{
            this.img_web.src = "images/icons/icon_web_blue.svg"
        }
        this.web_content.appendChild(this.img_web)

        if(this.img_article && this.web_content){
            //this.listenOnBubble(this.img_article, this.web_content)
            this.listenOnBubble(this.img_web, this.web_content)
        }

        //MOVIE

        if(this.type ==="movie") {
            this.more_content = document.createElement("div");
            this.more_content.classList.add("more_content")
            this.movie_bubble_content_footer_container.appendChild(this.more_content)
            this.img_more = document.createElement("img")
            this.img_more.classList.add("more")
            this.img_more.src = "images/icons/icon_more.svg"
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


    changeIndex(bubble, value){
        bubble.style.zIndex = value
    }
}

class Description extends Bubble{
    constructor(description, position){
        super()
        //this.position = position
        this.description_bubble = document.createElement('div')
        this.description_bubble.style.left= position + 50 +"px"
        this.description_bubble.style.top = "500px";
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
        this.img_close.src = "images/icons/icon_close.svg"
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
