<template>
    <div>
        <app-header></app-header>

        <span>Hello {{VariableOne}}!</span>
        <span>in {{VariableTwo}}</span>
    </div>
</template>

<script>
import AppHeader from './Header.vue'
import _ from 'lodash'

export default {
    name: 'MainPage',
    components: { AppHeader },
    data(){
        return{
            VariableOne: 'World',
            VariableTwo: 'GoIt'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

