<template>
    <div>
        <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div style="margin-top: 3rem;"></div>
          <div>
            <h4>Randevu Tarihini Seçiniz:</h4 >
            <div class="row form-row">
               <input type="date" class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
            </div>
            
          </div>
          <div style="margin-top: 20px;"></div>
          <div>
            <button type="button" v-on:click="goster=true" class="btn btn-primary btn-lg">Tarihi Seç</button>
          </div>
          <div style="margin-top: 20px;"></div>
          <div v-show="goster" id="saat">
          <h4>Randevu Saatini Seçiniz:</h4>
          <div class="row">
            <div class="col-4">
              <h4>08.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">08.00</a>
                <a class="dropdown-item" href="#">08.15</a>
                <a class="dropdown-item" href="#">08.30</a>
                <a class="dropdown-item" href="#">08.45</a>
              </div>
            </div>
          </div>
            <h4>09.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">09.00</a>
                <a class="dropdown-item" href="#">09.15</a>
                <a class="dropdown-item" href="#">09.30</a>
                <a class="dropdown-item" href="#">09.45</a>
              </div>
            </div>
          </div>
            </div>
            <div class="col-4">
              <h4>10.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">10.00</a>
                <a class="dropdown-item" href="#">10.15</a>
                <a class="dropdown-item" href="#">10.30</a>
                <a class="dropdown-item" href="#">10.45</a>
              </div>
            </div>
            <h4>11.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">11.00</a>
                <a class="dropdown-item" href="#">11.15</a>
                <a class="dropdown-item" href="#">11.30</a>
                <a class="dropdown-item" href="#">11.45</a>
              </div>
            </div>
            </div>
            </div>
            
            </div>
            <div class="col-4">
              <h4>13.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">13.00</a>
                <a class="dropdown-item" href="#">13.15</a>
                <a class="dropdown-item" href="#">13.30</a>
                <a class="dropdown-item" href="#">13.45</a>
              </div>
            </div>
            <h4>14.00</h4>
          <div class="md-form">
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Seçiniz
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">14.00</a>
                <a class="dropdown-item" href="#">14.15</a>
                <a class="dropdown-item" href="#">14.30</a>
                <a class="dropdown-item" href="#">14.45</a>
              </div>
            </div>
            </div>
            </div>
            
            </div>
          </div>
          
            
            <div style="margin-top: 20px;"></div>
            <button type="button" class="btn btn-primary btn-lg">Saati Seç</button>
          </div>
        </div>
        <div class="col-md-3"></div>
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
      document.title="Randevu Al";
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