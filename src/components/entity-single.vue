<template>
    <a href="#" class="card">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ entity.name }}</h6>
        </div>
    </a>
</template>

<script>
    export default {
        props: [
            'entity'
        ]
    }
</script>

<style scoped>

</style>