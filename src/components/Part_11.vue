<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <h2>
          <span>_</span>GOIT ОТЗЫВЫ И ВПЕЧАТЛЕНИЯ
        </h2>
        <div class="head__line"></div>
        <h5>О КУРСЕ &laquo;FULL STACK-РАЗРАБОТЧИК С НУЛЯ&raquo;</h5>
      </div>
      <div class="row-field">
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p><span>вы окунаетесь</span> и уходите с головой в реальную разработку;</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>менторы умеют мотивировать, <span>когда опускаются руки;</span></p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p><span>карьерный сервис</span> очень помог советами по резюмеб тренингами по собеседованию;</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>это <span>потрясающий опыт</span>, участие в разработке проекта помогло отточить 
            и систематизировать знания <span>на практике;</span></p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>развернутый фидбэк по домашним заданиям;</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p><span>знаю, в каком направлении</span> двигаться дальше и что изучать;</p>
          </div>
        </div>
        <div class="row">
          <div class="row__bullet"></div>
          <div class="row__article">
            <p>отлично мотивируют, прямо заряжают <span>энергией</span> и уверенностью.</p>
          </div>
        </div>
      </div>
      <div class="quote">
        <img src="../assets/img/app11/quote.png" alt="quote">
        <p>
          Я заплатил за плотные занятия и получил за 9 месяцев то, что самостоятельно осваивал бы несколько лет!
        </p>
      </div>
      <div class="video">
        <!-- <video controls="controls" poster="../assets/img/app11/video-woman.jpg">
          <source src="www.youtube.com/watch?v=_ee-IgXNHI4" type="video/mp4">
        </video> -->

        <!-- <video src="youtu.be/_ee-IgXNHI4" controls="true"></video> -->
        <div class="video__cell">
          <img src="../assets/img/app11/video-woman.jpg" alt="" @click="video = false" v-if="video">
          <iframe src="http://www.youtube.com/embed/_ee-IgXNHI4?wmode=transparent&amp;rel=0&autoplay=1" frameborder="0" allowfullscreen v-else></iframe>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Part_11',
  data(){
    return{
      video: true
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
        margin-top: 0.3rem;
        background-color: $main-black;
        width: 150px;
        height: 2px;
      }
      h5{
        margin-top: 1.25rem;
        padding: 0 1rem;
        line-height: 1.4rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 900;
      }
    }
    .row-field{
      margin-top: 1.6rem;
      .row{
        display: flex;
        justify-content: space-between;
        margin-top:1.6rem;
        width: 100%;
        &__bullet{
          margin-top: 0.2rem;
          border-radius: 50%;
          border-width: 3px;
          border-color:  #ffffff;
          border-style: solid;
          background-color:  $main-blue;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.18);
          width: 26.5px;
          height: 25px;
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
    .quote{
      margin-top: 2.6rem;
      position: relative;
      img{
        position: absolute;
        bottom: 0.4rem;
        right: 3.5rem; 
      }
      p{
        font-family: UbuntuMono;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.9rem;
        text-align: left;
      }
    }
    .video{
      margin-top: 2rem;
      &__cell{
        width: 100%;
        img{
          width: 100%;
        }
        iframe{
          width: 100%;
        }
      }
      video{
        margin-top: 1rem;
        width:100%;
        max-width: 480px;
        
      }
    }
  }
}
</style>