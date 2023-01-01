export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        formatNum(val) {
            var a = val.toLocaleString("en-US");
            return a;
        }
    }
}