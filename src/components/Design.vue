<template>

	<div id="design">
		<ul>
			<li 
			is="image-case" 
			v-for="item in items" 
			:imgObj="{img:item.img,link:item.link,width:'1025px',height:'245px'}"
			></li>
		</ul>
	</div>

</template>

<script>

import ImageCase from '@/components/Base/ImageCase'

export default {
	name: 'design',
	computed: {
		items() {
			return this.$store.state.designItems;
		}
	},
	mounted() {
		this.$store.commit('updateSelectItem','design');
	},
	components: {ImageCase}
}

</script>

<style lang="scss" scoped>

#design {

	ul {
		padding: 0;
		margin: 0;
		width: 1025px;
		li {
			height: 245px;
			margin-bottom: 25px;
		}
	}

}
	
</style>