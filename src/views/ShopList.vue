<script>
export default {
  data() {
    return {
        shopItemList: [
            {id: '1', shopItem: 'Milk', where: 'Walmart', price: '4'},
            {id: '2', shopItem: 'Comb', where: '', price: '4'},
            {id: '3', shopItem: 'Chicken & Turkey', where: 'African Store', price: '4'},
            {id: '4', shopItem: 'Beans', where: 'African Store', price: '4'},
            {id: '5', shopItem: 'Rice', where: '', price: '4'},
            {id: '6', shopItem: 'Clothes', where: '', price: '4'},
            {id: '7', shopItem: 'Office chair/table(kijiji)', where: '', price: '4'},
            {id: '8', shopItem: 'Chinchin', where: 'African Store', price: ''},
            {id: '9', shopItem: 'Fish', where: 'African Store', price: ''},
            {id: '10', shopItem: 'Raw Rice', where: 'Walmart', price: ''},
            {id: '11', shopItem: 'Vitamins', where: '', price: ''},
            {id: '12', shopItem: 'Safety Boots', where: 'walmart', price: ''},
            {id: '13', shopItem: 'Milo', where: 'walmart', price: ''},
            {id: '14', shopItem: 'Knife', where: 'walmart', price: ''},
            {id: '15', shopItem: 'Noodles', where: 'walmart', price: ''},
            {id: '16', shopItem: 'Sponge', where: 'African Store', price: ''},
            {id: '17', shopItem: 'Relaxer', where: 'Walmart', price: ''},
            {id: '18', shopItem: 'Laundry basket', where: 'Walmart', price: ''},
            {id: '19', shopItem: 'Shoe rack', where: 'Walmart', price: ''},
            {id: '20', shopItem: 'Singlet', where: 'Walmart', price: ''},

            // {id: '', shopItem: '', where: '', price: ''}
        ],
        newShopItem: ''
    }
  }
}
</script>

<template>
    <div class="shopping-list-box">
        <h3>Shopping List</h3>
        <ul class="shop-list-box">
            <li v-for="item in shopItemList" :key="item.id" class="shop-item">
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