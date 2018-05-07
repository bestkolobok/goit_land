<template>
    <div class="wrapper">
      <div class="field">
        <h4 class="field__title">
          Запишитесь на курс:
        </h4>
        <div class="field__top-line"></div>
        <h4 class="field__phone">
          +38 (093) 343-21-27
        </h4>
        <button class="field__button">
          ПЕРЕЗВОНИТЕ МНЕ
        </button>
        <div class="field__bottom-line"></div>
        <div class="field__social-container">
          <img src="../assets/img/footer/twitter.svg" alt="twitter">
          <img src="../assets/img/footer/facebook-logo-button.svg" alt="facebook">
        </div>
        <div class="field__copywrite">
          <p>
            &copy;2018. Онлайн-курс &laquo;Full Stack-разработчик с нуля&raquo; в GoIt.
          </p>
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
.wrapper{ 
  width: 100%;
  height: 316px;
  background-color:  #242427;
  .field{
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 320px;
    height: 100%;
    
    h4{
      position: absolute;
      font-family: MuseoSansCyrl;
      font-weight: 900;
      color:  #ffffff;
      line-height: 1.3rem;
      text-align: center;
    }
    &__title{
      top: 39px;
    }
    &__top-line{
      position: absolute;
      top: 60px;
      background-color:  #00bcd4;
      width: 158px;
      height: 2px;
    }
    &__phone{
      top: 80px;
    }
    &__button{
      position: absolute;
      top: 108px;
      border-radius: 4px;
      border: 0 black solid;
      background-color:  #00bcd4;
      width: 175px;
      height: 34px;
      font-family: MuseoSansCyrl;
      font-weight: 900;
      cursor: pointer;
    }
    &__bottom-line{
      position: absolute;
      top: 167px;
      background-color:  #ffffff;
      width: 150px;
      height: 2px;
    }
    &__social-container{
      position: absolute;
      top: 188px;
      img{
        width: 40px;
        margin: 0 9px;
        cursor: pointer;
      }
    }
    &__copywrite{
      position: absolute;
      top: 255px;
      max-width: 220px;
      p{
        font-family: UbuntuMono;
        color:  #ffffff;
        font-weight: 400;
        line-height: 1.3rem;
        text-align: center;
      }
    }
  }
}

</style>