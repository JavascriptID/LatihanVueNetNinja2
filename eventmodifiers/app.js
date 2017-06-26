/**
 * Created by rian on 6/22/17.
 */
new Vue({
    el: '#vue-app',
    data: {
        usia: 20,
        dataX: 0,
        dataY: 0,
        linkwebsite: 'http://www.google.com'
    },
    methods: {

        tambahUmur: function (usiaInc) {

            // this.usia++;
            this.usia = this.usia + usiaInc;
        },
        kurangiUmur: function (usiaDec) {

            // this.usia--;
            this.usia = this.usia - usiaDec;
        },
        updateDataXY : function (events) {
            // console.log(events);
            this.dataX = events.offsetX;
            this.dataY = events.offsetY;
        },
        clickUrlHref : function () {
            alert('Click saya dulu dan reload')
        }
    }
});