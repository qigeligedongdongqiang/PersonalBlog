<template>

	<li>
		<router-link :to=imgObj.link>
			<div id="imgCase">
				<img :src=imgObj.img :style="{width: imgObj.width,height: imgObj.height}" alt="">
			</div>
		</router-link>
	</li>
	
</template>

<script>

export default {
	name: 'imageCase',
	props: [
		'imgObj'
	],
}
	
</script>

<style lang="scss" scoped>

li {
	list-style: none;
	position: relative;
}

#imgCase:after {
  opacity: 0;
  background: black;
  position: absolute;
  z-index: 1;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;			  
  transition: .2s ease-out;
  -webkit-transition: .2s ease-out; 
}

#imgCase:hover:after {
	opacity: 0.5;
}

	
</style>