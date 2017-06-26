/**
 * Created by rian on 6/22/17.
 */
new Vue({
    el: '#vue-app',
    data: {
        umurInt: 20,
        umurCacheB: 0,
        nilaiA: 0,
        nilaiB: 0
    },
    methods: {
        addNilaiA: function () {
            this.nilaiA = this.nilaiA + 1;
        },
        addNilaiB: function () {
            this.nilaiB = this.nilaiB + 1;
        },
        addUmurDenganAMethod: function () {
            console.log('fungsi a method sedang jalan');
            return this.umurInt + this.nilaiA;
        },
        addUmurDenganBMethod: function () {
            console.log('fungsi b method sedang jalan');
            return this.umurInt + this.nilaiB;
        }
    },
    computed: {
        addUmurDenganA: function () {
            console.log('fungsi a computed sedang jalan');
            return this.umurInt + this.nilaiA;
        },
        addUmurDenganB: function () {
            console.log('fungsi b computed sedang jalan');
            return this.umurInt + this.nilaiB;
        },
        addUmurDenganAComputed : function () {

            return this.addUmurDenganAMethod();
        },
        addUmurDenganBComputed : function () {

            return this.addUmurDenganBMethod();
        }
    }
});