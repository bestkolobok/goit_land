<template>
    <div class="conteiner">
      <div class="wrapper">
        <div class="head">
          <h2>
            <span>_</span>СТАНЬТЕ УВЕРЕННЫМ НАЧИНАЮЩИМ <br/>IT-РАЗРАБОТЧИКОМ
          </h2>
          <div class="head__line"></div>
          <h5>
            И ВАШЕ ДОСТОЙНОЕ РЕЗЮМЕ СРАЗУ ЗАМЕТЯТ КРУПНЫЕ КОМПАНИИ, СТАРТАПЫ, КОМАНДЫ
          </h5>
        </div>
        <div class="cv">
          <div class="cv__avatar">
            <img src="../assets/img/app19/avatar.png" alt="avatar">
            <div class="cv__avatar-name">
              <h2>Антон Комаров</h2>
              <p>Junior FE-разработчик</p>
            </div>
          </div>
          <div class="cv__main">
            <div class="main-item tech-skills">
              <h3>Технические навыки:</h3>
              <div class="main-item__line"></div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>HTML:</span> основы, семантика, a11y</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>CSS:</span> основы, flefbox, adaptive and mobile-first css, BEM, SASS</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>JavaScript:</span> основы, ES5/ES6+, DOM/BOM, AJAX, patterns, Gulp, Webpack</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>REACT:</span> основы, управление состоянием с Redux, routing на стороне клиента, patterns, тестирование</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>NodeJS:</span> vanilla NodeJS, Express, MomgoDB, Mongoose, JWT</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p><span>ОСНОВЫ И ИНСТРУМЕНТЫ:</span> terminal, git, github, npm, babel</p>
                </div>
              </div>
            </div>

            <div class="main-item soft-skills">
              <h3>Soft Skills:</h3>
              <div class="main-item__line"></div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>начальный уровень IT English</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>быстрая обучаемость</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>внимание к деталям</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>интерес к новым технологиям</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>хорошие коммуникативные навыки</p>
                </div>
              </div>
            </div>

            <div class="main-item portfolio">
              <h3>Портфолио:</h3>
              <div class="main-item__line"></div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>3 вэб-приложения (в команде)</p>
                </div>
              </div>
              <div class="main-item__row">
                <div class="main-item__bullet"></div>
                <div class="main-item__article">
                  <p>2 проекта (самостоятельно)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order">
            <div class="order__wrapper">
              <h3>
                ЗАПИШИТЕСЬ НА КУРС &laquo;FULL STACK РАЗРАБОТЧИК С НУЛЯ&raquo;
              </h3>
              <div class="order__line"></div>
              <h5>
                И ГАРАНТИРОВАННО ПОЛУЧИТЕ ИНТЕРЕСНУЮ РАБОТУ ЧЕРЕЗ 9 МЕСЯЦЕВ ИЛИ РАНЬШЕ.
              </h5>
              <div class="order__input">
                <input type="text" v-model="name">
              </div>
              <div class="order__input">
                <input type="text" v-model="phone">
              </div>
              <div class="order__input">
                <input type="text" v-model="mail">
              </div>
              <div class="order__accept">
                <div class="order__accept-check-box" v-if="checkBox" @click="checkBox = !checkBox"></div>
                <div class="order__accept-check-box_active" v-else @click="checkBox = !checkBox"></div>
                <div class="order__accept-text">
                  <p>
                    Принимаю договор <span to="/">оферты</span> и даю согласие на обработку моих <span to="/">персональных данных</span> 
                  </p>
                </div>
              </div>
              <button class="order__button">НАЧАТЬ ОБУЧЕНИЕ НА КУРСЕ</button>
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
      checkBox: false,
      name: "Имя:",
      phone: "Телефон:",
      mail: "E-mail:",
    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{ 
  width: 100%;
  // height: 1931px;
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
      height: 276px;
      width: 100%;
      h2{
        margin-top: 4.2rem;
        // max-width: 260px;
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
        // max-width: 278px;
        line-height: 1.4rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 900;
      }
    }
    .cv{
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      // max-width: 90vh;
      background-color: #ffffff;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
      &__avatar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        // height: 6.4rem;
        height: 28vw;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        img{
          height: 100%;
          // width: 40vw;
        }
      }
      &__avatar-name{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        text-align: center;
        h2{
          font-family: UbuntuMono;
          font-size: 1.7rem;
          font-weight: 700;
          line-height: 2.3rem;
          text-align: left;
        }
        p{
          font-family: UbuntuMono;
          font-weight: 400;
          line-height: 1.5rem;
          text-align: left;
        }
      }
      &__main{
        margin-top: 5px;
        margin-bottom: 3.5rem;
        width: 90%;
        .main-item{
          margin-top: 2.4rem;
          h3{
            margin-left: 0.4rem; 
            font-family: UbuntuMono;
            font-weight: 700;
            line-height: 2.3rem;
            text-align: left;
          }
          &__line{
            margin: 0.25rem 0 2.5rem 0.7rem;
            background-color:  #242427;
            width: 80px;
            height: 2px;
          }
          &__row{
            display: flex;
            justify-content: space-between;
            margin-top:1.2rem;
            width: 100%;
          }
          &__bullet{
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
              margin-left: -0.4rem;
              padding: 0.2rem 0.4rem;
              font-family: OpenSans;
              font-weight: 700;
              line-height: 1.4rem;
              color: $main-blue;
              background-color: $main-black;
            }
          }
        }
      }
    }
    .order{
      position: relative;
      margin-top: 1.4rem;
      margin-bottom: 5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      background-color: #efefef;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
      &__wrapper{
        width: 90%;
        h3{
          margin-top: 3.9rem;
          font-size: 1.3rem;
          font-family: MuseoSansCyrl;
          font-weight: 900;
          line-height: 2rem;
          text-align: center;
        }
        h5{
          font-family: MuseoSansCyrl;
          font-weight: 900;
          line-height: 1.4rem;
          text-align: center;
        }
      }
      &__line{
        margin: 1rem auto 1.3rem;
        // margin-bottom: 1.5rem;
        background-color: $main-blue;
        width: 160px;
        height: 2px;
      }
      &__input{
        margin: 2.5rem auto 0;
        padding-bottom: 8px;
        width: 90%;
        border-bottom: 1px solid $main-black;
        input{
          width: 100%;
          border: 0;
          background-color: transparent;
          font-family: UbuntuMono;
          color:  #242427;
          font-size: 1rem;
          font-weight: 700;
          text-align: center;
        }
      }
      &__accept{
        display: flex;
        // align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
      }
      &__accept-check-box{
        border-width: 3px;
        border-color:  #ffffff;
        border-style: solid;
        background-color: #ffffff;
        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.41);
        width: 15px;
        height: 15px;
      }
      &__accept-check-box_active{
        border-width: 3px;
        border-color:  #ffffff;
        border-style: solid;
        background-color: $main-blue;
        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.41);
        width: 15px;
        height: 15px;
      }
      &__accept-text{
        width: 100%;
        p{
          font-family: UbuntuMono;
          font-weight: 400;
          line-height: 1.3rem;
          text-align: center;
          span{
            font-weight: 700;
            border-bottom: 1px solid $main-blue;
          }
        }
      }
      &__button{
        margin: 2rem auto 3rem;
        border-radius: 5px;
        border: 0;
        background: linear-gradient(90deg, #ffc617 0%, #fb0740 100%);
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
        width: 250px;
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