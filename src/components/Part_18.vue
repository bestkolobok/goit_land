<template>
    <div class="conteiner">
      <div class="wrapper">
        <div class="head">
          <h2>
            <span>_</span> ЧТО, ЕСЛИ ВЫ ТАК И НЕ РЕШИТЕСЬ НА ИЗМЕНЕНИЯ В КАРЬЕРЕ...
          </h2>
        </div>
        <div class="foto">
          <!-- <div class="foto__shadow"></div> -->
          <img class="foto__wrap" src="../assets/img/app18/neudachniki_shadow.png" alt="neudachniki">
          <img class="foto__img" src="../assets/img/app18/neudachniki.png" alt="neudachniki">
        </div>
        <div class="description">
          <p>
            Будете и дальше ныть, что <span>денег не хватает</span>, всю жизнь ходить на <span>нелюбимую работу</span>, 
            завидовать друзьям с собственными квартирами, машинами, а Айфон, Макбук и <span>путешествия заграницу</span> так и останутся вашими мечтами…
          </p>
          <h4>
            ВЫ ТАК И НЕ НАЧНЕТЕ ЖИТЬ ПО-НАСТОЯЩЕМУ!
          </h4>
          <h5>
            И самое страшное – будете всегда недовольны собой
          </h5>
        </div>
        <div class="footer">
          <img class="footer__frame" src="../assets/img/app18/frame.png" alt="frame">
          <div class="footer__quote">
            <p>
              А может быть по-другому… и вы сейчас в 1 шаге от 
              качественных изменений своей жизни
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{ 
  width: 100%;
  // height: 1931px;
  background-color: white;
  .wrapper{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    .head{
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      // height: 276px;
      width: 100%;
      h2{
        margin-top: 4.4rem;
        // max-width: 260px;
        font-family: MuseoSansCyrl;
        font-weight: 900;
        line-height: 2.1rem;
        text-align: center;
        span{
          color:$main-blue;
        }
      }
    }
    .foto{
      margin-top: 2rem;
      position: relative;
      width: 100%;
      height: 100%;
      &__wrap{
        position: absolute;
        top: 9px;
        left: 9px;
        width: 100%;
        background-color: $main-blue;
        box-shadow: 0px 31px 24px 0px rgba(0, 0, 0, 0.09);
      }
      &__img{
        position: relative;
        width: 100%;
        box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.2);
      }
    }
    .description{
      margin-top: 3rem;
      p{
        font-family: OpenSans;
        font-weight: 400;
        line-height: 1.85rem;
        text-align: left;
        span{
          font-weight: 700;
        }
      }
      h4{
        margin-top: 2rem;
        max-width: 250px;
        font-family: OpenSans;
        font-weight: 800;
        line-height: 1.7rem;
        text-align: left;
      }
      h5{
        margin-top: 0.8rem;
        font-family: OpenSans;
        font-weight: 800;
        line-height: 1.4rem;
        text-align: left;
      }
    }
    .footer{
      position: relative;
      margin: 2rem 0 4rem;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      &__frame{
        width: 70vw;
      }
      &__quote{
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        width: 70vw;
        height: 100%;
        padding: 0 2rem;
        p{
          font-family: UbuntuMono;
          font-weight: 700;
          line-height: 1.7rem;
          text-align: left;
        }
      }
    }
  }
}

</style>