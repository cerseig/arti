//movies.movie[i].annee


// export {timelineMarker}
/*function parse(str) {
    var node = document.createElement("fragment");
    node.innerHTML = str;
    return node.firstChild;
}*/

class timelineMarker {

    constructor(){
        this.marker = document.createElement("div");
        // this._title = title;
        this._year = 22;
        this._description = ""
        // this.position = ((year - intervalMin) * timeline.clientWidth) / timelineDuration;
        console.log("hel")
        // console.log("cW", timeline.clientWidth)
        // console.log("timelineDuration", timelineDuration)

        this.marker.classList.add("marker")
        // this.marker.style.left = this.position + "px"
        // timelineContainer.appendChild(this.marker)

        this.movieYear = document.createElement('span');
        this.movieYearText = document.createTextNode(this._year);
        this.marker.appendChild(this.movieYear)
        this.movieYear.appendChild(this.movieYearText)
    }


        //________________________________________ TIMELINE ITEM ___________________________________________
}

var myVeryLongInternalName = function() { console.log("ppo") };
exports.shortName = myVeryLongInternalName;
// add other objects, functions, as required





