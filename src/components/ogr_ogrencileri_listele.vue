<template>
  <div>
      <Navbar/>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div style="margin-top: 20px;"></div>
            <div class="input-group">
              <input type="text" class="form-control"  placeholder="Ad" style="margin-right: 10px;">
              <input type="text" class="form-control" placeholder="Soyad" style="margin-right: 10px;">
              <input type="text" class="form-control" placeholder="Numara" style="margin-right: 10px;">
               <select class="custom-select" id="inputGroupSelect01" style="margin-right: 10px;">
                  <option selected>Staj Türü...</option>
                  <option value="1">Yazılım</option>
                  <option value="2">Donanım</option>
                  <option value="2">Yazılım-Donanım</option>
                </select>
              <input type="text" class="form-control" placeholder="Staj Yeri" style="margin-right: 10px;">
              <input type="text" class="form-control" placeholder="Gün Sayısı" style="margin-right: 10px;">
              <select class="custom-select" id="inputGroupSelect01" style="margin-right: 10px;">
                  <option selected>Yeterlilik...</option>
                  <option value="1">YT</option>
                  <option value="2">YZ</option>
                  <option value="2">YT-YZ</option>
                </select>
                 <button type="button" class="btn btn-primary" style="margin-right: 5px">Filtrele</button>
                 <button type="button" class="btn btn-info ">PDF Oluştur</button>
               </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px;"></div>
    <div  class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Numara</th>
            <th scope="col">Staj Türü</th>
            <th scope="col">Staj Yeri</th>
            <th scope="col">Gün Sayısı</th>
            <th scope="col">Yeterlilik Durumu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ahmet</td>
            <td>Yılmaz</td>
            <td>201613171000</td>
            <td>Yazılım</td>
            <td>Akınsoft</td>
            <td>20</td>
            <td>YT</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mehmet</td>
            <td>Yılmam</td>
            <td>201613171002</td>
            <td>Yazılım</td>
            <td>Tofaş</td>
            <td>40</td>
            <td>YT</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hakan</td>
            <td>Demir</td>
            <td>201513171000</td>
            <td>Donanım</td>
            <td>Güral Porselen</td>
            <td>60</td>
            <td>YT</td>
          </tr>
        </tbody>
      </table>
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
      document.title="Öğrencileri Listele";
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