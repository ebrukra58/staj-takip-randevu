<template>
  <div>
      <Navbar/>
          
          <div  class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Staj Türü</th>
                  <th scope="col">Staj Yeri</th>
                  <th scope="col">Gün Sayısı</th>
                  <th scope="col">Başlangıç Tarihi</th>
                  <th scope="col">Bitiş Tarihi</th>
                  <th scope="col">Yeterlilik Durumu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Yazılım</td>
                  <td>Akınsoft</td>
                  <td>20</td>
                  <td>20.07.2019</td>
                  <td>20.09.2019</td>
                  <td>YT</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Yazılım</td>
                  <td>Tofaş</td>
                  <td>20</td>
                  <td>20.07.2019</td>
                  <td>20.09.2019</td>
                  <td>YT</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Donanım</td>
                  <td>Güral Porselen</td>
                  <td>20</td>
                  <td>20.07.2019</td>
                  <td>20.09.2019</td>
                  <td>YT</td>
                </tr>
              </tbody>
            </table>
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
      document.title="Stajlarım";
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