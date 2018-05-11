<template>
  <div class="conteiner">
    <div class="wrapper">
      <div class="head">
        <div class="head__line"></div>
        <h4>НАШИ ДОСТИЖЕНИЯ <br/>И ГОРДОСТЬ:</h4>
      </div>
      <div class="card-field">
        <div class="card">
          <img src="../assets/img/app9/watermark_1.png" alt="watermark" class="card__watermark">
          <img src="../assets/img/app9/stamp_1.jpg" alt="stamp" class="card__stamp">
          <div class="card__mark"><SPAN>lorem ipsum</SPAN></div>
          <h5>GOITВЫИГРАЛА ТЕНДЕР <br/>ПР ООН УКРАИНА</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="card">
         <img src="../assets/img/app9/watermark_2.jpg" alt="watermark" class="card__watermark">
          <img src="../assets/img/app9/stamp_2.jpg" alt="stamp" class="card__stamp">
          <div class="card__mark"><SPAN>lorem ipsum</SPAN></div>
          <h5>UKRAINIAN IT AWARDS 2016</h5>
          <p class="awards">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut
          </p>
        </div>

        <div class="card">
          <img src="../assets/img/app9/watermark_3.jpg" alt="watermark" class="card__watermark">
          <img src="../assets/img/app9/stamp_3.jpg" alt="stamp" class="card__stamp">
          <div class="card__mark"><SPAN>lorem ipsum</SPAN></div>
          <h5>BEST IT EDUCATION 2015</h5>
          <p class="education">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          </p>
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

    }
  }
}
</script>

<style lang="scss" scoped>
.conteiner{
  padding-top: 1rem;
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
      &__line{
        margin-top: 2rem;
        background-color: $main-black;
        width: 150px;
        height: 2px;
      }
      h4{
        margin-top: 0.8rem;
        padding: 0 1rem;
        line-height: 1.85rem;
        text-align: center;
        font-family: MuseoSansCyrl;
        font-weight: 900;
      }
    }
    .card-field{
      margin-bottom: -10rem;
      .card{
        position: relative;
        padding: 1rem 3% 1.2rem 5%;
        margin-bottom: 1rem;
        background-color: #fbfbfb;
        width: 90vw;
        height: 115vw;
        max-width: 345px;
        max-height: 441px;
        box-shadow: 0px 11px 10px 0px rgba(0, 0, 0, 0.11);
        &__watermark{
          position: absolute;
          left: 0;
          bottom: 0;
          height: 100%;
          z-index: 0;
        }
        &__stamp{
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          width: 30%;
          z-index: 1;
        }
        &__mark{
          position: relative;
          margin-top: 3.8%;
          width:100%;
          z-index: 4;
          span{
            padding: 0.6rem 1rem;
            font-family: UbuntuMono;
            color:  $main-blue;
            font-size: 1.3rem;
            font-weight: 700;
            line-height: 1.8rem;
            text-align: left;
            transform: scaleX(1.0173);
            background-color:  #242427;
          }
        }
        h5{
          position: relative;
          margin-top: 6%;
          font-family: OpenSans;
          font-weight: 800;
          line-height: 1.7rem;
          text-align: left;
          z-index: 5;
        }
        p{
          position: relative;
          margin-top: 5%;
          font-family: OpenSans;
          font-weight: 400;
          line-height: 1.7rem;
          text-align: left;
          letter-spacing: 0.001rem;
          z-index: 6;
        }
        .awards{
          margin-top: 30%;
          padding: 0 40% 0 0;
        }
        .education{
          margin-top: 50%;
          padding: 0 40% 0 0;
        }
      }

    }
  }
}
</style>