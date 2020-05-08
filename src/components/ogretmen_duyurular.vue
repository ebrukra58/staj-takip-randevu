<template>
  <div>
      <Navbar />

    
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div style="margin-top: 3rem;"></div>
            <h1>Duyuru Oluştur</h1>
            <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Duyuru Başlığı</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" >
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Duyuru İçeriği</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                <button type="submit" class="btn btn-primary">Duyuru Ekle</button> 
                <span style="margin-left: 10px"></span>
                <button type="submit" class="btn btn-primary" disabled>Duyuruyu Düzenle</button>
              </form>
         </div>
         <div class="col-md-6">
           <div style="margin-top: 3rem;"></div>
            <h1>Duyurular</h1>
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
        </div>
    </div>
  </div>
</template>

<script>

  import Navbar from "../components/navbar-ogretmen";
export default {
  components:
  {
    Navbar
  },
  created:function()
  {
      document.title="Duyurular";
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