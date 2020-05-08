<template>
  <div>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" ref="duyuru">
              <router-link class="nav-link" to="ogretmen-duyurular">Duyurular <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" ref="randevu">
              <router-link class="nav-link" to="randevu-ac">Randevu Aç</router-link>
            </li>
            <li class="nav-item" ref="listele">
              <router-link class="nav-link" to="ogrencileri-listele">Öğrencileri Listele</router-link>
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
  </div>
</template>

<script>
export default {
  mounted:function()
  {
    var name=this.$router.currentRoute.name;
    if(name=="Ogretmen-Duyurular")
    {
      this.$refs.duyuru.classList.add("active");
    }
    else if(name=="Randevu-Ac")
      this.$refs.randevu.classList.add("active");
    else if(name=="Ogrencileri-Listele")
      this.$refs.listele.classList.add("active");
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