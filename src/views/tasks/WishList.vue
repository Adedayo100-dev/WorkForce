<template>
    <div class="wish-list_view">
        <h3>Wish Lists</h3>
        <br>
        <br>
        <br>

        <div class="display-option css-bt7gsy ">
            <p class="color-light-grey">{{ wishList.length }} items</p>
            <div v-for="item in wishList" :key="item.id">
                <div class="wish-item ">
                    <div class="display-option-row py-xsm css-mmep5j">
                        <div class="heading-box">
                            <!-- <span class="color-light-grey">{{ index +1 }}.</span> -->
                            <span class="css-szkv6d">{{ item.name }}</span>
                        </div>  
                        <div>
                            <span class="css-kx45yu">Stores: </span>
                            <div  v-for="store in item.stores"  :key="store.id">
                                {{ store }}
                            </div>
                        </div> 
                        <div class="spec-div">
                            <span class="css-kx45yu">Specification: </span>
                            <div  v-for="(property,key) in item.spec"  :key="key">
                                {{ key}}: &nbsp;{{ property }}
                            </div>
                        </div>
                        <div>
                            <span class="css-kx45yu">Budget:</span>
                            <div>${{ item.minBudgetPrice }} - ${{ item.maxBudgetPrice }}</div>
                        </div>
                    </div>
                    
                    <div class="hidden options-global-box py-xsm px-std border-bottom">
                        <div class="css-kx45yu options-label">Options: </div>
                        <div class="options-local-box">
                            <div  v-for="option in item.options"  :key="option.id" class="each-option">
                                <span>{{ option.name }}</span>
                                <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>
                                        ${{ option.minBudgetPrice }} - ${{ option.maxBudgetPrice }}
                                    </span>
                                </span>
                                <div>
                                    <span class="css-kx45yu">Stores: </span>
                                    <div class="d-inline">
                                        <a v-for="store in option.stores" :key="store.id" href="https://www.bestbuy.ca"  class="k5-font" target="_blank">
                                            {{ store }}
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'WishList',
    data() {
        return {
            wishList: [
                {"name": "Chair", "spec": {"height": 0}, "stores": ['Thrift store', ''], "minBudgetPrice": 100, "maxBudgetPrice": 206, "links": ['', ''], "options": [{"name": "Value Village", "stores": ['Thrift store', ''], "minBudgetPrice": 0, "maxBudgetPrice": 20.99},{"name": "Felix King", "stores": ['', ''], "minBudgetPrice": 199.99, "maxBudgetPrice": 206}]},
                {"name": "Singlet", "spec": {}, "stores": ['Online', 'Walk-in', 'CF Lime Ridge'], "minBudgetPrice": 0, "maxBudgetPrice": 23.97, "links": ['', '']},
                {"name": "USB Extension", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 24.99, "links": ['', '']},
                {"name": "Lagos Wall Frame", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "iphone 14 Pro", "spec": {}, "stores": ['Apple', 'BestBuy', 'Amazon'], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "TV Mount", "spec": {"DIM": `35" or less`}, "stores": ['Prime Cables', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "Laptop", "spec": {"RAM": "i7 | AMD Ryzen 5000 series", "Gen": "8th"}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', ''], "options": [{"name": "Mac Book", "stores": ['BestBuy', 'Apple'], "minBudgetPrice": 0, "maxBudgetPrice": 20.99},{"name": "Lenovo Legion", "stores": ['BestBuy', ''], "minBudgetPrice": 2049.99, "maxBudgetPrice": 2700}]},
                {"name": "Flannel Jacket", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 45, "links": ['', '']},
                {"name": "Dedicated/Discrete Graphics Card", "spec": {}, "stores": ['BestBuy', 'Amazon', 'Newegg'], "minBudgetPrice": 0, "maxBudgetPrice": 0, "options": [{"name": " ZOTAC GAMING GeForce RTX 3050", "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0},{"name": " Option B", "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0}], "links": ['', '']},
                {"name": "Intel 16GB RAM", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "Black Curtain", "spec": {}, "stores": ['', ''], "minBudgetPrice": 13, "maxBudgetPrice": 25, "links": ['', '']},
                {"name": "Office Paper Mesh bin", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 10, "links": ['', '']},
                {"name": "Wardrobe", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "Black Colored Movable vent", "spec": {}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 8.49, "links": ['', '']},
                {"name": "Dresser", "spec": {}, "stores": ['Ikea', ''], "minBudgetPrice": 0, "maxBudgetPrice": 159, "links": ['', '']},
                {"name": "Tablet /i-Pad", "spec": {}, "stores": ['', ''], "minBudgetPrice": 169.99, "maxBudgetPrice": 599.99, "links": ['', ''], "options": [{"name": "Samsung Galaxy A8 32GB", "stores": ['BestBuy', ''], "spec": {}, "minBudgetPrice": 0, "maxBudgetPrice": 169.99},{"name": "i-Pad pro 2018", "stores": ['BestBuy', ''], "minBudgetPrice": 0, "maxBudgetPrice": 599.99}]},
                {"name": "Custom Assembled Gaming PC", "spec": {"Processor": "Intel Core i9-10850K - $388.99(Amazon:used)", "RAM": "(2 X 16GB) DDR5 - $134.99", "SSD": "1TB NVMe (using PCIe 4.0/5.0, M.2 | 2.5 inch)(WD_Black) - $99.99", "HDD": "3.5inch - 4TB Seagate BarraCuda SATA - $94.99","Motherboard": "Standard ATX", "Graphics Card": "NVIDIA GeForce RTX 4060 $394.99", "PSU": "700W Gold - $89.99","Cooling":"Liquid all-in-one",  "OS": "Win 11 Pro 64-bit"}, "stores": ['', ''], "minBudgetPrice": 500, "maxBudgetPrice": 1600, "links": ['https://www.bestbuy.ca/en-ca/product/refurbished-excellent-gaming-pc-aqvin-desktop-computer-tower-black-intel-core-i7-up-to-4-0-ghz-1tb-ssd-32gb-ddr4-ram-geforce-rtx-3060-12gb-windows-10-pro-only-at-best-buy/17150929', '']},
                {"name": "Malm Bed Drawers", "spec": {"DIM": `19cm/7.5"`}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']},
                {"name": "Alex Desk Drawer", "spec": {}, "stores": ['Ikea', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['https://www.ikea.com/ca/en/p/alex-drawer-unit-white-00473546/#content', 'https://www.ikea.com/ca/en/p/songesand-underbed-storage-box-set-of-2-brown-30372541/']},
                {"name": "AirBuds", "spec": {}, "stores": ['BestBuy', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['https://www.bestbuy.ca/en-ca/collection/truly-wireless-headphones/37057', 'https://www.bestbuy.ca/en-ca/product/jbl-vibe-200tws-in-ear-sound-isolating-truly-wireless-headphones-black/15667567']},
                {"name": "Window Blind", "spec": {"Width": `34"`, "Height": `21.5"`}, "stores": ['', ''], "minBudgetPrice": 0, "maxBudgetPrice": 0, "links": ['', '']}
            ]
        }
    },
}
</script>

<style scoped>
@import "../../assets/flex.css";
.wish-item{
    /* padding: 10px; */
    /* margin-bottom: 10px; */
    /* border-bottom: 1px solid grey; */
}
.heading-box{
    display: flex;
    gap: 8px;
}
.options-box{
    /* background-color: red; */
}
.options-global-box .options-label{
    margin-bottom: 18px;
}
.options-local-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
}
.options-box .each-option{

}
</style>