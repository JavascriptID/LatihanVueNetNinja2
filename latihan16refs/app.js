// PENGENALAN REFS
var vm = new Vue({
    el: '#vue-app',
    data: {
        dataRefOutput: '-',
        dataDivRef: '-'
    },
    methods: {
        bacaRefs: function () {
            console.log(this.$refs);

            // baca untuk value yang diberi ref saja
            console.log(this.$refs.input_kata.value);

            // ganti nilai dataref output 
            this.dataRefOutput = this.$refs.input_kata.value;
        },
        bacaRefDiv: function() {

            this.dataDivRef = this.$refs.refDivTestingAja.innerHTML;
            console.log('data nya div yaitu  ' + this.$refs.refDivTestingAja.innerText);
        }
    },
    computed: {

    }
});