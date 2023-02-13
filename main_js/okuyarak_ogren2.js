var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var makale_girisi = document.getElementById("test")
        var el = document.createElement( 'html' );
        el.innerHTML = myArr.contents;
        var img  = el.getElementsByClassName("attachment-size-200x100")

        var header = el.getElementsByClassName("title")
        var sub_header = el.getElementsByClassName("news-excerpt")

        // var links = el.getElementsByClassName("album_frame")
        // console.log(links[0].getAttribute("href"))

        for(var i=0; i<img.length; i++){
              makale_girisi.innerHTML += '<div class="col mb-5"> <div class="card h-100"><img class="card-img-top" src="'+img[i].getAttribute("data-ezsrc")+'" />'+
              '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+header[i].innerHTML+'</h5>'+sub_header[i].innerHTML+'</div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
              '</div></div>'
        }
    }
};

xmlhttp.open('GET', document.location.protocol + '//api.allorigins.win/get?url='+escape("https://www.newsinlevels.com/level/level-3/", true));
xmlhttp.send();
