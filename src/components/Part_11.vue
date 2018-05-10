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
        <div class="video__cell">
          <youtube :video-id="videoId" ref="youtube0" @playing="playing(0)" @paused="paused(0)" @ended="paused(0)" width="290" height="223" 
            class="video__item1" frameborder="0" allowfullscreen>
          </youtube>
          <img class="video__poster" src="../assets/img/app11/video-woman.jpg" alt="video-woman" v-if="videoVisible0">
          <img class="video__button" src="../assets/img/app11/button.png" alt="button"  @click="playVideo(0)" v-if="videoVisible0">
        </div>

        <div class="video__cell">
          <youtube :video-id="videoId2" ref="youtube1" @playing="playing(1)" @paused="paused(1)" @ended="paused(1)" width="290" height="223" 
            class="video__item2" frameborder="0" allowfullscreen>
          </youtube>
          <img class="video__poster" src="../assets/img/app11/video-man.jpg" alt="video-woman" v-if="videoVisible1">
          <img class="video__button" src="../assets/img/app11/button.png" alt="button"  @click="playVideo(1)" v-if="videoVisible1">
        </div>

        <div class="video__cell">
          <youtube :video-id="videoId3" ref="youtube2" @playing="playing(2)" @paused="paused(2)" @ended="paused(2)" width="290" height="223" 
            class="video__item3" frameborder="0" allowfullscreen>
          </youtube>
          <img class="video__poster" src="../assets/img/app11/video-male.jpg" alt="video-woman" v-if="videoVisible2">
          <img class="video__button" src="../assets/img/app11/button.png" alt="button"  @click="playVideo(2)" v-if="videoVisible2">
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
      videoId: '_ee-IgXNHI4',
      videoId2: 'D_sAfKFzBaA',
      videoId3: 'eDBsgXQygXY',
      videoPlaying: [false, false, false],
      videoVisible0: true,
      videoVisible1: true,
      videoVisible2: true
    }
  },
  methods: {
    playVideo(item) {
      // this.player.playVideo()
      this.$refs['youtube' + item].player.playVideo()
    },
    playing(n) {
      this['videoVisible' + n] = false;
      this.videoPlaying[n] = true;
      for(let i in this.videoPlaying){
        if (this.videoPlaying[i] && i != n) {
          this.$refs['youtube' + i].player.pauseVideo()
        }
      }
    },

    paused(n){
      this['videoVisible' + n] = true;
      this.videoPlaying[n] = false;
    }
  },
  // computed: {
  //   player(i) {
  //     // return this.$refs.youtube.player
  //   }
  // }
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
      margin-bottom: 3rem;
      &__cell{
        margin-top: 1rem;
        position: relative;
        box-shadow: 0px 12px 20px 0px rgba(28, 28, 30, 0.21);
      }
      &__poster{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
      }
      &__button{
        cursor: pointer;
        position: absolute;
        top: 40%;
        left: 40%;
      }
    }
  }
}
</style>