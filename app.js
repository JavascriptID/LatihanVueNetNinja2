/**
 * Created by rian on 6/22/17.
 */
var vm = new Vue({
    el: '#vue-app',
    data: {
        umurInt: 20,
        nilaiA: 0,
        nilaiB: 0,
        nilaiBCached: 0,
        umurIntAComputed: 0,
        umurIntBComputed: 0,
        umurABTotal: 0
    },
    methods: {
        addNilaiA: function () {
            this.nilaiA = this.nilaiA + 1;
        },
        addNilaiB: function () {
            this.nilaiB = this.nilaiB + 1;
        },
        // addUmurDenganA: function () {
        //
        //     console.log('fungsi tambah umur A jalan');
        //     return this.nilaiA + this.umurInt;
        // },
        // addUmurDenganB: function () {
        //     console.log('fungsi tambah umur B jalan');
        //
        //     this.nilaiBCached = this.nilaiBCached + 1;
        //     console.log('nilai b cached' + this.nilaiBCached);
        //     return this.nilaiB + this.umurInt;
        // },
        jumlahkanUmur: function () {

            this.tambahUmurABSetterGetter = 'Umurnya = '
        }
    },
    computed: {
        addUmurDenganAComputed: function () {

            this.umurIntAComputed = this.nilaiA + this.umurInt;
            console.log('fungsi computed property A sedang berjalan ');
            return this.umurIntAComputed;
            // return this.nilaiA + this.umurInt;
        },
        addUmurDenganBComputed: function () {

            this.umurIntBComputed = this.nilaiB + this.umurInt;
            console.log('fungsi computed property B sedang berjalan ');
            return this.umurIntBComputed;
            // return this.nilaiB + this.umurInt;
        },
        //    dengan menggunakan setter getter
        tambahUmurABSetterGetter: {
            get: function () {

                console.log('nilai umur a dan b total');
                return this.umurABTotal;
            },
            set: function (nilaiVal) {

                var umurtotal = this.umurIntAComputed + this.umurIntBComputed;
                this.umurABTotal = nilaiVal + ' ' + umurtotal;
            }
        }
    }
});

