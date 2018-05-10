<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2><span>_</span>ПРЕПОДАВАТЕЛИ ЭТОГО КУРСА</h2>
        <div class="head__line"></div>
        <h5>УМЕЮТ ДОНЕСТИ ИНФОРМАЦИЮ В ПОНЯТНОМ И ПРОСТОМ ДЛЯ ОСВОЕНИЯ ВИДЕ</h5>
      </div>
      <div class="description">
        <p>
          <span>Помогаем перестроить ваше мышление,</span> поддерживаем на каждом этапе обучения, 
          мотивируем, когда вам кажется, что сложно и опускаются руки.
        </p>
      </div>
      <div class="card-field">
        <div class="card">
          <div class="card-title">
            <div class="card-title__line"></div>
            <h2>Back-end</h2>
          </div>
          <div class="card-solid">
            <div class="card-solid__avatar">
              <img src="../assets/img/app10/teacher.jpg" alt="teacher">
              <div class="card-solid__avatar_name">
                <h3>Александр Репета</h3>
                <div class="card-solid__avatar_line"></div>
                <p>JavaScript разработчик</p>
              </div>
            </div>
            <div class="card-solid__experience">
              <p>Опыт работы с <br/> Javascript 5 лет</p>
            </div>
            <div class="card-solid__skills">
              <h5>ТЕХНИЧЕСКИЕ НАВЫКИ:</h5>
              <p>
                HTML/CSS, JAVASCRIPT, DEVELOPMENT TOOLS, NODEJS, REACT JAVASCRIPT, MONGODB, GIT, PYTHON, DOCKER
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <div class="card-title__line"></div>
            <h2>Front-end</h2>
          </div>
          <div class="card-solid">
            <div class="card-solid__avatar">
              <img src="../assets/img/app10/teacher.jpg" alt="teacher">
              <div class="card-solid__avatar_name">
                <h3>Влад Грибенников</h3>
                <div class="card-solid__avatar_line"></div>
                <p>Senior FrontEnd developer</p>
              </div>
            </div>
            <div class="card-solid__experience">
              <p>Founder &laquo;Easy CRM&raquo;;</p>
              <p>Senior Front-End developer 4+лет;</p>
              <p>Опыт менторства 2+;</p>
              <p>Выпустил 6 групп Front-End с уровнем удовлетворенности 9,2 из 10;</p>
            </div>
            <div class="card-solid__skills">
              <h5>ТЕХНИЧЕСКИЕ НАВЫКИ:</h5>
              <p>
                HTML/CSS, JAVASCRIPT, NODEJS, REACT JAVASCRIPT, PYTHON
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <div class="card-title__line"></div>
            <h2>Front-end</h2>
          </div>
          <div class="card-solid">
            <div class="card-solid__avatar">
              <img src="../assets/img/app10/teacher.jpg" alt="teacher">
              <div class="card-solid__avatar_name">
                <h3>Геннадий Горбулин</h3>
                <div class="card-solid__avatar_line"></div>
                <p>Senior FrontEnd developer</p>
              </div>
            </div>
            <div class="card-solid__experience">
              <p>7 лет овыта в web-разработке и 5 лет преподавательского опыта</p>
            </div>
            <div class="card-solid__skills">
              <h5>ТЕХНИЧЕСКИЕ НАВЫКИ:</h5>
              <p>
                HTML/CSS, JAVASCRIPT, NODEJS, KOAJS, REACT JAVASCRIPT, JAVA
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="button">НАЧАТЬ ОБУЧЕНИЕ НА КУРСЕ</button>
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
  padding-top: 6rem;
  width: 100%;
  background: url(../assets/img/bg/background_small.png) repeat rgb(210, 214, 213);
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
    }
    .description{
      margin-top: 2rem;
      p{
        font-family: OpenSans;
        font-weight: 600;
        line-height: 1.7rem;
        text-align: left;
        span{
          font-weight: 800;
        }
      }
    }
    .card-field{
      margin-top: 0.5rem;
      width: 100%;
      .card{
        margin-top: 1rem;
        margin-bottom: 4rem;
        width: 100%;
        .card-title{
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          &__line{
            // position: relative;
            margin: 0 0.6rem 0.7rem 0;
            background-color:  $main-black;
            width: 100px;
            height: 2px;
          }
          h2{
            font-family: UbuntuMono;
            font-size: 1.7rem;
            font-weight: 700;
            line-height: 2.6rem;
            text-align: right;
          }
        }
        .card-solid{
          margin-top: 0.7rem;
          background-color: white;
          box-shadow: 0px 32px 35px 0px rgba(0, 0, 0, 0.19);
          &__avatar{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 40vw;
            max-height: 160px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            img{
              height: 100%;
            }
          }
          &__avatar_name{
            padding: 0.6rem 1.6rem;
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
            flex-direction: column;
            height: 100%;
            width: 100%;
            // text-align: center;
            h3{
              font-family: UbuntuMono;
              font-weight: 700;
              line-height: 1.7rem;
              text-align: left;
            }
            p{
              font-family: UbuntuMono;
              font-weight: 700;
              line-height: 1.3rem;
              text-align: left;
            }
          }
          &__avatar_line{
            // align-self: flex-start;
            background-color: $main-blue;
            width: 55px;
            height: 2px;
          }
          &__experience{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            padding: 1rem 5%;
            min-height: 8rem;
            p{
              margin: 0.5rem 0;
              font-family: OpenSans;
              font-weight: 600;
              line-height: 1.4rem;
              text-align: left;
            }
            
          }
          &__skills{
            padding: 1rem 5% 0;
            min-height: 9.4rem;
            background-color:  #f0f0f0;
            h5{
              // margin-top: 1rem;
              font-family: MuseoSansCyrl;
              font-weight: 900;
              line-height: 1.4rem;
              text-align: center;
            }
            p{
              margin-top: 1rem;
              font-family: UbuntuMono;
              font-weight: 800;
              line-height: 1.3rem;
              text-align: left;
            }
          }
        }
      }
    }
    .button{
        margin: -1rem auto 5rem;
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
</style>