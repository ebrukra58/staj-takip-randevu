import Vue from 'vue'
import VueRouter from 'vue-router'
import Giris from '../components/giris.vue'
import ogrenci_anasayfa from '../components/ogrenci_anasayfa.vue'
import ogrenci_giris from '../components/ogrenci_giris.vue'
import ogrenci_randevu from '../components/ogrenci_randevu.vue'
import ogrenci_stajlarim from '../components/ogrenci_stajlarim.vue'
import ogretmen_duyurular from '../components/ogretmen_duyurular.vue'
import ogretmen_giris from '../components/ogretmen_giris.vue'
import randevu_ac from '../components/randevu_ac.vue'
import staj_basvuru from '../components/staj_basvuru.vue'
import ogr_ogrencileri_listele from '../components/ogr_ogrencileri_listele.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Giris',
    component: Giris
  },
  {
  path: '/ogrencileri-listele',
    name: 'Ogrencileri-Listele',
    component: ogr_ogrencileri_listele
  },
  {
    path: '/ogrenci-anasayfa',
      name: 'Ogrenci-Anasayfa',
      component: ogrenci_anasayfa
  },
  {
  path: '/ogrenci-giris',
    name: 'Ogrenci-Giris',
    component: ogrenci_giris
  },
  {
  path: '/ogrenci-randevu',
    name: 'Ogrenci-Randevu',
    component: ogrenci_randevu
  },
  {
  path: '/ogrenci-stajlarim',
    name: 'Ogrenci-Stajlarim',
    component: ogrenci_stajlarim
  },
  {
  path: '/ogretmen-duyurular',
    name: 'Ogretmen-Duyurular',
    component: ogretmen_duyurular
  },
  {
  path: '/ogretmen-giris',
    name: 'Ogretmen-Giris',
    component: ogretmen_giris
  },
  {
  path: '/randevu-ac',
    name: 'Randevu-Ac',
    component: randevu_ac
  },
  {
  path: '/staj-basvuru',
    name: 'Staj-Basvuru',
    component: staj_basvuru
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
