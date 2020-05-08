<template>
  <div>
      <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div style="margin-top: 3rem;"></div>
          <h4>Randevu Açılacak Tarih Aralığını Seçiniz:</h4 >
              <div class="input-daterange input-group" id="dat">
                <input type="date" class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
                <span class="input-group-addon" style="margin-left: 10px"> ile </span> 
                <span style="margin-left: 10px"></span>
                <input type="date" class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
            </div>
          <div style="margin-top: 20px;"></div>
          <div>
            <button type="button" class="btn btn-primary btn-lg">Tarihleri Seç</button>
          </div>
          <div style="margin-top: 20px;"></div>
          <h4>Randevuların Başlangıç Saatini Seçiniz:</h4 >
          <div style="margin-top: 10px;"></div>
           <input type="time" class="form-control">
          <div style="margin-top: 20px;"></div>
          <h4>Randevuların Bitiş Saatini Seçiniz:</h4 >
          <div style="margin-top: 10px;"></div>
           <input type="time" class="form-control">
           <div style="margin-top: 20px;"></div>
          <h4>Randevuların Süre Aralıklarını Seçiniz:</h4 >
          <div style="margin-top: 10px;"></div>
           <input type="text" class="form-control">
           <div style="margin-top: 20px;"></div>
            
          <button type="button" class="btn btn-primary btn-lg">Oluştur</button>
          <span style="margin-right: 10px"></span>
          <button type="button" class="btn btn-danger btn-lg">Sıfırla</button>
          
          
          </div>
        <div class="col-md-3"></div>
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
      document.title="Randevu Aç";
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