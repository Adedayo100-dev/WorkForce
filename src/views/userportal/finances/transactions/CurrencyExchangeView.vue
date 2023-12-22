<template>
    <p>Currency exchange</p><span>Jul 16, 1:05 a.m</span>
        <select>
            <option value="CAD">CAD</option>
            <option value="Naira">Naira</option>
        </select> &nbsp; to &nbsp;
        <select>
            <option value="Naira">Naira</option>
            <option value="CAD">CAD</option>
        </select>
        <p>Goggle: $ 627</p>
        <p>LemFi: $ 627</p>
        <p>Africhange: $ 627</p>
    <div v-for="data in exchangeData" :key="data.date">
        {{ data.date }} 
        <div v-for="(provider, key) in data.providers" :key="key">
            <span>{{ getProviderName(provider) }}:</span> &nbsp;
            <span>Buy: ${{ provider[getProviderName(provider)].buy }}</span>,
        <span>Sell: ${{ provider[getProviderName(provider)].sell }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exchangeData: [
                {
                    'date': '2023, july 15', 
                    'providers': [
                        {'Google':
                            {
                                'buy': 0,
                                'sell': 0,
                            }
                        },
                        {'Lemonade':
                            {
                                'buy': 0,
                                'sell': 640,
                            }
                        },
                        {'Africhange':
                            {
                                'buy': 0,
                                'sell': 627,
                            }
                        },
                    ]
                },
                {
                    'date': '2023, july 16', 
                    'providers': [
                        {'Google':
                            {
                                'buy': 0,
                                'sell': 0,
                            }
                        },
                        {'Lemonade':
                            {
                                'buy': 616,
                                'sell': 635,
                            }
                        },
                        {'Africhange':
                            {
                                'buy': 0,
                                'sell': 629,
                            }
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        getProviderName(provider) {
            return Object.keys(provider)[0];
        }
    }
}
</script>

<style scoped>

</style>