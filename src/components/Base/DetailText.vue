<template>
	
	<div id="detailText">
		<h4>{{text.title}}</h4>
		<p class="summary">{{text.summary}}</p>
		<ul>
			<li v-for="p in text.pList">
				<p v-html=p></p>
			</li>
		</ul>
	</div>

</template>

<script>

export default {
	name: 'detailText',
	props: [
		'text',
	]
}
	
</script>

<style lang="scss" scoped>

#detailText {
	color: #828282;
	font-size: 12px;

	h4 {
		font-weight: normal;
		font-size: 21px;
  		line-height: 1;
  		margin-top: 0;
    	margin-bottom: 10px;
	}

	.summary {
		margin-top: 0;
		margin-bottom: 45px;
		line-height: 1.6;
	}

	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			p {
				word-wrap:break-word; 
				word-break:normal;
			}
		}
	}
	
}
	
</style>