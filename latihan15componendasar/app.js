// PENGENALAN DASAR DASAR KOMPONEN DI VUE JS

// jika data nya ingin bersifat saling berbagi / shared antar komponen maka perlu didefinisikan dulu datanya di luar komponen
var dataSharedsContoh = {
    nama: 'Kucing kucingan'
};


Vue.component('hello-component', {
    template: '<p>Hello world component dasar, saya adalah {{judul}} dan {{nama}}. <button v-on:click="gantiNama()">Klik Ganti Nama</button></p>',
    data: function () {
        return {
            judul: 'Hello World Component Dasar',
            nama: 'Kucing meong'
        }
    },
    methods: {
        gantiNama: function () {
            // data di setiap komponen terpisah dan tidak berhubungan antara komponen satu dengan lainnya
            this.nama = 'Kucing garong';
        }
    },
    computed: {

    }
});

Vue.component('hello-component-shared', {
    template: '<p>Hello world component dasar, saya adalah {{nama}}. <button v-on:click="gantiNama()">Klik Ganti Nama</button></p>',
    data: function () {
        return dataSharedsContoh;
    },
    methods: {
        gantiNama: function () {
            // data di setiap komponen terpisah dan tidak berhubungan antara komponen satu dengan lainnya
            this.nama = 'Kucing garong';
        }
    },
    computed: {

    }
});


var vm1 = new Vue({
    el: '#vue-app-satu',
    methods: {

    },
    computed: {

    }
});

var vm2 = new Vue({
    el: '#vue-app-dua',
    methods: {

    },
    computed: {

    }
});

var vm3 = new Vue({
    el: '#vue-app-tiga',
    methods: {

    },
    computed: {

    }
})