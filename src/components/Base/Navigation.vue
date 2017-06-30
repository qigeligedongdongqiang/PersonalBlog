<template>
	
	<div id="navigation">
		<ul>
			<li v-for="item in navItems" :class=item.class>
				<router-link :to=item.link >
					<img :src=item.img alt="">		
				</router-link>
			</li>			
		</ul>		
	</div>

</template>

<script>

export default {
	name: 'navigation',
	data() {
		return {
			navItems:[
				{
					class: 'design',
					img: require('@/assets/head/DESIGN.png'),
					link: '/Design'
				},
				{
					class: 'photography',
					img: require('@/assets/head/PHOTOGRAPHY.png'),
					link: '/Photography'
				},
				{
					class: 'about',
					img: require('@/assets/head/ABOUT.png'),
					link: '/About'
				},		{
					class: 'contact',
					img: require('@/assets/head/CONTACT.png'),
					link: '/Contact'
				},
				{
					class: 'logo',
					img: require('@/assets/head/LOGO.png'),
					link: '/Design'
				}
			]
		}
	}
}

</script>

<style lang="scss" scoped>

$height: 150px;

#navigation {
	height: $height;
	ul {
		height: $height;
		margin: 0;
		padding: 0;
	}
	li {
		display: inline-block;
		float: left;
		margin-top: 58px; 
		margin-right: 25px;
		height: 23px;
		overflow: hidden;
		img:hover {
			margin-top: -23px;
		}
	}

	.design {
		width: 61px;
		img {
			width: 61px;
		}
	}

	.photography {
		width: 123px;
		img {
			width: 123px;
		}
	}

	.about {
		width: 57px;
		img {
			width: 57px;
		}
	}

	.contact {
		width: 77px;
		img {
			width: 77px;
		}
	}

	.logo {
		float: right;
		margin-top: 60px;
		margin-right: 0;
		height: 25px;
		width: 170px;
		img {
			width: 170px;
			&:hover {
				margin-top: -25px;
			}
		}
	}
}

</style>