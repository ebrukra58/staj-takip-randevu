<template>
  <div>
       <Navbar/>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div style="margin-top: 30px;"></div>
                <h4>Profilim</h4>
                <div class="card" style="width: 18rem;">
                  <img src="../assets/indir.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Ad Soyad</h5>
                    <p class="card-text">201613171000</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div style="margin-top: 30px;"></div>
                <h4>Duyurular</h4>
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Duyuru Başlığı</h5>
                      <small>1 gün önce</small>
                    </div>
                    <p class="mb-1">İçerik</p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Duyuru Başlığı</h5>
                      <small>1 gün önce</small>
                    </div>
                    <p class="mb-1">İçerik</p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Duyuru Başlığı</h5>
                      <small>1 gün önce</small>
                    </div>
                    <p class="mb-1">İçerik</p>
                  </a>

                </div>
              </div>
              <div class="col-md-3">
                <div style="margin-top: 30px;"></div>
                <h4>Bilgiler</h4>
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Toplam yapılan iş günü : 0</li>
                    <li class="list-group-item">Toplam yapılacak iş günü : 60</li>
                    <li class="list-group-item">Staj durum : Yapılmıyor...</li>
                  </ul>
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
  created:function()
  {
      document.title="Anasayfa";
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