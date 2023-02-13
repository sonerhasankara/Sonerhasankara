/* Data for testing */
/*
  var data =  [{'turkce_anlami': 'Kelime Yok', 'ingilizce_anlami': 'Kelime Yok'},];

  localStorage.setItem('Apply', JSON.stringify(data));

  localStorage.setItem('Test', JSON.stringify(data));
  localStorage.setItem('Pretect', JSON.stringify(data));
  localStorage.setItem('Supply', JSON.stringify(data));
  localStorage.setItem('Improve', JSON.stringify(data));
	localStorage.setItem('test111', JSON.stringify(data));
*/
/* variables for words */
	const ing_kelimeler = [];
	const tr_kelimeler = [];
	const es_kelimeler = [];
/* number of words */
	var sayi = document.getElementById('kelime_sayisi')
	sayi.innerHTML = '<button type="button" class="btn btn-outline-success my-2 my-sm-0">\
  Kelime Sayısı: <span class="badge badge-dark">'+localStorage.length+'</span></button>'

	/* Words to list in html */
  var hst = document.getElementById('highscores');
  var x = 0;
  if ( x !== localStorage.length){
  		for(let i=0; i<localStorage.length; i++) {
  				let key = localStorage.key(i);

  				var retrievedScores = JSON.parse(`${localStorage.getItem(key)}`);

  				for (var k = 0; k < retrievedScores.length; k++) {
							ing_kelimeler.push(key);
							tr_kelimeler.push(retrievedScores[k].turkce_anlami);
							es_kelimeler.push(retrievedScores[k].ingilizce_anlami);
      				hst.innerHTML += "<li class='list-group-item'> <div class='media align-items-lg-center flex-column flex-lg-row p-3'> <div class='media-body order-2 order-lg-1'>\
                <h5 class='mt-0 font-weight-bold mb-2'>"+key+" <i class='fa fa-headphones' aria-hidden='true' style='color:blue' onclick='dinle(this)'id ='"+key+"'></i></h5><p class='text-muted mb-0 small'><b> Türkçesi/Anlamı:</b>"+retrievedScores[k].turkce_anlami+"</p>\
                  <p class='text-muted mb-0 small'> <b>İngilizce Karşılığı - Not:</b>"+retrievedScores[k].ingilizce_anlami+"</p><hr><button type='button' class='btn btn-primary btn-sm' onclick='duzenle(this)' id ='"+key+"'>Düzenle</button> &nbsp;&nbsp;\
                  <button type='button' class='btn btn-success btn-sm' onclick='ornek_cumle(this)' id ='"+key+"'>Örnek Cümleler</button> &nbsp;&nbsp;<button type='button' class='btn btn-danger btn-sm' onclick='sil(this)' id ='"+key+"'>Sil</button>"
              				}
  		}

/* if words' number is zero give notifications */
  } else {

  	Swal.fire({
    icon: 'info',
    title: 'Oops...',
    text: 'Herhangi bir kelimeniz yok.',
    footer: '<a href="https://senaslanugur.github.io/Kelime-Defterim/">Kelime Ekleyebilirsiniz...</a>'
  })
  }

/* examples words functions */
function ornek_cumle(x){
	var get_url = ('https://api.rhymezone.com/words?max=50&nonorm=1&k=rz_wke&rel_wke='+x.id)
	$.getJSON(get_url, function(d) {
				var idx1 = Math.floor(50 * Math.random());
				var idx2 = Math.floor(50 * Math.random());
				var idx3 = Math.floor(50 * Math.random());
				Swal.fire({
						title: 'Örnek Cümleler',
						icon: 'info',
						html:
							 '<p>'+'**  '+(d[idx1].word).split(":")[2] + " "+ (d[idx1].word).split(":")[3]+'</p>'+
							 '<p>'+'**  '+(d[idx2].word).split(":")[2] + " "+ (d[idx2].word).split(":")[3]+'</p>'+
							 '<p>'+'**  '+(d[idx3].word).split(":")[2] + " "+ (d[idx3].word).split(":")[3]+'</p>',
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

	});
}
/* edit words functions */
function duzenle(x){

var retrievedScores = JSON.parse(`${localStorage.getItem(x.id)}`);

Swal.fire({
  icon:'info',
  html:
    '<input id="swal-input1" class="swal2-input" value="'+x.id+'">'+
    '<input id="swal-input2" class="swal2-input" value="'+retrievedScores[0].turkce_anlami+'">'+
    '<input id="swal-input3" class="swal2-input" value="'+retrievedScores[0].ingilizce_anlami+'">',
  focusConfirm: false,
  preConfirm: () => {
            var turkce_anlami = document.getElementById("swal-input2").value;
            var ingilizce_anlami = document.getElementById("swal-input3").value;
            var data = [{"turkce_anlami": turkce_anlami, "ingilizce_anlami": ingilizce_anlami},];
            localStorage.setItem(document.getElementById("swal-input1").value, JSON.stringify(data));
            if(x.id == (document.getElementById("swal-input1").value)){
              Swal.fire('Kelime düzenlendi', '', 'success')
              location.reload();
            }else{
              localStorage.removeItem(x.id);
              Swal.fire('Kelime düzenlendi', '', 'success')
              location.reload();
            }


  }
})
}
/* delete words functions */
function sil(x){
  Swal.fire({
    title: x.id +' kelimesini silmek istiyor musunuz?',
    showDenyButton: true,
    confirmButtonText: 'Sil',
    denyButtonText: `Vazgeç`,
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(x.id);
      Swal.fire('Kelime Silindi', '', 'success')
      location.reload();
    }
  })

}
/* listen words functions */
function dinle(x){
  Swal.fire({
  icon: 'info',
  title: 'kelimeniz okunuyor',
  showConfirmButton: false,
  timer: 1500
  })
  responsiveVoice.speak(x.id, 'UK English Male');
}

/* sort words by english words function*/
function ing_sırala(){
		Swal.fire({
			icon: 'info',
			title: 'geliştiriliyor',
			showConfirmButton: false,
			timer: 1500
  	})
}

/* sort words by tuskish words function */
function tr_sırala(){

		Swal.fire({
			icon: 'info',
			title: 'geliştiriliyor',
			showConfirmButton: false,
			timer: 1500
  	})

}

/* words to pdf funciton*/
function to_pdf() {
	var hst2 = document.getElementById('ekleme_kismi');
	hst2.innerHTML = "";
	for (var k = 0; k < ing_kelimeler.length; k++){

		hst2.innerHTML += "<tr><th scope='row'>"+(Number(k)+1).toString()+"</th><td>"+ing_kelimeler[k]+"</td><td>"+tr_kelimeler[k]+"</td><td>"+es_kelimeler[k]+"</td></tr>"
	}

	// Choose the element that our invoice is rendered in.
	const element = document.getElementById('tablem');
	// Choose the element and save the PDF for our user.
	html2pdf().from(element).save();

}


