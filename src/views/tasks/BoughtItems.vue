<template>
    <div class="bought-items_view">
        <h3>Bought Items</h3>
        <div>
            <div v-for="item in boughtItems"  :key="item.id" class="bought-item">
                <h5>{{ item.name }}</h5>
                <span>Price: <sup>$</sup>{{ item.displayedPrice }}</span> <br>
                <span>Total: <sup>$</sup>{{ item.totalPrice }}</span> <br>
                <span>@{{ item.store }}</span> <br>
                <span>Purchased: {{ item.purchaseDate }}</span> <br>
                <span>Delivered: {{ item.deliveryDate }}</span>
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
                {"name": "Table", "displayedPrice": 119.99, "totalPrice": 135.59, "store": "BestBuy", "purchaseDate": "February 20, 2023", "deliveryDate": "February 24, 2023" },
                {"name": "Humidifier", "displayedPrice": 49.99, "totalPrice": 56.49, "store": "Canadian Tire", "purchaseDate": "04 March 2023", "deliveryDate": "" },
                {"name": "Heater", "displayedPrice": 28.99, "totalPrice": 35, "store": "Canadian Tire", "purchaseDate": "Feb 25, 2023", "deliveryDate": "" },
                {"name": "TML RayCroft Cap", "displayedPrice": 19.99, "totalPrice": 22.59, "store": "Canadian Tire", "purchaseDate": "Feb 25, 2023", "deliveryDate": "" },
                {"name": "Keyboard", "displayedPrice": 65.98, "totalPrice": 74.56, "store": "Amazon", "purchaseDate": "March 4, 2023", "deliveryDate": "March 8, 2023" },
                {"name": "Type-A Mesh Bin", "displayedPrice": 9.74, "totalPrice": 11.01, "store": "Canadian Tire", "purchaseDate": "June 11, 2023" }
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