<template>
	<div id="about">
		<div class="textCase">
			<div class="chinese">
				<p>ANDDESIGN</p>

				<h4 class="title">地址</h4>
				<p>浙江省杭州市</p>

				<h4 class="title">业务内容</h4>
				<p>品牌设计 | 画册设计 | 产品摄影 | 海报设计 | 微电影</p>
		    </div>
		    <div class="english">
				<p>ANDDESIGN</p>

				<h4 class="title">ADDRESS</h4>
				<p>Zhejiang Hangzhou</p>

				<h4 class="title">BUSINESS CONTENT</h4>
				<p>Brand Design | Album Design | Product Photography | Poster Design | Micro Film</p>
		    </div>
		</div>
		<div class="imgCase">
			<img src="@/../static/img/about/about.jpg" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name: 'about',
	mounted() {
		this.$store.commit('updateSelectItem','about');
	}
}
</script>

<style lang="scss" scoped>

$margin: 25px;

#about {
	.textCase {
		float: left;
		width: 400px;
		
		.chinese,.english {
			font-size: 12px;
			color: #828282;
			height: 180px;
			margin-right: 0;
			margin-bottom: $margin;
			.title {
				margin: 0;
				font-weight: bold;
				line-height: 2;
			}
			p {
				margin-top: 0;
				margin-bottom: $margin;
				line-height: 1.6;
			}
		}
	}

	.imgCase {
		float: right;
		width: 550px;
    	height: 375px;
    	img {
    		width: 550px;
    		height: 375px;
    	}
	}
}
	
</style>