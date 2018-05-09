<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2>
          <span>_</span>ВЫБЕРИТЕ УДОБНЫЙ ДЛЯ ВАС СТАРТ КАРЬЕРЫ В IT
        </h2>
        <div class="head__line"></div>
        <h5>
          СТАРТ ЗАНЯТИЙ 17 МАРТА
        </h5>
      </div>
      <div class="article">
        <h5><span>ГАРАНТИРУЕМ</span>, ЧТО ВЫ ПОЛУЧИТЕ ПРЕДЛОЖЕНИЯ ПО РАБОТЕ, </h5>
        <p>при посещении всех лекций и выполнения всех заданий на курсе обучения.</p>
      </div>
      <div class="title">
        <h4>9 месяцев по 2 раза в неделю</h4>
      </div>
      <div class="title title-card">
        <h4>FULL STACK-РАЗРАБОТЧИК <span>ОНЛАЙН</span></h4>
      </div>
      <div class="card">
        <div class="card__head">
          <p><span>Tech skills:</span> 2 вебинара в неделю</p>
          <p><span>Soft skills:</span> 20 часов занятий</p>
          <p>Доступ к ресурсу EnglishDom</p>
          <p>Проект в конце каждого блока</p>
        </div>
        <div class="card__quote">
          <h5><span>ФИНАЛЬНЫЙ ПРОЕКТ</span> - РАЗРАБОТКА WEB-ПРИЛОЖЕНИЯ</h5>
        </div>
        <div class="card__career">
          <img class="footer__frame" src="../assets/img/app13/frame.png" alt="frame">
          <h5>КАРЬЕРА</h5>
        </div>
        <div class="card__row">
          <p>Вебинар по трудоустройству</p>
        </div>
        <div class="card__row">
          <p>Попадаете в базу выпускников GoIT - доступна работодателям</p>
        </div>
        <div class="card__row">
          <p>Помощь в оформлении резюме, страницы в LinkedIn</p>
        </div>
        <div class="card__row">
          <p>Групповые собеседования в Skype</p>
        </div>
        <h1 class="card__cash_yellow">19 800 грн.</h1>
        <button class="card__button">ВЫБРАТЬ ПАКЕТ</button>
      </div>

      <div class="title title-card">
        <h4>FULL STACK-РАЗРАБОТЧИК <span>ОФФЛАЙН</span> (В КИЕВЕ)</h4>
      </div>
      <div class="card">
        <div class="card__head">
          <p><span>Tech skills:</span> 2 вебинара в неделю</p>
          <p><span>Soft skills:</span> 20 часов занятий</p>
          <p>Доступ к ресурсу EnglishDom</p>
          <p>Проект в конце каждого блока</p>
        </div>
        <div class="card__quote">
          <h5><span>ФИНАЛЬНЫЙ ПРОЕКТ</span> - РАЗРАБОТКА WEB-ПРИЛОЖЕНИЯ</h5>
        </div>
        <div class="card__career">
          <img class="footer__frame" src="../assets/img/app13/frame.png" alt="frame">
          <h5>КАРЬЕРА</h5>
        </div>
        <div class="card__row">
          <p>Занятия по трудоустройству</p>
        </div>
        <div class="card__row">
          <p>Попадаете в базу выпускников GoIT - доступна работодателям</p>
        </div>
        <div class="card__row">
          <p>Помощь в оформлении резюме, страницы в LinkedIn</p>
        </div>
        <div class="card__row">
          <p>Групповые собеседования</p>
        </div>
        <h1 class="card__cash_green">33 000 грн.</h1>
        <button class="card__button">ВЫБРАТЬ ПАКЕТ</button>
      </div>
      <div class="footer">
        <h5>ОПЛАТИТЕ КУРС <br/>УДОБНЫМ СПОСОБОМ:</h5>
        <div class="footer__pay">
          <div class="cell">
            <img class="cell__img-main" src="../assets/img/app13/wallet.png" alt="wallet">
            <p>наличными</p>
          </div>
          <div class="footer__line"></div>
          <div class="cell">
            <img class="cell__img-main" src="../assets/img/app13/credit-card.png" alt="credit-card">
            <p>картой банка</p>
          </div>
          <div class="footer__line"></div>
          <div class="cell">
            <img class="cell__img-main" src="../assets/img/app13/rich.png" alt="rich">
            <img class="cell__img-white" src="../assets/img/app13/stopwatch.png" alt="stopwatch">
            <p>в рассрочку</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Part_14',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{ 
  width: 100%;
  background: url(../assets/img/bg/background_black.jpg) repeat rgb(17, 17, 17);
  .wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    span{
          color:  $main-blue;
        }
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
        color:  #ffffff;
        span{
          color:$main-blue;
        }
      }
      &__line{
        margin: 0.4rem 0 1rem;
        background-color: #ffffff;
        width: 150px;
        height: 2px;
      }
      h5{
        // margin-top: 1.25rem;
        line-height: 1.4rem;
        letter-spacing: 0.03rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 700;
        color:  #ffffff;
      }
    }
    .article{
      margin-top: 3rem;
      font-family: OpenSans;
      line-height: 1.9rem;
      text-align: left;
      letter-spacing: 0.03rem;  
      h5{
        color:  #ffffff;
        font-weight: 700;
        span{
          color:  $main-blue;
        }
      }
      p{
        color:  #ffffff;
        font-weight: 400;
      }
    }
    .title{
      margin-top: 1rem;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      background-color:  #3c3c3c;
      box-shadow: 0px 20px 36px 0px rgba(0, 0, 0, 0.3);
      width: 100%;
      min-height: 4.7rem;
      line-height: 1.7rem;
      h4{
        font-family: MuseoSansCyrl;
        font-weight: 700;
        color:  #ffffff;
        text-align: center;
      }
    }
    .title-card{
      h4{
        font-family: MuseoSansCyrl;
        font-weight: 800;
        // span{
        //   color:  $main-blue;
        // }
      }
    }
    .card{
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 2rem 4%;
      width: 100%;
      background-color:  #313133;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      &__head{
        p{
          font-family: OpenSans;
          color:  #d7d7d7;
          font-weight: 400;
          line-height: 2rem;
          text-align: center;
        }
        span{
          font-weight: 700;
        }
      }
      &__quote{
        margin-top: 1.7rem;
        h5{
          font-family: OpenSans;
          color:  #ffffff;
          font-weight: 700;
          line-height: 1.9rem;
          text-align: center;
          letter-spacing: 0.04rem;
        }
      }
      
      &__career{
        position: relative;
        margin: 2rem 0 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        img{
          width: 50vw;
        }
        h5{
          position: absolute;
          width: 70vw;
          padding: 0 2rem;
          color:  #ffffff;
          font-family: OpenSans;
          font-weight: 700;
          line-height: 1.9rem;
          text-align: center;
          letter-spacing: 0.08rem;
        }
      }
      &__row{
        display: flex;
        align-items: center;
        padding: 1.2rem 0.9rem;
        margin-top: 0.8rem;
        background-color:  #2b2b2d;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.14);
        width: 100%;
        min-height: 4.5rem;
        p{
          font-family: UbuntuMono;
          color:  #d7d7d7;
          font-weight: 400;
          text-align: left;
          line-height: 1.4rem;
        }
      }
      h1{
        margin: 2rem auto 0;
        font-family: MuseoSansCyrl;
        font-weight: 900;
        text-align: center;
      }
      &__cash_yellow{
        color:  #ffc600;
      }
      &__cash_green{
        color:  #5cc497;
      }
      &__button{
        margin: 2rem auto 1rem;
        border-radius: 5px;
        background: linear-gradient(90deg, #ffc617 0%, #fb0740 100%);
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
        width: 250px;
        height: 55px;
        border: 0;

        font-family: MuseoSansCyrl;
        font-weight: 900;
        color:  #ffffff;
        font-size: 1.14rem;
        text-align: center;
        text-shadow: 0px 1px 1px rgba(28, 28, 30, 0.32);
      }
    }
    .footer{
      margin: 3rem 0 4rem;
      width: 100%;
      h5{
        font-family: OpenSans;
        color:  #ffffff;
        font-weight: 600;
        text-align: center;
        line-height: 1.4rem;
      }
      &__pay{
        margin-top: 2rem;
        width: 100%;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
        .cell{
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 115px;
          width: 100%;
          background-color:  #2a292c;
          &__img-main{
            position: absolute;
            top: 20px;
          }
          &__img-white{
            position: relative;
            top: 26px;
            left: -25px;
          }
          p{
            position: absolute;
            top: 80px;
            font-family: UbuntuMono;
            color:  #ffffff;
            font-size: 1.14rem;
            font-weight: 400;
            text-align: center;
          }
        }
      }
      &__line{
        height: 1px;
        width: 100%;
        background-color:  rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>