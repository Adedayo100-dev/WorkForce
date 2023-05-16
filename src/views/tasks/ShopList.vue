<script>
import axios from 'axios'
export default {
    data() {
        return {
            shoppingList: [],
            newShopItem:{
                    inputAmount: null,
                    inputRate: null,
                    inputTime: {
                        inputDate: null,
                        inputTime: null,
                    },
                },
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/shopping')
            .then(res => res.json())
            .then(data => this.shoppingList = data)
            .catch(err => console.log(err.message));
    },
    methods: {
            createShopItem(){
                console.log('Shopping Form values', this.newShopItem);
                axios.post('http://localhost:3000/api/shopping', this.newShopItem, {headers:{"Content-Type" : "application/json"}})
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            },
        },
}
</script>

<template>
    <div class="shopping-list-box">
        <h3>Shopping List</h3>
        <ul class="shop-list-box">
            <li v-for="item in shoppingList" :key="item.id" class="shop-item">
                <input type="checkbox" name="" id="">{{item.shopItem}}
            </li>
            <!-- Check Youtube for how to handle Vue forms -->
            <li>
                <form @submit.prevent="createShopItem" action="">
                    <input v-model="newShopItem.inputAmount" placeholder="New Item" class="shopping-list_input"/>
                    <input v-model="newShopItem.inputRate" placeholder="Amount" class="shopping-list_input"/>
                    <input v-model="newShopItem.inputTime.inputDate" placeholder="StartDate" class="shopping-list_input"/>
                    <input v-model="newShopItem.inputTime.inputTime" placeholder="StartTime" class="shopping-list_input"/>
                    <input type="submit" value="">
                </form>
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