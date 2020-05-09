<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                
                <div class="col-md-6">
                <div style="margin-top: 3rem;"></div>
                    <div id="sinif">
                        <h3>Sınıf Seçimi</h3>
                        <input type="radio" v-on:click="goster=true" id="sinif_one" name="sinif" value="1">
                        <label for="sinif_one">1</label><br>
                        <input type="radio" v-on:click="goster=false" id="sinif_two" name="sinif" value="2">
                        <label for="sinif_two">2 ve Üzeri</label><br>  
                    </div>
                    <div id="tur">
                        <h3>Staj Türü Seçimi</h3>
                        <input type="radio" id="tur_one" name="tur" value="1">
                        <label for="tur_one">Yurtiçi</label><br>
                        <input type="radio" id="tur_two" name="tur" value="2">
                        <label for="tur_two">Yurtdışı</label><br>
                        <input type="radio" id="tur_three" name="tur" value="3">
                        <label for="tur_three ">Erasmus</label><br>    
                    </div>
                    <div id="donem">
                        <h3>Dönem İçi- Yaz</h3>
                        <input type="radio" id="donem_one" name="donem" value="1">
                        <label for="donem_one">Dönem İçi</label><br>
                        <input type="radio" id="donem_two" name="donem" value="2">
                        <label for="donem_two">Yaz</label><br> 
                    </div>
                    <div id="alan">
                        <h3>Alan Seçimi</h3>
                        <input type="radio" id="alan_one" name="alan" value="1">
                        <label for="alan_one">Yazılım</label><br>
                        <input type="radio" id="alan_two" name="alan" value="2">
                        <label for="alan_two">Donanım</label><br> 
                    </div>
                    <div id="calısan">
                        <h3>Staj Yeri Çalışan Kontrolü</h3>
                        <h6>Yazılım : Bilgisayar Mühendisi,Yazılım Mühendisi,Bilişim Sistem Mühendisi var mı?
                            Donanım : Bilgisayar Mühendisi,Elektrik-Elektronik Mühendisi var mı?
                        </h6>
                        <input type="radio" id="calısan_one" name="calısan" value="1">
                        <label for="calısan_one">Evet</label><br>
                        <input type="radio" id="calısan_two" name="calısan" value="2">
                        <label for="calısan_two">Hayır</label><br> 
                    </div>
                    <div id="konu">
                        <h3>Konu Seçimi</h3>
                        <select class="custom-select" id="inputGroupSelect01" style="margin-right: 10px;">
                            <option selected>Yazılım Konuları...</option>
                            <option value="1">Mobil Uygulamalar </option>
                            <option value="2">Web Programlama </option>
                            <option value="3">Yapay Zekâ Uygulamaları (Derin Öğrenme, Bilgisayar Görmesi vb) </option>
                            <option value="4">Biyometri (iz, yüz, parmak izi, vs.) Uygulamaları  </option>
                            <option value="5">BS/YBS ((Yönetim) Bilişim Sistemleri) Uygulamaları (ERP, SAP, e-ticaret, vs.)  </option>
                            <option value="6">Yazılım Performans Testleri ve Analizi  </option>
                            <option value="7">Siber Güvenlik Yazılımları  </option>
                            <option value="8">Bilgisayar Güvenliği ve Kriptoloji  </option>
                            <option value="9">Büyük Veri ve Veri Madenciliği Uygulamaları  </option>
                            <option value="10">Veritabanı Uygulamaları, Veritabanı Analizi, Optimizasyonu ve Yönetimi  </option>
                            <option value="11">Animasyon, Bilgisayar Grafikleri ve Oyun Programlama Uygulamaları  </option>
                            <option value="12">Sistem Programlama  </option>
                            <option value="13">Gömülü Sistem Programlama  </option>
                            <option value="14">Bilgisayar Destekli Kontrol Sistemleri </option>
                        </select> 
                        <div style="margin-top:10px;"> </div> 
                        <select class="custom-select" id="inputGroupSelect01" style="margin-right: 10px;">
                            <option selected>Donanım Konuları...</option>
                            <option value="1">Siber Güvenlik  </option>
                            <option value="2">Gömülü sistem tasarımı ve uygulamaları </option>
                            <option value="3">Mikro-denetleyiciler, mikro-işlemciler </option>
                            <option value="4">Robotik uygulamalar   </option>
                            <option value="5">İz-yüz-parmak-göz-lastik tanıma sistemleri   </option>
                            <option value="6">Otomobil, otobüs vb. araç özellik kontrolleri (mesafe, fren, ıslak yol, klima)  </option>
                            <option value="7">Veri iletişimi Teknolojileri  </option>
                            <option value="8">Bilgisayar Ağ Teknolojileri  ve Ağ Güvenliği </option>
                            <option value="9">Fabrika cihaz takip-kontrol sistemleri   </option>
                            <option value="10">Kamera takip, radar, bilgisayarlı güvenlik sistemleri   </option>
                            <option value="11">Araç takip-kontrol sistemleri  </option>
                            <option value="12">Tıp-telefon-ticari-endüstri-askeri alanlarda sayısal işaret işleme </option>
                            <option value="13">Bilgisayar donanım performans testleri  </option>
                            <option value="14">Cep ve mobil sistem teknolojileri  </option>
                            <option value="15">Monitör, dokunmatik ekranlar, LCD TV, plazma TV </option>
                            <option value="16">Endüstriyel Otomasyon sistemleri, PLC  </option>
                            <option value="17">Entegre Devre tasarımları ve imalatı, VLSI  </option>
                            <option value="18">VHDL, SystemC, Verilog vb.    </option>
                        </select>  
                        <div class="form-group">
                            <label for="exampleInputEmail1">Diğer konu</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" >
                            <div style="margin-top: 15px;"></div>
                            <button type="submit" class="btn btn-primary">Ekle</button>
                        </div>
                    <div style="margin-top: 20px;"></div>
                        <h4>Staj Yapılacak Tarih Aralığını Seçiniz:</h4 >
                    <div class="input-daterange input-group" id="dat">
                        <input type="date" class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
                        <span class="input-group-addon" style="margin-left: 10px"> ile </span> 
                        <span style="margin-left: 10px"></span>
                        <input type="date" class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
                    </div>
                    <div style="margin-top: 20px;"></div>
                    <div>
                        <button type="button" class="btn btn-primary btn-md">Tarihleri Seç</button>
                    </div>
                    <div style="margin-top: 20px;"></div>
                    <div id="K-Ö">
                        <h3>Kamu - Özel Sektör</h3>
                        <input type="radio" id="kö_one" name="kö" value="1">
                        <label for="kö_one">Özel</label><br>
                        <input type="radio" id="kö_two" name="kö" value="2">
                        <label for="kö_two">Kamu</label><br> 
                    </div>
                    <div style="margin-top: 20px;"></div>
                    <div id="maas">
                        <h3>Maaş Ödenecek Mi?</h3>
                        <input type="radio" id="maas_one" name="maas" value="1">
                        <label for="maas_one">Evet</label><br>
                        <input type="radio" id="maas_two" name="maas" value="2">
                        <label for="maas_two">Hayır</label><br> 
                    </div>
                    <div style="margin-top: 20px;"></div>
                    <div id="sigorta">
                        <h3>Sigortanı İş Yeri Yapacak Mı?</h3>
                        <input type="radio" id="sigorta_one" name="sigorta" value="1">
                        <label for="sigorta_one">Evet</label><br>
                        <input type="radio" id="sigorta_two" name="sigorta" value="2">
                        <label for="sigorta_two">Hayır</label><br> 
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                     <div style="margin-top: 3rem;"></div>
                     <div v-show="goster" id="uyari">
                    <div class="alert alert-danger" role="alert">
                        Staj yapamazsın!
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/navbar-ogrenci";
export default {
components:
  {
    Navbar
  },
  data:function()
  {
    return{
        goster:false
    };
  },
  created:function()
  {
      document.title="Staj Başvuru";
  }
}
</script>

<style>
    body{
    background:#f5f8fa
    }
    @media (min-width: 1200px) { .container {
        max-width: 1200px;
    } }
</style>