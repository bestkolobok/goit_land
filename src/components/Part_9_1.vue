<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2><span>_</span>ОБУЧАЮЩИЙ ЦЕНТР <br/>&laquo;GOIT&raquo;</h2>
        <div class="head__line"></div>
        <h5>3 ГОДА ГОТОВИМ ВОСТРЕБОВАННЫХ <br/><span>СПЕЦИАЛИСТОВ</span></h5>
      </div>
      <div class="title">
        <h4>МЫ ПОСТАВИЛИ АМБИЦИОЗНУЮ ЦЕЛЬ НА БУДУЩЕЕ -</h4>
        <p>
          стать первым IT-университетом в Украине по подготовке специалистов (онлайн/оффлайн)
        </p>
      </div>
      <div class="field-list"> 
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>У нас <span>проектная система обучения</span> - на <span>70%</span> эффективнее, чем на других IT курсах</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>Средняя зарплата выпускников курса &laquo;Full Stack-разработчик&raquo; на старте карьеры <span>700-1200$</span></p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>Более <span>85%</span> людей, кто сделал выпускной проект - нашли работу в IT</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p><span>Даем гарантию трудоустройства, при выполнении всех заданий на курсе</span></p>
          </div>
        </div>
      </div>
      <div class="article">
        <h3>Компании, в которых сейчас работают наши выпускники</h3>
      </div>
      <div class="employers">
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
        <div class="employer-item">
          <img src="../assets/img/app9/logo_01.png" alt="logo" class="employer-item__logo">
          <div class="employer-item__inner">
            <div class="employer-item__content">
            </div>
          </div>
        </div>
      </div>
      <div class="footer">

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
  // padding-top: 3rem;
  width: 100%;
  background: url(../assets/img/bg/background_small.png) repeat rgb(210, 214, 213);
  .wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 2rem;
    width: 92%;
    .head{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      h2{
        margin-top: 4rem;
        font-family: MuseoSansCyrl;
        font-weight: 900;
        line-height: 2.1rem;
        text-align: center;
      }
      &__line{
        margin-top: 0.4rem;
        background-color: $main-black;
        width: 150px;
        height: 2px;
      }
      h5{
        margin-top: 1rem;
        padding: 0 1rem;
        line-height: 1.4rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 900;
      }
      span{
        color:$main-blue;
      }
    }
    .title{
      margin-top: 3rem;
      h4{
        font-family: MuseoSansCyrl;
        font-weight: 900;
        line-height: 1.7rem;
        text-align: left;
      }
      p{
        margin-top: 1rem;
        font-family: OpenSans;
        font-size: 1.14rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-align: left;
      }
    }
    .field-list{
      margin-top: 1.8rem;
      margin-bottom: 0.5rem;
      width: 96%;
      .row{
        display: flex;
        justify-content: space-between;
        margin-top:1.2rem;
        width: 100%;
        &__bullet{
          margin-top: 0.2rem;
          border-radius: 50%;
          background-color:  $main-blue;
          width: 18.2px;
          height: 17px;
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
    .article{
      margin-top: 2rem;
      padding-top: 0.6rem;
      width: 100%;
      border-top: 2px solid $main-black;
      h3{
        font-family: UbuntuMono;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.7rem;
        text-align: left;
      }
    }
    .employers{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 2rem;
      // width: 100%;
      .employer-item{
        position: relative;
        display: flex;
        // flex-basis: 300px;
        flex-grow: 1;
        width: 120px;
        max-width: 185px;
        margin: 0.5rem;
        background-color:  #ffffff;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
        // &__base{
        //   width: 100%;
        // }
        &__logo{
          margin: 0 5%;
          position: absolute;
          top: 40%;
          width: 90%;
        }
        &__inner {
          padding-top: 100%;
          position: relative;
          height: 0;
          border: none;
        }

        &__content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }
    .footer{
      margin: 1rem 0 3rem;
    }
  }
}
</style>