<template>
    <div>
        <header></header>
        
        <span>Hello {{VariableOne}}!</span>
        <span>in {{VariableTwo}}</span>
    </div>
</template>

<script>
import Header from './Header.vue'
import _ from 'lodash'

export default {
    name: 'MainPage',
    components: { Header },
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

