<template>
    <div class="container">
    	<div class="wrapper">
    		<div class="head">
    			<img class="logo" src="../assets/img/header/logo.png">
    			<div class="contact">
    				<p class="telephone">+38 (093) 343-21-27</p>
    				<div class="line"></div>
    				<p class="age">Набор: от <span class="num">23</span> до <span class="num">35</span> лет</p>
    			</div>
    		</div>
    		<div class="start">
    			<p class="st">СТАРТ <span>17</span> МАРТА</p>
    		</div>
    		<p class="career">НАЧНИТЕ РАБОТАТЬ В СФЕРЕ IT_</p>
    		<p class="after">после обучения на курсе:</p>
    		<div class="line1"></div>
    		<p class="full">_FULL STACK - <span>РАЗРАБОТЧИК С НУЛЯ</span></p>
    		<div class="jun">
    			<span class="job">Помогаем вам занять должность</span>
    			<span class="fl">Junior Full Stack-разработчика</span>
    		</div>
    		<p class="final">85% <span>выпускников курса<br> работают в IT-компаниях Украины</span></p>
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
		padding: 34px 15px 68px; 
		background-color:  #2b2a2f;
	}
	.head{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.contact{
		display: flex;
		flex-direction: column;
	}
	.logo{
		width: 101px;
		height: 29px;
	}
	.telephone{
		margin-top: -0.5rem;
		font-family: UbuntuMono;
		color:  #00bcd4;
		font-size: 14px;
		font-weight: 700;
		line-height: 20px;
		text-align: left;
	}
	.line{
		border-bottom: 1px solid #00bcd4;
		width: 135px;
	}
	.age{
		margin-top: 0.25rem;
		font-family: ProximaNovaRegular;
		color:  #c7c7c7;
		font-size: 13px;
		font-weight: 400;
		line-height: 20px;
		text-align: left;
	}
	.num{
		font-family: ProximaNovaExtrabold;
		color:  #ffffff;
	}
	.st{
		font-family: MuseoSansCyrl;
		color:  #ffffff;
		font-size: 14px;
		line-height: 26.508px;
		text-align: left;
		font-weight: 900;
	}
	.start{
		display: flex;
		justify-content: center;
		margin-left: 50%;
		transform: translateX(-50%);
		margin-top: 2.07rem;
		border-width: 1px;
		border-color:  #00bcd4;
		border-style: solid;
		width: 139px;
		height: 26px;
	}
	.st>span{
		color:  #00bcd4;
	}
	.career{
		margin-top: 4.14rem;
		font-family: UbuntuMono;
		color:  #ffffff;
		font-size: 18px;
		font-weight: 700;
		text-align: center;
	}
	.after{
		
		font-family: ProximaNova;
		color:  #c4c4c4;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		line-height: 30px;
	}
	.full{
		font-family: MuseoSansCyrl;
		font-weight: 900;
		color:  #00bcd4;
		font-size: 30px;
		line-height: 40px;
		text-align: center;
	}
	.full>span{
		color:  #ffffff;
		font-weight: 900;
	}
	.line1{
		border-top:  3px solid #00bcd4;
		width: 150px;
		margin-left: 50%;
		margin-top: 0.7rem;
		margin-bottom: 0.7rem;
		transform: translateX(-50%);
	}
	.jun{
		margin-top: 2.2rem;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.job{
		font-family: MuseoSansCyrl;
		color:  #ffffff;
		font-size: 14px;
		line-height: 20px;
	}
	.fl{
		font-family: ProximaNovaExtrabold;
		color:  #ffffff;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		text-align: center;
	}
	.final{
		margin-top: 0.6rem;
		font-family: UbuntuMono;
		color:  #00bcd4;
		font-size: 18px;/* Приближение из-за подстановки шрифтов */
		font-weight: 700;
		line-height: 18px;/* Приближение из-за подстановки шрифтов */
		text-align: center;;
	}
	.final>span{
		font-family: UbuntuMono;
		color:  #ffffff;
		font-size: 14px;/* Приближение из-за подстановки шрифтов */
		font-weight: 700;
		line-height: 18px;/* Приближение из-за подстановки шрифтов */
		text-align: center;
	}
</style>