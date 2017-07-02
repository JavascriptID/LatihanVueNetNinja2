
let vm = new Vue({
    el: '#vue-app',
    data: {
        isAvailable: false,
        isNearby: false
    },
    methods: {
        setAvailables: function() {
            console.log('is Available diganti nilainya');
            this.isAvailable = !this.isAvailable;
        },
        setNearby: function () {
            console.log('is Nearby diganti nilainya');
            this.isNearby = !this.isNearby;
        }
    },
    computed: {
        compClassCSS: function () {
            
            console.log('nilai computed property CSS disetel');

            var objectCSS = {
                availableCSS: this.isAvailable,
                nearbyCSS: this.isNearby
            };

            return objectCSS;
        }

    }
});