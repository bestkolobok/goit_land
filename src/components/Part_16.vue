<template>
    <div class="conteiner">
      <div class="wrapper">
        <div class="head">
          <h2>
            <span>_</span>ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div class="head__line"></div>
          <h5>КОТОРЫЕ НАМ ЗАДАЮТ ДО ПОКУПКИ КУРСА</h5>
        </div>
        <div class="questions-field">
          <div class="row">
            <div class="row__head" @click="visible(1)">
              <h5>А МОЖНО ОПЛАТИТЬ ЧАСТЯМИ?</h5>
            </div>
            <div class="row__bottom" v-if="visibleBottom === 1">
              <p>
                Это оптимальный срок
              </p>
            </div>
          </div>
          <div class="row">
            <div class="row__head" @click="visible(2)">
              <h5>9 МЕСЯЦЕВ, ЧЕГО ТАК ДОЛГО?</h5>
            </div>
            <div class="row__bottom" v-show="visibleBottom === 2">
              <p>
                Это оптимальный срок обучения для выполнения всех проектов и полного усвоения материала. 
              </p>
            </div>
          </div>
          <div class="row">
            <div class="row__head" @click="visible(3)">
              <h5>КАК ПРОХОДИТ ОБУЧЕНИЕ?</h5>
            </div>
            <div class="row__bottom" v-show="visibleBottom === 3">
              <p>

              </p>
            </div>
          </div>
          <div class="row">
            <div class="row__head" @click="visible(4)">
              <h5>ЧТО ДЕЛАТЬ, ЕСЛИ Я ПРОПУСТИЛ ЗАНЯТИЕ?</h5>
            </div>
            <div class="row__bottom" v-show="visibleBottom === 4">
              <p>

              </p>
            </div>
          </div>

        </div>
      </div>
      
  
    </div>
</template>

<script>

export default {
  name: 'Part_16',
  data(){
    return{
      visibleBottom: 0
    }
  },
  methods:{
    visible(item){
      this.visibleBottom = item !== this.visibleBottom ? item : 0;
      // console.log(this.visibleBottom)
    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{
  width: 100%;
  background-color: white;
  .wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 2rem;
    width: 90%;
    .head{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      h2{
        margin-top: 4.2rem;
        font-family: MuseoSansCyrl;
        font-weight: 900;
        line-height: 2.1rem;
        text-align: center;
        span{
          color:$main-blue;
        }
      }
      &__line{
        margin-top: 0.3rem;
        background-color: $main-black;
        width: 150px;
        height: 2px;
      }
      h5{
        margin-top: 1.25rem;
        padding: 0 1rem;
        line-height: 1.4rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 900;
      }
    }
    .questions-field{
      .row{
        margin: 1rem 0;
        border-radius: 5px;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.16);
        overflow: hidden;
        &__head{
          display: flex;
          align-items: center;
          padding: 1rem;
          min-height: 5.7rem;
          width: 100%;
          background-color:  #ededed;
          h5{
            font-family: OpenSans;
            font-weight: 800;
            line-height: 1.8rem;
            text-align: left;
          }
        }
        &__bottom{
          padding: 2rem 1rem;
          width: 100%;
          p{
            font-family: OpenSans;
            font-weight: 400;
            line-height: 1.7rem;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>