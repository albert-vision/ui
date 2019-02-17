<template>
    <div class="container">
        <h1 class="page-header">Entities</h1>
        <div class="row">
            <div class="col-3" v-for="entity in entities">
                <entity-single :entity="entity"></entity-single>
            </div>
        </div>
    </div>
</template>

<script>
    import enitySingle from '@/components/entity-single'
    import EntitySingle from "../../components/entity-single";

    export default {
        name: "list",
        components: {EntitySingle},
        data() {
            return {}
        },
        computed: {
            entities() {
                return this.$store.getters.newProject.entities
            }
        }
    }
</script>

<style scoped>

</style>