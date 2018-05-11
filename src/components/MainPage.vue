<template>
    <div>
        <app-header></app-header>
        <app-part-1></app-part-1>
        <app-part-2></app-part-2>
        <app-part-3></app-part-3>
        <app-part-4></app-part-4>
        <app-part-5></app-part-5>
        <app-part-6></app-part-6>
        <app-part-7></app-part-7>
        <app-part-8></app-part-8>
        <app-part-9x1></app-part-9x1>
        <app-part-9x2></app-part-9x2>
        <app-part-10></app-part-10>
        <app-part-11></app-part-11>
        <app-part-12></app-part-12>
        <app-part-13></app-part-13>
        <app-part-14></app-part-14>
        <app-part-15></app-part-15>
        <app-part-16></app-part-16>
        <app-part-17></app-part-17>
        <app-part-18></app-part-18>
        <app-part-19></app-part-19>
        <app-footer></app-footer>

        <!-- <span>Hello {{VariableOne}}!</span>
        <span>in {{VariableTwo}}</span> -->
    </div>
</template>

<script>
import AppHeader from './Header.vue'
import AppPart1 from './Part_1.vue'
import AppPart2 from './Part_2.vue'
import AppPart3 from './Part_3.vue'
import AppPart4 from './Part_4.vue'
import AppPart5 from './Part_5.vue'
import AppPart6 from './Part_6.vue'
import AppPart7 from './Part_7.vue'
import AppPart8 from './Part_8.vue'
import AppPart9x1 from './Part_9_1.vue'
import AppPart9x2 from './Part_9_2.vue'
import AppPart10 from './Part_10.vue'
import AppPart11 from './Part_11.vue'
import AppPart12 from './Part_12.vue'
import AppPart13 from './Part_13.vue'
import AppPart14 from './Part_14.vue'
import AppPart15 from './Part_15.vue'
import AppPart16 from './Part_16.vue'
import AppPart17 from './Part_17.vue'
import AppPart18 from './Part_18.vue'
import AppPart19 from './Part_19.vue'
import AppFooter from './Footer.vue'

import _ from 'lodash'

export default {
    name: 'MainPage',
    components: { AppHeader, AppPart1, AppPart2, AppPart3, AppPart4, AppPart5, AppPart6, AppPart7, AppPart8, AppPart9x1, AppPart9x2, AppPart10, AppPart11, AppPart12, AppPart13, AppPart14, AppPart15, AppPart16, AppPart17, AppPart18, AppPart19, AppFooter },
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

