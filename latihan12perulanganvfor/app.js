// PERULANGAN KE DALAM DAFTAR ARRAY DENGAN MENGGUNAKAN V-FOR
var vm = new Vue({
    el: '#vue-app',
    data: {
        nama: 'Lorem Ipsum Dolor',
        karakters: [
            'Lorem',
            'Ipsum',
            'Dolor',
            'Sit',
            'Amet'
        ],
        namaorangs: [
            {nama: 'Lorem', umur: 20},
            {nama: 'Ipsum', umur: 21},
            {nama: 'Dolor', umur: 25}
        ],
        objeknama : {
            firstName: 'John',
            lastName: 'Doe',
            age: 30.7,
            lagu: [
                'lorem',
                'ipsum',
                'dolor'
            ]
        }
    },
    methods: {

    },
    computed: {

    }
});