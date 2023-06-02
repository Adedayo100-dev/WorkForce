<script>
    // import VDotsIcon from '../components/icons/IconVDots.vue'
    import ExpandFullIcon from '../components/icons/IconExpandFull.vue'
    export default {
        components: {
            ExpandFullIcon
        },
        props: ['title', 'body', 'date','idx']
    }
</script>

<template>
    <div class="notification-item">
        <div>
            <div class="flex-out">
                <h4>{{title}}</h4>
                <div class="notifications-options">
                    <div class="invisible-buttons">
                        <button>Done</button>
                        <button>Acknowledged</button>
                    </div>
                    <div class="icon-container">
                        <ExpandFullIcon/>
                    </div>
                </div>
            </div>
            <p class="notification-body">{{body}}</p>
        </div>
        <span class="notification-date">{{date}}</span>
    </div>
</template>

<style scoped>
.flex-out{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.notifications-options{
    display: flex;
}
.invisible-buttons{
    display: flex;
    gap: 10px;
}
.icon-container{
    margin: 0 10px;
    display: flex;
    align-items: center;
    fill: grey;
}
</style>