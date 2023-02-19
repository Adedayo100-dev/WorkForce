<template>
    <div class="work-details-container">
        <h3>Shift Details</h3>
        <p class="shift-details-location">Minova</p>
        <h4>826.25 <span class="small-currency">CAD</span></h4>
        <ul>
            <li class="dates-output">Mon 14 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Tue 15 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Wed 16 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Thur 17 Feb, 2023 <span>8.5hrs</span></li>
            <li class="dates-output">Fri 18 Feb, 2023 <span>8.5hrs</span></li>
        </ul>
        <p>Total hours: 45.5hrs</p>
        <p class="work-details-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, accusamus nulla! Laboriosam officiis molestias quidem atque, asperiores eveniet ducimus accusamus amet magni ea dicta, quaerat eos temporibus. Eum, eligendi voluptates!</p>
    </div>
</template>

<script>
export default {
    name: 'WorkDetails',
}
</script>

<style>
.work-details-container{
    min-width: 360px;
}
.work-details-description{
    max-width: 200px;
}
</style>