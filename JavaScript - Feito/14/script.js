var i = 0
var img = []

img[0] = "https://images.pexels.com/photos/1693652/pexels-photo-1693652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
img[1] = "https://images.pexels.com/photos/5618028/pexels-photo-5618028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
img[2] = "https://images.pexels.com/photos/5847900/pexels-photo-5847900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
img[3] = "https://images.pexels.com/photos/5618031/pexels-photo-5618031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
img[4] = "https://images.pexels.com/photos/756686/pexels-photo-756686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
img[5] = "https://images.pexels.com/photos/1701531/pexels-photo-1701531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function Slide() {
    document.getElementById("img").style = "background-image: url(" + img[i] + ");"
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("Slide()", 4000);
}

window.onload = Slide;