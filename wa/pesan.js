$('#noAdmin').val('0813-8626-7897');// Nomor Tujuan
$('.sendWAclik').click(function () {
$('#whatsapp').toggleClass('toggle');});
// Fungsi Tombol Whatsapp Kirim!
		$('#whatsapp .kirim').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .nama').val() == '') { 
				ph = $('#whatsapp .nama').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nama').focus();
				return false;
			} else if ($('#whatsapp .pesan').val() == '') { 
				ph = $('#whatsapp .pesan').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .pesan').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
		            nama = $('#whatsapp .nama').val(),
		            pesan = $('#whatsapp .pesan').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +

               '%2AHallo kak, saya ' + nama + '. Mau order lisensi template...%2A%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2ANote%2A: ' + pesan + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2ADikirim Dari%2A ' + via_url);
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
