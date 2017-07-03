<template>

	<div id="contact">
		<div class="chinese">
			<h4 class="title">电话</h4>
			<p>(+86) 135-8644-2983</p>

			<h4 class="title">邮箱</h4>
			<p>AND_DESIGN@QQ.COM</p>

			<h4 class="title">微博</h4>
			<p>@小小小狮子喵嘿</p>

			<h4 class="title">微信</h4>
			<p>shuping0813</p>
		</div>
		<div class="english">
			<h4 class="title">PHONE</h4>
			<p>(+86) 135-8644-2983</p>

			<h4 class="title">EMAIL</h4>
			<p>AND_DESIGN@QQ.COM</p>

			<h4 class="title">WEIBO</h4>
			<p>@小小小狮子喵嘿</p>

			<h4 class="title">WECHAT</h4>
			<p>shuping0813</p>
		</div>
	</div>
	</div>

</template>

<script>

export default {
	name: 'contact',
	mounted() {
		this.$store.commit('updateSelectItem','contact');
	},
}
</script>

<style lang="scss" scoped>

$margin: 25px;

#contact {
	.chinese,.english {
		font-size: 12px;
		color: #828282;
		width: 400px;
		height: 272px;
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

	
</style>