<script>
export default {
    // data() {
    //     return {
    //         shoppingList: [],
    //         newShopItem: ''
    //     }
    // },
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
        <h3>Tax Filing</h3>
        <ul class="s">
            <!-- <li v-for="item in shoppingList" :key="item.id" class="shop-item">
                <input type="checkbox" name="" id="">{{item.shopItem}}
            </li> -->
            <!-- Check Youtube for how to handle Vue forms -->
            <!-- <li>
                <input v-model="newShopItem" placeholder="New Item" class="shopping-list_input"/>
            </li> -->
            <li>StaffPlus T4</li>
            <li>Blitz Personnel T4</li>
        </ul>
    </div>
</template>

<style>
    
</style>