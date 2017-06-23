/**
 * Created by rian on 6/22/17.
 */
new Vue({
    el: '#vue-app',
    data: {
        nama: 'Kucing kampung',
        warna: 'Coklat Kuning',
        website: 'http://www.google.com',
        webBinding:'https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d',
        viewWebBinding: '<a href="http://www.google.com">view web binding</a>'
    },
    methods: {
        helloWorld : function () {

            return 'Hello vue js world ' + this.nama;
        },
        greetings: function () {

            return 'Hello world ' + this.nama;
        },
        greetFill: function (valueHello) {

            return 'Selamat ' + valueHello;
        },
        sapaKucing : function (waktu) {

            return 'Hallo ' + this.nama + ' yang ' + this.warna
                + ' ketika ' + waktu;
        }
    }
});