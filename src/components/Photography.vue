<template>

	<div id="photography">
		<ul>
			<li 
			is="image-case" 
			v-for="(item,index) in items" 
			:imgObj="{img:item.img,link:item.link,width:'500px',height:'500px'}"
			:class="{'isRight':(index % 2 != 0)}"
			></li>
		</ul>
	</div>

</template>

<script>

import ImageCase from '@/components/Base/ImageCase'

export default {
	name: 'photography',
	computed: {
		items() {
			return this.$store.state.photoItems;
		}
	},
	mounted() {
		this.$store.commit('updateSelectItem','photography');
	},
	components: {ImageCase}
}

</script>

<style lang="scss" scoped>

$imgWH: 500px;
$margin: 25px;

#photography {

	ul {
		padding: 0;
		margin: 0;
		width: 1025px;
		li {
			width: $imgWH;
			height: $imgWH;
			margin-bottom: $margin;
			margin-right: $margin;
			display: inline-block;
		}
		.isRight {
			margin-right: 0;
		}
	}

}
	
</style>