<template>
    <div>
        <span>Hello {{VariableOne}}!</span>
        <span>in {{VariableTwo}}</span>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'MainPage',
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

