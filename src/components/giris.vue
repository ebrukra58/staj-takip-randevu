<template>
<div>
  <nav class="navbar sticky-top navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ</span>
        </nav>

        <div class="container">
              <div class="row">
                <div class="col">

                </div>
                <div class="col">
                  <div style="margin-bottom: 50px;"></div>
                  <center>
                      
                      
                       <img src="http://birimler.dpu.edu.tr/app/views/panel/ckfinder/userfiles/10/images/MUeHEND_SL_K_LOGO.png" alt="" width="200px" height="200px">
                       <div style="margin-bottom: 30px;"></div>
                       <h1 class="text-center">STAJ TAKİP VE RANDEVU SİSTEMİ</h1>
                       <div style="margin-bottom: 30px;"></div>
                       <router-link to="ogretmen-giris"><input type="button"  class="btn btn-primary btn-lg btn-block bg-dark" value="Öğretim Görevlisi Giriş" /> </router-link>
                       <div style="margin-bottom: 10px;"></div>
                       <router-link to="ogrenci-giris"><input type="button" class="btn btn-primary btn-lg btn-block" value="Öğrenci Giriş" /> </router-link>
                  </center>
                </div>
                <div class="col">

                </div>
              </div>
       </div>
 </div>
</template>

<script>
export default {
created:function()
  {
      document.title="Giriş";
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