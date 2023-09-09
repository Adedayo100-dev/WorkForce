<script>
    import EditIcon from '../../components/icons/IconEdit.vue'

export default {
    components: {
        EditIcon
    },
    data() {
        return {
            taxFiling: [
                {
                    "year": "2022",
                    "items": [
                        {"item": "StaffPlus", "duration": {"startDate": "Feb 2022", "endDate": "Apr 2022"}},
                        {"item": "School", "duration": {"startDate": "Jan 2022", "endDate": "Dec 2023"}},
                        {"item": "Blitz Personnel", "duration": {"startDate": "May 2022", "endDate": "May 2022"}},
                        {"item": "Service Master", "duration": {"startDate": "May 2022", "endDate": "Dec 2022"}},
                        {"item": "GigHound", "duration": {"startDate": "unavailable", "endDate": "unavailable"}},
                        {"item": "Vertical SR", "duration": {"startDate": "unavailable", "endDate": "unavailable"}},
                    ]
                },
                {
                    "year": "2023",
                    "items": [
                        {"item": "is2 :: Minova", "duration": {"startDate": "Jan 2023", "endDate": "Apr 2023"}},
                        {"item": "Seasons+", "duration": {"startDate": "June 2023", "endDate": "Sep 2023"}}
                    ]
                }
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
        <div class="margin-x">
            <div v-for="taxYear in taxFiling" :key="taxYear.id">
                <h5>{{ taxYear.year }} <EditIcon height="16px"/></h5>     
                <ul class="s" >
                    <li v-for="item in taxYear.items" :key="item.id" class="shop-item">
                        <!-- <input type="checkbox" name="" id="">  -->
                        <div>{{item.item}}</div>
                        <div class="tax-duration">{{ item.duration.startDate }} - {{ item.duration.endDate }}</div> 
                    </li>
                    <li>
                        <input v-model="newShopItem" placeholder="New Item" class="shopping-list_input"/>
                    </li>
                </ul>
            </div>
            <div>
                <a href="https://apps.cra-arc.gc.ca/ebci/rhpd/beta/ng/step1" class="blue-link-color" target="_blank">Canada Payroll Calculator &#x1F855;</a>
            </div>
        </div>
        
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
    li.shop-item{
        font-size: 14px;
        color: #363636;
        margin-bottom: 10px;
        font-size: .875rem;
        line-height: 1.5;
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
    }
    .tax-duration{
        font-size: 10px;
        color: rgb(133, 140, 148);
    }
</style>