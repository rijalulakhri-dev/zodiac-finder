function zodiak() {
  let bulanLahir = document.getElementById("bulan").value
  let tanggalLahir = document.getElementById("hari").value
  let person = document.getElementById('nama').value
  let result = " anda tidak memasukkan data."

// bulan pertama
if (tanggalLahir != null || person != null || bulanLahir != null) {
    document.getElementById("karakteristik").innerHTML = "";
    document.getElementById("keluar").innerHTML = result
}
  if (bulanLahir == 1&& tanggalLahir >=20 || bulanLahir == 2 && tanggalLahir <= 18
      ){
    result = ("Aquarius")
  document.getElementById('foto').innerHTML= "<img src='img/aquarius.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Aquarius. Ternyata orang yang berzodiak Aquarius diam-diam memiliki jiwa pemberontak. Mereka juga dikenal dengan sikap eksentriknya dan hobi yang tidak biasa. Tak hanya itu, zodiak dengan elemen udara ini juga memiliki daya imaginasi yang tinggi dan dikenal sebagai seorang pemikir. Meski mereka senang kerja sendiri, Aquarius tetap bisa bekerja dengan baik dalam tim dan disukai banyak orang.`

  }

// bulan kedua
  if (bulanLahir == 2&& tanggalLahir >=19 || bulanLahir ==3
    && tanggalLahir <= 20
        ){
    result = ("Pisces")
  document.getElementById('foto').innerHTML= "<img src='img/pisces.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = ` hai ${person} zodiak kamu adalah Pisces. Zodiak pisces dengan lambang ikan yang bergerak ke dua arah berbeda ini memiliki kepribadian yang kerap berseberangan. Mereka memiliki afeksi dan empati yang tinggi, tapi di sisi lain mereka juga dikenal egois dan dramatis. Zodiak berelemen air ini juga memiliki jiwa seni yang tinggi dan dikenal sebagai sosok yang bijaksana.`

  }

// bulan ketiga
  if (bulanLahir ==3 && tanggalLahir >=21 || bulanLahir ==4 && tanggalLahir <= 19){
    result = ("Aries")
    document.getElementById("foto").innerHTML = "<img src='img/aries.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = ` hai ${person} zodiak kamu adalah Aries. Tahukah kamu kalau seseorang yang berzodiak aries suka menjadi nomor satu, nah apakah kamu seperti itu. Aries juga dikenal berani dan ambisius. Dalam setiap situasi, mereka kerap kali bersikap spontan dan tidak lebih dulu mempertimbangkan risiko setiap tindakan mereka. Sebagai zodiak dengan elemen api ini juga dikenal kompetitif dan sangat menyukai lingkungan yang dinamis.`

  }

// bulan keempat
  if (bulanLahir ==4 && tanggalLahir >=20 || bulanLahir ==5 && tanggalLahir <= 20){
    result = ("Taurus")
  document.getElementById('foto').innerHTML= "<img src='img/taurus.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Taurus. Tahukah kamu jika seseorang yang memiliki zodiak taurus mereka dikenal sebagai sosok yang kuat, dapat diandalkan, dan kreatif. Meski terkesan ‘keras’ di luar, Taurus sebenarnya berhati lembut. Selain Taurus juga dikenal sebagai zodiak yang mencintai kemewahan. Zodiak taurus berelemen tanah yang direpresentasikan dengan simbol banteng.`

  }

// bulan kelima
  if (bulanLahir ==5 && tanggalLahir >=21 || bulanLahir ==6 && tanggalLahir <= 20){
    result = ("Gemini")
    document.getElementById('foto').innerHTML= "<img src='img/gemini.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Gemini. Sebagai zodiak Gemini yang memiliki simbol manusia kembar, seorang Gemini dikenal memiliki banyak minat. Meski seorang Gemini sering dilabeli sebagai seorang ‘player’, sebenarnya Gemini ini memang seseorang yang ramah pada semua orang dan mudah bergaul dengan siapa saja. Pesona Gemini, sebagai zodiak dengan elemen udara, memang nggak bisa dipungkiri, sih!`

  }

// bulan keenam
  if (bulanLahir ==6 && tanggalLahir >=21 || bulanLahir ==7 && tanggalLahir <= 22){
    result = ("Cancer")
    document.getElementById('foto').innerHTML= "<img src='img/cancer.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Cancer. Seseorang yang berzodiak Cancer dikenal sebagai sosok yang intituitif, sentimental, protektif, dan selalu berusaha menolong sesama. Sama halnya dengan kepiting yang memiliki cangkang keras, seorang kepiting biasanya tak mudah dekat dengan orang baru. Namun begitu kamu sudah mendapatkan hati dan perhatiannya, dia akan menjadi teman atau pasangan yang sangat manis.`

  }

// bulan ketujuh
  if (bulanLahir ==7 && tanggalLahir >=23 || bulanLahir ==8 && tanggalLahir <= 22){
    result = ("Leo")
    document.getElementById('foto').innerHTML= "<img src='img/leo.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Leo. Zodiak leo yang diwakili dengan simbol singa memiliki rasa percaya diri yang tinggi. Seseorang yang berzodiak leo dikenal suka menjadi pusat perhatian dan hal itu tak sulit mereka dapat, karena mereka tahu caranya menjadi pemecah suasana. Supel, berambisi, dan penuh gairah, merupakan karakter inti dari seorang Leo.`

  }

// bulan kedelapan
  if (bulanLahir ==8 && tanggalLahir >=23 || bulanLahir ==9 && tanggalLahir <= 22){
    result = ("Virgo")
    document.getElementById('foto').innerHTML= "<img src='img/virgo.png'width=20%>"
    document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Virgo. Zodiak virgo direpresentasikan oleh simbol seorang dewi, sehingga tak mengherankan jika mereka dikenal sebagai sosok yang lembut. Di sisi lain, virgo juga dikenal sebagai seseorang yang loyal dan selalu berpikir analitis. Zodiak berelemen tanah ini juga sangat perfeksionis dan mereka selalu berusaha untuk meningkatkan setiap keahlian yang mereka miliki.`

  }

// bulan kesembilan
if (bulanLahir ==9 && tanggalLahir >=23 || bulanLahir ==10 && tanggalLahir <= 22){
  result = ("Libra")
  document.getElementById('foto').innerHTML= "<img src='img/libra.png'width=20%>"
  document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Libra. Sesuai dengan lambangnya, yaitu timbangan, zodiak Libra sangat suka keseimbangan dan kedamaian. Mereka selalu berusaha menjaga keharmonisan hidup mereka dalam berbagai aspek, mulai dari cinta, karier, dan keluarga. Libra juga sosok yang senang bersosialisi. Dalam menghadapi masalah, seorang Libra bisa menjadi seseorang yang diplomatis dalam mencapai solusi.`

}

// bulan kesepuluh
if (bulanLahir ==10 && tanggalLahir >=23 || bulanLahir ==11 && tanggalLahir <=21){
  result = ("Scorpio")
  document.getElementById('foto').innerHTML= "<img src='img/scorpio.png'width=20%>"
  document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Scorpio. Sebagai zodiak Scorpio yang diwakili oleh kalajengking, seorang Scorpio dikenal memiliki sifat keras kepala dan pemberani. Mereka adalah tipe orang yang tak ragu mengejar passion dan mimpi-mimpinya. Zodiak dengan elemen air ini juga dikenal mampu beradaptasi dalam di berbagai lingkungan. Saat berada di sebuah lingkungan baru, mereka nggak butuh waktu lama untuk berteman dengan siapa saja.`

}

// bulan kesebelas
if (bulanLahir ==11 && tanggalLahir >=22 || bulanLahir ==12 && tanggalLahir <=21){
  result = ("Sagitarius")
 document.getElementById('foto').innerHTML= "<img src='img/sagitarius.png'width=20%>"
  document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Sagitarius. Optimistis, senang humor, dan dermawan, adalah karakter inti dari seorang Sagitarius. Mereka dikenal sebagai sosok yang ekstrovert, meski begitu Sagitarius juga sangat menghargai kesendirian. Sebagai zodiak Sagitarius dengan elemen api, Sagitarius paling tak suka dikekang dan sangat menyukai kebebasan. Mencoba hal baru dan bertualang adalah kegiatan favorit zodiak berlambang centaurus ini.`

}

// bulan kedua belas
if (bulanLahir ==12 && tanggalLahir >=22 || bulanLahir ==1 && tanggalLahir <=19){
  result = ("Capricorn")
  document.getElementById('foto').innerHTML= "<img src='img/capricorn.png'width=20%>"
  document.getElementById("karakteristik").innerHTML = `hai ${person} zodiak kamu adalah Capricorn. Zodiak capricorn berelemen tanah ini direpresentasikan oleh makhluk mitos yang memiliki tubuh dan kepala kambing dengan ekor ikan. Capricorn dikenal sebagai sosok yang serius dalam menjalani hidup. Mereka mandiri, disiplin, dan sangat gigih saat ingin meraih apa yang mereka cita-citakan.`

}

document.getElementById("keluar").innerHTML= result;
}
