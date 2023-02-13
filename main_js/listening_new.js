var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var el = document.createElement( 'html' );
        el.innerHTML = myArr.contents;
        var test = document.getElementById("pictures")
        var images = el.getElementsByClassName("episode_img_url")

        var title = el.getElementsByClassName("episode_title")

        var urls = el.getElementsByClassName("episode_url")
        var hst = document.getElementById("test");
        
        for(let i=0; i<15; i++){
            hst.innerHTML += '<div class="col mb-5"> <div class="card h-100"><a class="btn" href="#0" onclick = "reply_click(this.id)" id="'+urls[i].textContent+'"><img class="card-img-top" src="'+images[i].textContent+'" /></a>'+
            '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+title[i].textContent+'</h5></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
            '</div></div>'
      }

    }else{

      let timerInterval
      Swal.fire({
        title: 'Loading',
        html: ' thay will be avaliable after <b style="color:blue"></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        imageUrl: 'asserts/rocket.png',
        imageAlt: 'Custom image',
        imageWidth: 250,
        imageHeight: 250,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    }
};

xmlhttp.open('GET', document.location.protocol + '//api.allorigins.win/get?url='+escape("https://www.podcastrepublic.net/podcast/1585768372", true),false);
xmlhttp.send();
function reply_click(clicked_id){

    Swal.fire({
title: 'Podcast',
html:
 '<audio controls><source src="'+clicked_id+'" preload="auto" ></audio>',
showCloseButton: false,
showCancelButton: false,
focusConfirm: false,
confirmButtonText:
  '<i class="fa fa-times-circle" aria-hidden="true"></i> Kapat!',
confirmButtonAriaLabel: 'Thumbs up, great!',
cancelButtonText:
  '<i class="fa fa-ban" aria-hidden="true"></i> Kapat',
cancelButtonAriaLabel: 'Thumbs down'
})
}
