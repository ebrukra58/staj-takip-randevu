<template>
  <div>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item " ref="Anasayfa">
                  <router-link class="nav-link" to="ogrenci-anasayfa">Anasayfa <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item" ref="basvuru">
                  <router-link class="nav-link" to="staj-basvuru">Staj Başvuru</router-link>
                </li>
                <li class="nav-item" ref="randevu">
                  <router-link class="nav-link" to="ogrenci-randevu">Mülakat Randevusu Al</router-link>
                </li>
                <li class="nav-item" ref="stajlarim">
                  <router-link class="nav-link" to="ogrenci-stajlarim">Stajlarım</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Çıkış</router-link>
                </li>
              </ul>
              <span class="navbar-text">
                STAJ TAKİP VE RANDEVU SİSTEMİ
              </span>
            </div>
        </nav>
        <router-view/>
  </div>
</template>

<script>
export default {
mounted:function()
  {
    var name=this.$router.currentRoute.name;
    if(name=="Ogrenci-Anasayfa")
    {
      this.$refs.Anasayfa.classList.add("active");
    }
    else if(name=="Staj-Basvuru")
      this.$refs.basvuru.classList.add("active");
    else if(name=="Ogrenci-Randevu")
      this.$refs.randevu.classList.add("active");
    else if(name=="Ogrenci-Stajlarim")
      this.$refs.stajlarim.classList.add("active");
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