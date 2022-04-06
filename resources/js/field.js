Nova.booting((Vue, router, store) => {
  Vue.component('index-month-picker', require('./components/IndexField'))
  Vue.component('detail-month-picker', require('./components/DetailField'))
  Vue.component('form-month-picker', require('./components/FormField'))
})
