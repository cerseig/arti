//movies.movie[i].annee

export default TimelineMarker;
//export TimelineMarker
/*function parse(str) {
    var node = document.createElement("fragment");
    node.innerHTML = str;
    return node.firstChild;
}*/

class TimelineMarker {

    constructor(title, year, description) {

        this.marker = document.createElement("div");
        this._title = title;
        this._year = year;
        this._description = description
        this.position = ((year - intervalMin) * timeline.clientWidth) / timelineDuration;
        console.log(year - intervalMin)
        console.log("cW", timeline.clientWidth)
        console.log("timelineDuration", timelineDuration)

        this.marker.classList.add("marker")
        this.marker.style.left = this.position + "px"
        timelineContainer.appendChild(this.marker)

        this.movieYear = document.createElement('span');
        this.movieYearText = document.createTextNode(this._year);
        this.marker.appendChild(this.movieYear)
        this.movieYear.appendChild(this.movieYearText)

        //________________________________________ TIMELINE ITEM ___________________________________________

        this.movie_bubble = document.createElement("div");
        this.movie_bubble.classList.add("timeline_item")
        this.movie_bubble.style.left = this.position + "px"

        //marker.appendChild(movie_bubble)
        timelineContainer.appendChild(this.movie_bubble)


        // <div class="timeline__content">
        this.movie_bubble_content = document.createElement("div");
        this.movie_bubble_content.classList.add("timeline_content")
        this.movie_bubble.appendChild(this.movie_bubble_content)

        //________________________________________ HEADER ___________________________________________


        // <div class="timeline__content__header">
        this.movie_bubble_content_header = document.createElement("div");
        this.movie_bubble_content_header.classList.add("timeline_content_header")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_header)

        // <h2>2018</h2>
        this.movie_bubble_content_title = document.createElement("h2");
        this.movie_bubble_content_header.appendChild(this.movie_bubble_content_title)
        this.movie_bubble_content_title.appendChild(document.createTextNode(this._title))

        //<div class="img__container">
        this.movie_bubble_content_img = document.createElement("div");
        this.movie_bubble_content_img.classList.add("img_container")
        this.movie_bubble_content_header.appendChild(this.movie_bubble_content_img)

        this.img_close = document.createElement("img")
        this.img_close.src = "../../images/icons/icon_close.svg"
        this.movie_bubble_content_img.appendChild(this.img_close)


        //________________________________________ BODY ___________________________________________

        this.movie_bubble_content_body = document.createElement("div");
        this.movie_bubble_content_body.classList.add("timeline_content_body")
        this.movie_bubble_content.appendChild(this.movie_bubble_content_body)

        this.img = document.createElement("img")
        this.img.src = "../../images/movies/oz_SummerWars.jpg" // TO DO ...
        this.movie_bubble_content_body.appendChild(this.img)

        this.summary = document.createElement("p")
        this.movie_bubble_content_body.appendChild(this.summary)

        this.movie_bubbleText = document.createTextNode(this._description);
        this.summary.appendChild(this.movie_bubbleText)

        //________________________________________ FOOTER ___________________________________________

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

    }

    get year() {
        return this.year;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    closeItem() {

    }

    get ts(){
        console.log(this._year)
    }


}


