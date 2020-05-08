<template>
  <div>
      <nav class="navbar sticky-top navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h2">KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ</span>
        </nav>
        <div class="container">
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-6">
                <div style="margin-top: 7rem;"></div>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Kullanıcı Adı</label>
                    <input type="text" maxlength="12" class="form-control" id="text1" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Şifre</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Beni Hatırla</label>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                     
                    </div>
                    <div class="col-md-4">
                      <router-link to="ogretmen-duyurular" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Giriş Yap</router-link>
                    </div>
                    <div class="col-md-4">
                      
                    </div>
                  </div>
                  
                </form>
              </div>
              <div class="col-md-3">
              </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
created:function()
  {
      document.title="Öğretmen Giriş";
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