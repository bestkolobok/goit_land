<template>
    <div class="wrapper">
      <div class="head">
        <h2>
          <span>_</span>СТАНЬТЕ УВЕРЕННЫМ НАЧИНАЮЩИМ <br/>IT-РАЗРАБОТЧИКОМ
        </h2>
        <div class="head__line"></div>
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
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 1931px;
  background: url(../assets/img/app19/background_small.png) repeat rgb(210, 214, 213);
  .head{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 276px;
    width: 100%;
    h2{
      position: absolute;
      top: 58px;
      max-width: 260px;
      font-family: MuseoSansCyrl;
      font-weight: 900;
      color:#272426;
      line-height: 2.15rem;
      text-align: center;
      span{
        color:#00bcd4;
      }
    }
    &__line{
      position: absolute;
      top: 58px;
      background-color:  #242427;
      width: 150px;
      height: 2px;
    }
  }
}
</style>