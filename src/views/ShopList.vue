<script>
export default {
    data() {
        return {
            shoppingList: [],
            newShopItem: ''
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/shoppingList')
            .then(res => res.json())
            .then(data => this.shoppingList = data)
            .catch(err => console.log(err.message));
    },
}
</script>

<template>
    <div class="shopping-list-box">
        <h3>Shopping List</h3>
        <ul class="shop-list-box">
            <li v-for="item in shoppingList" :key="item.id" class="shop-item">
                {{item.shopItem}}
            </li>
            <!-- Check Youtube for how to handle Vue forms -->
            <li>
                <input v-model="newShopItem" placeholder="New Item" class="shopping-list_input"/>
            </li>
        </ul>
    </div>
</template>

<style>
    .shop-list-box{
        list-style: none;
        padding: 0;
        font-size: 12px;
    }
    .shop-item{
        padding: 4px 0;
    }
    .shopping-list_input{
        border: 1px solid rgb(238, 238, 238);
        padding: 8px 12px;
        border-radius: 6px;
        margin: 4px 0;
        font-size: 12px;
    }
    .shopping-list_input:focus{
        outline: 2px solid #006aff;
    }
</style>