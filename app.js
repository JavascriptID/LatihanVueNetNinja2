
let vm = new Vue({
    el: '#vue-app',
    data: {
        isAvailable: false,
        isNearby: false
    },
    methods: {
        setAvailables: function() {
            this.isAvailable = !this.isAvailable;
        },
        changeIsAvailable: function() {
            this.isAvailable = !this.isAvailable;
        },
        changeIsNearby: function () {
            this.isNearby = !this.isNearby;
        }
    },
    computed: {
        setCompClasses: function () {
            
            console.log('set kelas css berjalan');

            var objClasses = {
                availableCSS: this.isAvailable,
                nearbyCSS: this.isNearby
            };
            
            return objClasses;
        }
    }
});