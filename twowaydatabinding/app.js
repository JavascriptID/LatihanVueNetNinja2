/**
 * Created by rian on 6/22/17.
 */
new Vue({
    el: '#vue-app',
    data: {
        nama: '',
        umur: ''
    },
    methods: {
        logNama: function () {
            console.log('kamu mengisi nama kamu');
        },
        logUmur: function () {
            console.log('kamu mengisi umur kamu');
        },
        logAltEnterUmur: function () {
            console.log('kamu menekan tombol alt + enter untuk memasukkan umur')
        }
    }
});