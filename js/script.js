$(document).ready(function () {
  // phase-1
  $("#tombol-lanjut").click(function () {
    let namaUser = $("#nama").val();
    if (namaUser != "") {
      $("#phase-1").addClass("hide");
      $("#phase-2").removeClass("hide");
      $(".nama-user").html(namaUser);

      // phase-2
      $("#phase-2 button").click(function (e) {
        let jwb = e.target.dataset.jawab;
        if (jwb == "ora") {
          $("#phase-2").addClass("hide");
          $("#phase-3-ora").removeClass("hide");
          $(".nama-user").html(namaUser);
        }
        // phase-3
        else {
          $("#phase-2").addClass("hide");
          $("#phase-3-iya").removeClass("hide");
          $("#kategori li").click(function (e) {
            let kategori = e.target.dataset.kategori;
            let textKategori = e.target.innerText;

            $("#phase-3-iya").addClass("hide");
            $("#phase-4").removeClass("hide");
            $("#kategori-terpilih").html(textKategori);
            // bg kartu setelah diklik
            $(".ceklis").click(function () {
              $(this).parent().parent().toggleClass("bg-kartu");
            });
            let isi = document.getElementsByClassName("isi");
            // berdasarkan kategori
            if (kategori == "toi") {
              // ide
              $("#ide-terpilih").html(i_toi);
              // isi
              for (let i = 0; i < isi.length; i++) {
                k_toi.forEach((e, i) => {
                  isi[i].innerHTML = e;
                });
              }
            } else if (kategori == "mesum") {
              // ide
              $("#ide-terpilih").html(i_mesum);
              // isi
              for (let i = 0; i < isi.length; i++) {
                k_mesum.forEach((e, i) => {
                  isi[i].innerHTML = e;
                });
              }
            }

            // hasil akhir
            let jml = [];
            let hasil;
            $("#hasil").click(function () {
              $("#phase-4").addClass("hide");
              $("#phase-5").removeClass("hide");
              jml = $(".bg-kartu").length;
              if (jml <= 0) {
                hasil = "BELUM MEMILIH WOIIII!";
              } else if (jml <= 2) {
                hasil = "Anak pendiam";
              } else if (jml <= 4) {
                hasil = "Anak baik-baik";
              } else if (jml <= 5) {
                hasil = "murid teladan";
              } else if (jml <= 6) {
                hasil = "anak normal";
              } else if (jml <= 7) {
                hasil = "orang yang aktif";
              } else if (jml <= 8) {
                hasil = "orang-nya asik ";
              } else if (jml <= 10) {
                hasil = "petakilan";
              } else if (jml <= 11) {
                hasil = "layak masuk penta";
              } else if (jml <= 13) {
                hasil = "murid ndlajig";
              } else if (jml <= 14) {
                hasil = "murid gaada otak";
              } else if (jml <= 15) {
                hasil = "Wedhus";
              } else if (jml <= 16) {
                hasil = "murid lejen ";
              }
              $("#text-hasil").html(hasil);
            });
            // hasil akhir
          });
        }
      });
    }
  });
});
