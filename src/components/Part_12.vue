<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2>
          <span>_</span>ПОЧИТАЙТЕ РАЗВЕРНУТЫЕ ОТЗЫВЫ НАШИХ ВЫПУСКНИКОВ:
        </h2>
      </div>
      <div class="card">
        <img src="../assets/img/app12/foto.png" alt="foto">
        <h3>Нина Мирошниченко</h3>
        <p class="card__position"></p>
        <div class="card__text">
          <p>
            Мені дуже сподобалися курси від GoIT (пройшла першу частину Frontend восени 2017р.)! 
            Я випадково знайшла ці курси у Facebook. Пройшла пробний тест...
          </p>
        </div>
        <div class="card__link">
          <p>
            ЧИТАТЬ ОТЗЫВ
          </p>
        </div>  
      </div>
      <div class="card">
        <img src="../assets/img/app12/foto.png" alt="foto">
        <h3>Igor Kuznietsov</h3>
        <p class="card__position">Frontend Developer</p>
        <div class="card__text">
          <p>
            Учился на курсе GoFrontend#9. В целом - не жалею ни дня и ни гривны,
            потраченных на курс. Вебинары Саши Репеты ждал как новую серию Игры Престолов...
          </p>
        </div>
        <div class="card__link">
          <p>
            ЧИТАТЬ ОТЗЫВ
          </p>
        </div>  
      </div>
      <div class="card">
        <img src="../assets/img/app12/foto.png" alt="foto">
        <h3>Ekaterina Illarionova</h3>
        <p class="card__position">Frontend Developer</p>
        <div class="card__text">
          <p>
            Отличные курсы для взрослых людей. У каждой группы есть менеджер который всегда поможет
            в организационных вопросах, несколько менторов к которым можно...
          </p>
        </div>
        <div class="card__link">
          <p>
            ЧИТАТЬ ОТЗЫВ
          </p>
        </div>  
      </div>
      <div class="card">
        <img src="../assets/img/app12/foto.png" alt="foto">
        <h3>Dmitry Goncharov</h3>
        <p class="card__position">Frontend Developer</p>
        <div class="card__text">
          <p>
            Отличные курсы для взрослых людей. У каждой группы есть менеджер который всегда поможет
            в организационных вопросах, несколько менторов к которым можно...
          </p>
        </div>
        <div class="card__link">
          <p>
            ЧИТАТЬ ОТЗЫВ
          </p>
        </div>  
      </div>
      <div class="card">
        <img src="../assets/img/app12/foto.png" alt="foto">
        <h3>Natalya Ivanova</h3>
        <p class="card__position">coding for web</p>
        <div class="card__text">
          <p>
            Обдумуючи те, що відбулося зі мною за останній рік (я почала вчитися у вересні 2016-го), 
            розумію, що курси Go Front End були переламним досвідом.
          </p>
        </div>
        <div class="card__link">
          <p>
            ЧИТАТЬ ОТЗЫВ
          </p>
        </div>  
      </div>
      <div class="footer">
        <h5> ПОСМОТРИТЕ ИСТОРИИ УСПЕХА И ВЫПУСКНЫЕ РАБОТЫ НАШИХ УЧЕНИКОВ</h5>
        <button class="footer__button">НАЧАТЬ ОБУЧЕНИЕ НА КУРСЕ</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Part_12',
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
    .card{
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      margin-top: 65px;
      padding: 1.1rem 5%;
      width: 100%;
      height: 21.8rem;
      background-color:  #ffffff;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.16);
      img{
        margin: 0 auto;
        position: absolute;
        top: -48px;
        width: 80px;
      }
      h3{
        margin-top: 2.3rem;
        padding: 0.4rem 0.7rem;
        font-family: UbuntuMono;
        color:  $main-blue;
        font-weight: 700;
        line-height: 1.7rem;
        text-align: center;
        background-color:  #242427;
      }
      &__position{
        margin-top: 0.6rem;
        height: 1rem;
        font-family: UbuntuMono;
        color:  #5f5f5f;
        font-size: 0.85rem;
        font-weight: 400;
        text-align: center;
      }
      &__text{
        margin-top: 0.2rem;
        p{
          font-family: OpenSans;
          font-weight: 600;
          line-height: 1.7rem;
          text-align: left;
        }
      }
      &__link{
        position: absolute;
        bottom: 1rem;
        align-self: flex-end;
        p{
          font-family: OpenSans;
          font-weight: 800;
          line-height: 1.4rem;
          text-align: right;
          border-bottom: 2px solid $main-black;
          cursor: pointer;
        }
      }
    }
    .footer{
      display: flex;
      align-items: center;
      flex-direction: column;
      h5{
        margin-top: 2rem;
        font-family: OpenSans;
        font-weight: 800;
        line-height: 1.7rem;
        text-align: left;
      }
      &__button{
        margin: 2rem auto 3rem;
        border-radius: 5px;
        background: linear-gradient(90deg, #ffc617 0%, #fb0740 100%);
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
        width: 250px;
        height: 55px;
        border: 0;

        font-family: MuseoSansCyrl;
        font-weight: 700;
        letter-spacing: 0.06rem;
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