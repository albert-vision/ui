<template>
    <div class="col col-md-6 m-auto">
        <h3 class="page-header">Create Entity</h3>
        <form action>
            <div class="form-group">
                <input type="text" placeholder="Entity name" v-model="newEntity.name" class="form-control" />
            </div>
            <h5 class="mt-5">Properties</h5>
            <hr>
            <div v-for="(property, index) in newEntity.properties" :key="property.label" class="form-group">
                <div class="row">
                    <div class="col">
                        <select v-model="property.type" id="type" class="form-control">
                            <option value="0" disabled>Select type</option>
                            <option v-for="type in baseTypes" :key="type.label" :value="type">{{ type.label }}</option>
                        </select>
                        <label class="form-text">
                            <input type="checkbox" v-model="property.multiple">
                            List
                        </label>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="property.name" class="form-control" placeholder="Property name">
                        <div class="action-buttons">
                            <button @click.prevent="removeProperty(index)" class="btn btn-danger">X</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="form-group">
                <button @click.prevent="addProperty()" class="btn btn-outline-secondary">Add New Property</button>
                <button class="btn btn-primary" @click.prevent="createEntity()">Save Entity</button>
            </div>
        </form>
    </div>
</template>


<script>
    import {CHANGE_STEP, CREATE_ENTITY, CREATE_PROPERTY} from '@/store/modules/projects'

    export default {
        data() {
            return {
                newProperty: {},
                newEntity: {
                    name: '',
                    properties: [{}],

                }
            }
        },
        computed: {
            baseTypes() {
                return this.$store.getters.baseTypes
            },

        },
        methods: {
            addProperty() {
                // todo validation

                this.$data.newEntity.properties.push({})
                this.$data.newProperty = {}
            },
            removeProperty(index) {
                this.$data.newEntity.properties.splice(index, 1);
            },
            createEntity() {
                this.$store.dispatch(CREATE_ENTITY, this.newEntity)
                // this.$store.dispatch(CHANGE_STEP, 3)
                this.$router.push({name: 'entities.list'})

            }
        }
    }

</script>

<style>
</style>