<template>
    <div class="conteiner">
      <div class="wrapper">
        <div class="head">
          <h2>
            <span>_</span>ЧЕМ НАШ КУРС ОТЛИЧАЕТСЯ ОТ ДРУГИХ IT-КУРСОВ
          </h2>
        </div>
        <div class="unit">
          <h3>Получаете первый практический опыт разработки</h3>
          <div class="unit__line"></div>
          <p>
            Во время обучения выполняете 5 проектов - самостоятельно и в команде, которые сможете показать работодателям.
          </p>
        </div>
        <div class="unit">
          <h3>Обучайтесь комплексно</h3>
          <div class="unit__line"></div>
          <div class="row">
            <div class="row__bullet"></div>
            <div class="row__article">
              <p>технические знания, инструменты и навыки</p>
            </div>
          </div>
          <div class="row">
            <div class="row__bullet"></div>
            <div class="row__article">
              <p>навыки комуникации в команде</p>
            </div>
          </div>
          <div class="row">
            <div class="row__bullet"></div>
            <div class="row__article">
              <p>занятия IT English</p>
            </div>
          </div>
          <div class="row">
            <div class="row__bullet"></div>
            <div class="row__article">
              <p>карьерный сервис: навыки для поиска работы</p>
            </div>
          </div>
        </div>
        <div class="unit">
          <h3>Попадаете в &laquo;заряжающее&raquo; окружение единомышленников</h3>
          <div class="unit__line"></div>
          <p>
            Студенты разных курсов вместе выполняют проектыб помогают друг другу найти работу. 
            Вокруг вас люди, которые интересуются IT, развиваются, позитивно мыслят и делятся вдохновением.
          </p>
        </div>
        <div class="footer">
          <div class="footer__line"></div>
          <h5>КАК КАРЬЕРНЫЙ СЕРВИС ПОМОГАЕТ ВАМ НАЙТИ РАБОТУ:</h5>
          <p>
            Наши менеджеры анализируют результаты выпускников и отбирают лучшие резюме для работы в IT-компаниях Украины
            (помните, что 90% вакансий разработчика закрываются через личные рекомендации). <br/>
            <span>С нашей помощью, после курса, вы гарантированно получаете работу.</span>
          </p>
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
  background-color: white;
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
    .unit{
      margin-top: 2rem;
      h3{
        font-family: UbuntuMono;
        font-weight: 700;
        line-height: 1.7rem;
        text-align: left;
      }
      &__line{
        margin: 0.4rem 0 1rem;
        background-color:  $main-blue;
        width: 80px;
        height: 2px;
      }
      p{
        font-family: OpenSans;
        font-weight: 600;
        line-height: 1.7rem;
        text-align: left;
      }
      .row{
          display: flex;
          justify-content: space-between;
          margin-top:1.2rem;
          width: 100%;
          &__bullet{
            margin-top: 0.3rem;
            border-radius: 50%;
            background-color:  $main-black;
            width: 19.5px;
            height: 18px;
          }
          &__article{
            padding-left: 0.8rem;
            width: 100%;
          }
        }
    }
    .footer{
      margin: 3rem 0 4rem;;
      &__line{
        background-color:  $main-black;
        width: 100%;
        height: 2px;
      }
      h5{
        margin-top: 0.2rem;
        font-family: OpenSans;
        font-weight: 800;
        line-height: 1.7rem;
        text-align: left;
      }
      p{
        margin-top: 1rem;
        font-family: OpenSans;
        font-weight: 600;
        line-height: 1.7rem;
        text-align: left;
        span{
          font-weight: 800;
        }
      }
    }
  }
}
</style>