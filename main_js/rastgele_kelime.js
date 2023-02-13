
	AOS.init();
	Swal.fire({
	icon: 'info',
	title: 'Kelimeler Yükleniyor, Lütfen Bekleyiniz',
	showConfirmButton: false,
	timer: 1500
	})

	var hst = document.getElementById('highscores');
	
	for (var k=0;k<10;k++){
	var random = Math.floor(Math.random() * 2679);
	inglizce_kelime = data[random].ingilizce;
	turkce_kelime = data[random].kelime;
	 
	 hst.innerHTML += "<li class='list-group-item'> <div class='media align-items-lg-center flex-column flex-lg-row p-3'> <div class='media-body order-2 order-lg-1'>\
		 <h5 class='mt-0 font-weight-bold mb-2'>"+inglizce_kelime+"</h5><p class='text-muted mb-0 small'><b> Türkçe Anlamı:&nbsp;</b>"+turkce_kelime+"</p>\
			 <hr><button type='button'  class='btn btn-success btn-sm' onclick='ekle(this)' id='"+inglizce_kelime+"+"+turkce_kelime+"' >Kelimelerime Ekle</button> &nbsp;&nbsp;"
			
		}
function ekle(x){
	var data = [{"turkce_anlami": x.id.split("+")[1], "ingilizce_anlami":""},];
	localStorage.setItem(x.id.split("+")[0], JSON.stringify(data));
	jSuites.notification({
		name: 'Kelime Defterim',
		message: 'Kelimeniz Eklenmiştir.',
})

}
