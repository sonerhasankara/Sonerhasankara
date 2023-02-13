var hst = document.getElementById("test");
for(let i=0; i<70; i++){
      hst.innerHTML += '<div class="col mb-5"> <div class="card h-100"><a class="btn" href="#0" onclick = "reply_click(this.id)" id="'+data[i].audio_list+'"><img class="card-img-top" src="https://cdn-icons-png.flaticon.com/512/2991/2991595.png" /></a>'+
      '<div class="card-body p-4"> <div class="text-center"><h5 class="fw-bolder">'+data[i].title+'</h5></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
      '</div></div>'
}
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
