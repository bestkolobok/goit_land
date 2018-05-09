<template>
    <div class="conteiner">
      <div class="head">
          <h2>
            <span>_</span>КАК УЗНАТЬ, ПОДХОДИТ ЛИ ВАМ КУРС?
          </h2>
        </div>
      <div class="wrapper"> 
        <div class="unit for-u">
          <h2><span>Для Вас</span>, если:</h2>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_blue"></div>
            <div class="unit__article">
              <p>хотите сменить профессию;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_blue"></div>
            <div class="unit__article">
              <p>интересуетесь технологиями и IT-сферой;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_blue"></div>
            <div class="unit__article">
              <p>готовы тратить время, чтобы разобраться и научиться;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_blue"></div>
            <div class="unit__article">
              <p>хотите получить интересную работу;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_blue"></div>
            <div class="unit__article">
              <p>мечтаете зарабатывать от 2000 долларов и иметь перспективы в карьере.</p>
            </div>
          </div>
        </div>

        <div class="unit not-for-u">
          <h2><span>НЕ Для Вас</span>, если:</h2>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_red"></div>
            <div class="unit__article">
              <p>не готовы тратить (min) по 2-3 часа в день или 15 часов в неделю на обучение и практику;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_red"></div>
            <div class="unit__article">
              <p>рассчитываете на «магию» и не хотите вложить свои ресурсы для достижения цели;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_dark-red"></div>
            <div class="unit__article">
              <p>важнее работа/друзья/Варкрафт/сериалы;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_red"></div>
            <div class="unit__article">
              <p>ленитесь, всегда некогда, а вдруг не получится;</p>
            </div>
          </div>
          <div class="unit__row">
            <div class="unit__bullet unit__bullet_red"></div>
            <div class="unit__article">
              <p>хотите ничего не делать и успешно работать в IT.</p>
            </div>
          </div>
        </div>

        <div class="footer">
          <h5>
            ЕСЛИ ВЫ ГОТОВЫ СТАРАТЬСЯ, КУРС GOIT СТАНЕТ ОТЛИЧНЫМ СТАРТОМ ВАШЕГО ПУТИ В 
            IT-СФЕРЕ И ОКУПИТСЯ В ПЕРВЫЙ ГОД РЕАЛЬНОЙ РАБОТЫ.
          </h5>
          <button class="footer__button">НАЧАТЬ ОБУЧЕНИЕ НА КУРСЕ</button>
        </div>
        
      </div>
    </div>
</template>

<script>

export default {
  name: 'Part_17',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .conteiner{ 
  width: 100%;
  background-color: $main-black;
  .head{
    position: relative;
    display: flex;
    padding: 0 5%;
    align-items: center;
    flex-direction: column;
    // height: 276px;
    width: 100%;
    background-color: white;
    h2{
      margin: 5rem 0 3rem;
      font-family: MuseoSansCyrl;
      font-weight: 900;
      line-height: 2.1rem;
      text-align: center;
      span{
        color:$main-blue;
      }
    }
  }
  .wrapper{
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    
    .unit{
      margin-top: 1.2rem;
      padding: 2rem 5%;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      // max-width: 90vh;
      background-color: #ffffff;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
      h2{
        margin-left: 0.4rem;
        margin-bottom: 0.9rem; 
        width: 100%;
        font-family: UbuntuMono;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 2.3rem;
        text-align: left;
        span{
          padding: 0.3rem 0.6rem;
          color: $main-blue;
          background-color: $main-black;
        }
      }
      &__row{
        display: flex;
        justify-content: space-between;
        margin-top:1.2rem;
        width: 100%;
      }    
      &__bullet{
        margin-top: 0.2rem;
        border-radius: 50%;
        border-width: 3px;
        border-color:  #ffffff;
        border-style: solid;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.18);
        width: 18px;
        height: 18px;
      }
      &__bullet_blue{
        background-color:  $main-blue;
      }
      &__bullet_red{
        background-color:  #ff1743;
      }
      &__bullet_dark-red{
        background-color:  #81041c;
      }
      &__article{
        padding-left: 0.8rem;
        width: 100%;
        p{
          font-family: OpenSans;
          font-weight: 700;
          line-height: 1.7rem;
          text-align: left;
        }

      }
        
      
    }
    .footer{
      h5{
        margin-top: 3.9rem;
        font-family: MuseoSansCyrl;
        font-weight: 500;
        color: white;
        line-height: 1.4rem;
        text-align: center;
      }
      &__button{
        margin: 2rem auto 5rem;
        border-radius: 5px;
        border: 0;
        background: linear-gradient(90deg, #ffc617 0%, #fb0740 100%);
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
        width: 100%;
        height: 55px;

        font-family: MuseoSansCyrl;
        font-weight: 900;
        color:  #ffffff;
        font-size: 1rem;
        line-height: 1.9rem;
        text-align: center;
        text-shadow: 0px 1px 1px rgba(28, 28, 30, 0.32);
      }
    }
      
 



     
      
    
  }

}
</style>