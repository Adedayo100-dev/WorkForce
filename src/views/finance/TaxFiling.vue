<script>
export default {
    data() {
        return {
            taxFiling: [
                {"item": "StaffPlus"},
                {"item": "School"},
                {"item": "Blitz Personnel"},
                {"item": "Service Master"},
                {"item": "GigHound"},
                {"item": "Vertical SR"},
                {"item": "StaffPlus"}
            ],
            newShopItem: ''
        }
    },
    // mounted() {
    //     fetch('http://localhost:3000/api/taxFiling')
    //         .then(res => res.json())
    //         .then(data => this.shoppingList = data)
    //         .catch(err => console.log(err.message));
    // },
}
</script>

<template>
    <div class="tax-filing">
        <h3>Taxes</h3>
        <ul class="s">
            <li v-for="item in taxFiling" :key="item.id" class="shop-item">
                <!-- <input type="checkbox" name="" id="">  -->
                {{item.item}}
            </li>
            <li>
                <input v-model="newShopItem" placeholder="New Item" class="shopping-list_input"/>
            </li>
        </ul>
    </div>
    <!-- Example: https://webflow.com/templates/html/finance-x-finance-website-template -->
</template>

<style scoped>
.tax-filing{
}
    .s{
        font-family: Inter,sans-serif;
        padding: 0 var(--x-margin);
    }
    li{
        font-size: 14px;
        color: #363636;
        margin-bottom: 10px;
        font-size: .875rem;
        line-height: 1.5;
    }
</style>