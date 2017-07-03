// CONDITIONAL DOM RENDERING
var vm = new Vue({
    el: '#vue-app',
    data: {
        isSukses: false,
        isError: false
    },
    methods: {
        setIsSukses: function () {
            console.log('set sukses berjalan');
            this.isSukses = !this.isSukses;
        },
        setIsError: function () {
            console.log('set error berjalan');
            this.isError = !this.isError;
        }
    },
    computed: {
        compSuksesCSS: function () {
            return {
                suksesCSS: this.isSukses
            }
        },
        compErrorCSS: function () {
            return {
                errorCSS: this.isError
            }
        }
    }
});