<template>

	<div id="detail">
		<ul :class="{hasText: items.text}">
			<li v-for="img in items.imgList">
				<img :src=img alt="">
			</li>
		</ul>
		<detail-text class="text" v-if="items.text" :text=items.text></detail-text>
	</div>
	
</template>

<script>
import DetailText from '@/components/Base/DetailText'

export default {
	name: 'detail',
	computed: {
		items() {
			var result,i;
			if (this.$route.params.type == 'design') {
				result = this.$store.state.detail.design;
			} else if (this.$route.params.type == 'photography') {
				result = this.$store.state.detail.photography;
			}
			i = this.$route.params.id - 1;
			return result[i];
		}
	},
  	mounted() {
  		if (this.$route.params.type == 'design') {
  			this.$store.commit('updateSelectItem','design');
		} else if (this.$route.params.type == 'photography') {
			this.$store.commit('updateSelectItem','photography');
		}
	},
	components: {DetailText}
}
	
</script>

<style lang="scss" scoped>

$imgWidth_noText: 1025px;
$imgWidth: 750px;

#detail {
ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			width: $imgWidth_noText;
			margin-bottom: 20px;
			img {
				width: $imgWidth_noText;
			}
		}
	}

.hasText {
	float: left;
	li {
		width: $imgWidth;
		img {
			width: $imgWidth;
		}
	}
}

.text {
	float: right;
	width: 250px;
}

}
	
</style>