<template>
    <div class="bought-items_view">
        <h3>Bought Items</h3>
        <div>
            <div v-for="item in boughtItems"  :key="item.id" class="bought-item">
                <h5>{{ item.name }}</h5>
                <span>Price: <sup>$</sup>{{ item.displayedPrice }}</span> <br>
                <span>Total: <sup>$</sup>{{ item.totalPrice }}</span> <br>
                <span>@{{ item.store }}</span> <br>
                <span>Date: {{ item.purchaseDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoughtItems',
    data() {
        return {
            boughtItems: [
                {"name": "TV & Bike", "displayedPrice": 375, "totalPrice": 375, "store": "Ugo", "purchaseDate": "", "deliveryDate": "" },
                {"name": "Table", "displayedPrice": 119.99, "totalPrice": 135, "store": "BestBuy", "purchaseDate": "", "deliveryDate": "" },
                {"name": "Humidifier", "displayedPrice": 49.99, "totalPrice": 56.49, "store": "Canadian Tire", "purchaseDate": "04 March 2023", "deliveryDate": "" },
                {"name": "Heater", "displayedPrice": 28.99, "totalPrice":35, "store": "Canadian Tire", "purchaseDate": "Feb 25, 2023", "deliveryDate": "" },
                {"name": "TML RayCroft Cap", "displayedPrice": 19.99, "totalPrice":22.59, "store": "", "purchaseDate": "Feb 25, 2023", "deliveryDate": "" },
                {"name": "Keyboard", "displayedPrice": 65.98, "totalPrice":74, "store": "", "purchaseDate": "", "deliveryDate": "" }
            ]
        }
    },
}
</script>
<style scoped>
.bought-item{
    margin: 12px 0;
}
h5{
    margin: 0;
}
</style>