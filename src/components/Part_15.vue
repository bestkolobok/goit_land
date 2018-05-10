<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2>
          <span>_</span>ЧТО ПОЛУЧАЕТ КАЖДЫЙ ВЫПУСКНИК
        </h2>
      </div>
      <div class="image">
        <img src="../assets/img/app15/code.png" alt="code">
      </div>
      <div class="field">
        <div class="field__wrap">
          <div class="field__line"></div>
          <div class="field__title">
            <h4><span>Понимание</span> технологий и процесса разработки приложений + <span>реальный опыт разработки</span></h4>
          </div>
          <div class="field__list"> 
            <div class="row">
              <div class="row__bullet"></div>
              <div class="row__article">
                <p><span>5 готовых проектов в портфолио</span> (разного уровня сложности: <span>3</span> в команде + <span>2</span> персональные)</p>
              </div>
            </div>
            <div class="row">
              <div class="row__bullet"></div>
              <div class="row__article">
                <p>навыки работы в Agile командах</p>
              </div>
            </div>
            <div class="row">
              <div class="row__bullet"></div>
              <div class="row__article">
                <p><span>карьерные навыки</span> (консультации + подготовка резюме)</p>
              </div>
            </div>
            <div class="row">
              <div class="row__bullet"></div>
              <div class="row__article">
                <p>доступ к учебным материалам после курса - удобная &laquo;шпаргалка&raquo; для реальной работы</p>
              </div>
            </div>
          </div>
          <div class="field__line"></div>
          <div class="field__title">
            <h4><span>Возможность занять должность веб-разработчика через 9 месяцев,</span></h4>
            <h5>даже если до этого вы работали в другой сфере</h5>
          </div>
          <div class="field__quote">
            <p>
              В конце обучения вы получаете <span>сертификат о прохождении курса</span> &laquo;Full stack-разработчик с нуля&raquo;.
            </p>
          </div>
          <button class="field__button">НАЧАТЬ ОБУЧЕНИЕ НА КУРСЕ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Part_15',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{ 
  width: 100%;
  background: url(../assets/img/app19/background_small.png) repeat rgb(210, 214, 213);
  .wrapper{
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
      width: 100%;
      h2{
        margin-top: 3.5rem;
        font-family: MuseoSansCyrl;
        font-weight: 900;
        line-height: 2.1rem;
        text-align: center;
        span{
          color:$main-blue;
        }
      }
    }
    .image{
      margin-top: 2rem;
      width: 100%;
      img{
        margin-bottom: -3px;
        width: 100%;
      }
    }
    .field{
      margin-bottom: 4rem;
      width: 100%;
      background-color: #fafafa;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      &__wrap{
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
      }
      &__line{
        margin: 3.5rem auto 1rem;
        background-color:  $main-blue;
        width: 250px;
        height: 2px;
      }
      &__title{
        h4{
          font-family: OpenSans;
          font-weight: 600;
          line-height: 1.7rem;
          text-align: center;
          span{
            font-weight: 800;
          }
        }
        h5{
          padding-left: 3%;
          margin-top: 1.5rem;
          font-family: OpenSans;
          font-weight: 400;
          line-height: 1.7rem;
          text-align: left;
        }
      }
      &__list{
        margin-top: 5px;
        margin-bottom: 3.5rem;
        width: 90%;
        .row{
          display: flex;
          justify-content: space-between;
          margin-top:1.2rem;
          width: 100%;
          &__bullet{
            margin-top: 0.1rem;
            border-radius: 50%;
            background-color:  $main-blue;
            width: 19.5px;
            height: 18px;
          }
          &__article{
            padding-left: 0.8rem;
            width: 100%;
            p{
              font-family: OpenSans;
              font-weight: 600;
              line-height: 1.4rem;
              text-align: left;
            }
            span{
              font-family: OpenSans;
              font-weight: 800;
              line-height: 1.4rem;
            }
          }
        }
      }
      &__quote{
        margin: 2.5rem auto;
        padding: 1rem 1.8rem;
        width: 96%;
        border: 2px solid $main-black;
        p{
          font-family: OpenSans;
          font-weight: 600;
          line-height: 1.7rem;
          text-align: center;
          span{
            font-weight: 800;
          }
        }
      }
      &__button{
        margin: 0 auto 3rem;
        border-radius: 5px;
        background: linear-gradient(90deg, #ffc617 0%, #fb0740 100%);
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
        width: 250px;
        height: 55px;
        border: 0;

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