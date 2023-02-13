
      function KelimeEkle() {

        if ( ((document.getElementById("ingilizce_kelime").value) != "" ) && ((document.getElementById("turkce_anlami").value) != "" ) ){
            var turkce_anlami = document.getElementById("turkce_anlami").value;
            var ingilizce_anlami = document.getElementById("ingilizce_anlami").value;
            var data = [{"turkce_anlami": turkce_anlami, "ingilizce_anlami": ingilizce_anlami},];

            localStorage.setItem(document.getElementById("ingilizce_kelime").value, JSON.stringify(data));

            jSuites.notification({
                name: 'Kelime Defteri',
                message: 'Kelimeniz Eklenmiştir.',
            })

            document.getElementById("turkce_anlami").value = "";
            document.getElementById("ingilizce_anlami").value = "";
            document.getElementById("ingilizce_kelime").value = "";

      } else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'İngilizce Kelime ve Türkçe Anlamını Giriniz.',
                showConfirmButton: false,
                timer: 1500
            })

      }


        }


        function EsAnlam(){
            if ((document.getElementById("ingilizce_kelime").value) != "" ){

                        var get_url = ('https://tuna.thesaurus.com/relatedWords/'+ document.getElementById("ingilizce_kelime").value + '?limit=6')
                        $.getJSON(get_url, function(d) {
                                Swal.fire({
                                  title: 'Eş Anlamları',
                                  icon: 'info',
                                  html:
                                      "<p>"+
                                      "<b>Kelime: </b>"+(d.data[0].targetTerm)+"<b> Anlamı: </b>"+(d.data[0].definition)+"<b> Türü: </b>"+(d.data[0].pos)+
                                      "</p>"+
                                      "<p>"+
                                      "<b>Kelime: </b>"+(d.data[1].targetTerm)+"<b> Anlamı: </b>"+(d.data[1].definition)+"<b> Türü: </b>"+(d.data[1].pos)+
                                      "</p>"+
                                    "<p>"+
                                      "<b>Kelime: </b>"+(d.data[2].targetTerm)+"<b> Anlamı: </b>"+(d.data[2].definition)+"<b> Türü: </b>"+(d.data[2].pos)+
                                      "</p>"+
                                      "<p>"+
                                      "<b>Kelime: </b>"+(d.data[3].targetTerm)+"<b> Anlamı: </b>"+(d.data[3].definition)+"<b> Türü: </b>"+(d.data[3].pos)+
                                      "</p>"+
                                      "<p>"+
                                      "<b>Kelime: </b>"+(d.data[4].targetTerm)+"<b> Anlamı: </b>"+(d.data[4].definition)+"<b> Türü: </b>"+(d.data[4].pos)+
                                      "</p>",
                                  showCloseButton: false,
                                  showCancelButton: true,
                                  focusConfirm: false,
                                  confirmButtonText:
                                      'Ekle',
                                  confirmButtonAriaLabel: 'Thumbs up, great!',
                                  cancelButtonText:
                                      'Kapat',
                                  cancelButtonAriaLabel: 'Thumbs down',
                              }).then((result) => {
                                    if (result.isConfirmed) {
                                        document.getElementById("ingilizce_anlami").value =(document.getElementById("ingilizce_anlami").value) +" " +(d.data[0].targetTerm)+", " + (d.data[1].targetTerm)+", "+ (d.data[2].targetTerm)
                                    }



                              })


                        })

            }   else{

                            Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'İngilizce Kelime Kutucuğuna Kelime Giriniz',
                            showConfirmButton: false,
                            timer: 1500
                            })

            }

        }
