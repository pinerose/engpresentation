function writenav(a){
    if (a == '1st') {
        document.write(
            "<li class=\"presentpage\">1</li><li><a href=\"second.html\">2</a></li><li><a href=\"third.html\">3</a></li>")
    } else if (a == '2nd'){
        document.write(
            "<li><a href=\"first.html\">1</a></li><li class=\"presentpage\">2</li><li><a href=\"third.html\">3</a></li>")
    } else if (a == '3rd'){
        document.write(
            "<li><a href=\"first.html\">1</a></li><li><a href=\"second.html\">2</a></li><li class=\"presentpage\">3</li>"
        )
    }
}

function next(self){
    self.style.display = "none";
    document.querySelector('.seconddesc').style.display = "block";
}