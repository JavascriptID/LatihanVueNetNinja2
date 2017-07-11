// pengenalan tentang vue instance lebih dari satu buah
var vm1 = new Vue({
    el: '#vue-app-satu',
    data: {
        judul: 'Judul Instance Vue 1'
    },
    methods: {
        changeJudulApp2 : function () {
            vm2.judul = 'Judul Vue Instance 2 telah diganti';
        }
    },
    computed: {
        greetHello: function () {
            return 'Hello dari instance vue pertama';
        }
    }
});


var vm2 = new Vue({
    el: '#vue-app-dua',
    data: {
        judul: 'Judul Instance Vue 2'
    },
    methods: {
        changeJudulApp1 : function() {
            vm1.judul = "Judul Vue Instance 1 telah diganti"
        }
    },
    computed: {
        greetHello: function () {
            return 'Hello dari instance vue kedua';
        }
    }
});


vm2.judul = 'Judul Instance Vue 2 diganti dari luar';