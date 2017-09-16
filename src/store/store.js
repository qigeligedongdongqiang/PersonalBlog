import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  	//用于导航条选中效果
    navSelectItem: '',

    //design页面数据
    designItems: [
        {
            img: require('@/../static/img/design/design12/index.jpg'),
            link: '/Detail/design/12'
        },
        {
            img: require('@/../static/img/design/design11/index.jpg'),
            link: '/Detail/design/11'
        },
    	{
			img: require('@/../static/img/design/design10/index.jpg'),
			link: '/Detail/design/10'
		},
		{
			img: require('@/../static/img/design/design9/index.jpg'),
			link: '/Detail/design/9'
		},
		{
			img: require('@/../static/img/design/design4/index.jpg'),
			link: '/Detail/design/4'
		},
		{
			img: require('@/../static/img/design/design5/index.jpg'),
			link: '/Detail/design/5'
		},
		{
			img: require('@/../static/img/design/design3/index.jpg'),
			link: '/Detail/design/3'
		},
		{
			img: require('@/../static/img/design/design2/index.jpg'),
			link: '/Detail/design/2'
		},
		{
			img: require('@/../static/img/design/design6/index.jpg'),
			link: '/Detail/design/6'
		},
		{
			img: require('@/../static/img/design/design1/index.jpg'),
			link: '/Detail/design/1'
		},
		{
			img: require('@/../static/img/design/design7/index.jpg'),
			link: '/Detail/design/7'
		},
		{
			img: require('@/../static/img/design/design8/index.jpg'),
			link: '/Detail/design/8'
		},
    ],

    //photography页面数据
    photoItems: [
    	{
			img: require('@/../static/img/photography/photography1/index.jpg'),
			link: '/Detail/photography/1'
		},
		{
			img: require('@/../static/img/photography/photography2/index.jpg'),
			link: '/Detail/photography/2'
		},
		{
			img: require('@/../static/img/photography/photography3/index.jpg'),
			link: '/Detail/photography/3'
		},
		{
			img: require('@/../static/img/photography/photography4/index.jpg'),
			link: '/Detail/photography/4'
		}
    ],

    //详情页面数据，从1开始排序，顺序不能打乱
    detail: {
    	//design详情
    	design: [
    		{//1
    			text: {
    				title: 'Rabbit Crazy',
    				summary: 'Design | Logo',
    				pList: [
    					'疯狂的兔子(Rabbit Crazy)是一个女装品牌，含蓄且奔放。兔子怕水，而这只兔子在游泳。',
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design1/1.jpg'),
    				require('@/../static/img/design/design1/2.jpg'),
    				require('@/../static/img/design/design1/3.jpg'),
    			]	
    		},
    		{//2
    			text: {
    				title: 'Jiaxiao Design · 嘉晓设计',
    				summary: 'Design | Logo',
    				pList: [
    					'嘉晓设计是一家综合类设计公司，其中以工业设计为主，延伸至其他设计领域。',
    					'标志以“嘉”字为设计主体，强调其品牌独特性。六条横线左右无约束延展，象征其可拓展性能力。'
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design2/1.jpg'),
    				require('@/../static/img/design/design2/2.jpg'),
    				require('@/../static/img/design/design2/3.jpg'),
    				require('@/../static/img/design/design2/4.jpg'),
    				require('@/../static/img/design/design2/5.jpg'),
    				require('@/../static/img/design/design2/6.jpg'),
    			]	
    		},
    		{//3
    			text: {
    				title: 'Chuangy · 创元科技',
    				summary: 'Design | Brand',
    				pList: [
    					'创元（Chuangy）是致力于新能源汽车电池研发类型的科技公司，主要进行电池研发。',
    					'_ 创元（Chuangy）：首字母“C”<br>_ 电：快速，革新之意<br>_ 核心：钻石作为核心体现<br>将创元首字母“C”、电符号遇钻石切面相结合'
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design3/1.jpg'),
    				require('@/../static/img/design/design3/2.jpg'),
    				require('@/../static/img/design/design3/3.jpg'),
    				require('@/../static/img/design/design3/4.jpg'),
    				require('@/../static/img/design/design3/5.gif'),
    				require('@/../static/img/design/design3/6.jpg'),
    				require('@/../static/img/design/design3/7.jpg'),
    				require('@/../static/img/design/design3/8.jpg'),
    				require('@/../static/img/design/design3/9.jpg'),
    				require('@/../static/img/design/design3/10.jpg'),
    				require('@/../static/img/design/design3/11.jpg'),
    				require('@/../static/img/design/design3/12.jpg'),
    			]	
    		},
    		{//4
    			text: {
    				title: 'East Artisan · 东方首饰',
    				summary: 'Design | Brand',
    				pList: [
    					'_ 东方首饰：取其中文字“东”<br>_ 乐:匠人乐在其中，才是精妙产品的起源。<br>_ 匠人（artisan）<br>_ 东方美学（east）<br>_ 两仪:天地初开，一切皆为混沌，是为无极，无极生太极，太极生两仪，两仪为阴阳,天为阳气，地为阴气，二气相互作用，产生万物。',
    					'将以上源自东方首饰的概念及元素通过图形化的表现形式融合。辅助图形采用红丝带包装，产品不再是冷冰冰的产品，而是“礼物”，其贯穿于东方首饰品牌之中，意为拉近东方首饰与客户之间的距离。'
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design4/1.jpg'),
    				require('@/../static/img/design/design4/2.jpg'),
    				require('@/../static/img/design/design4/3.jpg'),
    				require('@/../static/img/design/design4/4.jpg'),
    				require('@/../static/img/design/design4/5.gif'),
    				require('@/../static/img/design/design4/6.jpg'),
    				require('@/../static/img/design/design4/7.jpg'),
    				require('@/../static/img/design/design4/8.jpg'),
    				require('@/../static/img/design/design4/9.jpg'),
    				require('@/../static/img/design/design4/10.jpg'),
                    require('@/../static/img/design/design4/11.jpg'),
                    require('@/../static/img/design/design4/12.jpg'),
    			]	
    		},
    		{//5
    			text: {
    				title: 'RuiRi · 睿日信息技术',
    				summary: 'Design | Brand',
    				pList: [
    					'上海睿日信息技术有限公司是一家研发现代高科技信息技术的公司，需求体现科技感，核心前沿。',
    					'_ 睿日（ruiri）：相反的两个首字母r<br>_ 核心：钻石作为核心体现<br>_ 科技感：内部芯片走线<br>_ 可靠稳定：坚固的盾牌'
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design5/1.jpg'),
    				require('@/../static/img/design/design5/2.jpg'),
    				require('@/../static/img/design/design5/3.jpg'),
    				require('@/../static/img/design/design5/4.jpg'),
    				require('@/../static/img/design/design5/5.jpg'),
    				require('@/../static/img/design/design5/6.jpg'),
    				require('@/../static/img/design/design5/7.jpg'),
    				require('@/../static/img/design/design5/8.jpg'),
    				require('@/../static/img/design/design5/9.jpg'),
    				require('@/../static/img/design/design5/10.jpg'),
    				require('@/../static/img/design/design5/11.jpg'),
    			]	
    		},
    		{//6
    			text: {
    				title: '汝瓷 · 拙墣',
    				summary: 'Design | Brand',
    				pList: [
    					'作为一家传承汝瓷文化为己任的公司，拙墣真正用心用手去打造每一款产品。将“精于工，拙于朴”的思想融入至品牌中。',
    					'_ 山水<br>_ 瓷器<br>_ 祥云<br>_ 墨'
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design6/1.jpg'),
    				require('@/../static/img/design/design6/2.jpg'),
    				require('@/../static/img/design/design6/3.jpg'),
    				require('@/../static/img/design/design6/4.jpg'),
    				require('@/../static/img/design/design6/5.jpg'),
    				require('@/../static/img/design/design6/6.jpg'),
    				require('@/../static/img/design/design6/7.jpg'),
    				require('@/../static/img/design/design6/8.jpg'),
    				require('@/../static/img/design/design6/9.jpg'),
    				require('@/../static/img/design/design6/10.jpg'),
    				require('@/../static/img/design/design6/11.jpg'),
    				require('@/../static/img/design/design6/12.jpg'),
    				require('@/../static/img/design/design6/13.jpg'),
    			]	
    		},
    		{//7
    			text: {
    				title: 'Little Lion · 小狮子',
    				summary: 'Design | Logo',
    				pList: [
    					'Little Lion，一位年轻少女系的独立摄影师。风格清新，梦幻，善于运用柔性光影进行创作。',
    				]
    			},
    			imgList: [
    				require('@/../static/img/design/design7/1.jpg'),
    				require('@/../static/img/design/design7/2.jpg'),
    				require('@/../static/img/design/design7/3.jpg'),
    			]	
    		},
    		{//8
    			imgList: [
    				require('@/../static/img/design/design8/1.jpg'),
    				require('@/../static/img/design/design8/2.jpg'),
    				require('@/../static/img/design/design8/3.jpg'),
    			]	
    		},
    		{//9
    			imgList: [
    				require('@/../static/img/design/design9/1.jpg'),
    				require('@/../static/img/design/design9/2.jpg'),
    				require('@/../static/img/design/design9/3.jpg'),
    				require('@/../static/img/design/design9/4.jpg'),
    				require('@/../static/img/design/design9/5.jpg'),
    				require('@/../static/img/design/design9/6.jpg'),
    				require('@/../static/img/design/design9/7.jpg'),
    			]	
    		},
    		{//10
    			imgList: [
    				require('@/../static/img/design/design10/1.jpg'),
    				require('@/../static/img/design/design10/2.jpg'),
    				require('@/../static/img/design/design10/3.jpg'),
    				require('@/../static/img/design/design10/4.jpg'),
    				require('@/../static/img/design/design10/5.jpg'),
    				require('@/../static/img/design/design10/6.jpg'),
    				require('@/../static/img/design/design10/7.jpg'),
    				require('@/../static/img/design/design10/8.jpg'),
    				require('@/../static/img/design/design10/9.jpg'),
    				require('@/../static/img/design/design10/10.jpg'),
    				require('@/../static/img/design/design10/11.jpg'),
    			]	
    		},
            {//11
                imgList: [
                    require('@/../static/img/design/design11/1.jpg'),
                    require('@/../static/img/design/design11/2.jpg'),
                    require('@/../static/img/design/design11/3.jpg'),
                    require('@/../static/img/design/design11/4.jpg'),
                    require('@/../static/img/design/design11/5.jpg'),
                    require('@/../static/img/design/design11/6.jpg'),
                    require('@/../static/img/design/design11/7.jpg'),
                    require('@/../static/img/design/design11/8.jpg'),
                ]   
            },
            {//12
                imgList: [
                    require('@/../static/img/design/design12/1.jpg'),
                    require('@/../static/img/design/design12/2.jpg'),
                    require('@/../static/img/design/design12/3.jpg'),
                    require('@/../static/img/design/design12/4.jpg'),
                    require('@/../static/img/design/design12/5.jpg'),
                    require('@/../static/img/design/design12/6.png'),
                    require('@/../static/img/design/design12/7.png'),
                ]   
            }
    	],
    	//photo详情
    	photography: [
    		{//1
    			text: {
    				title: '森林女孩',
    				summary: 'Photography | Portrait',
    				pList: [
    					'走着走着我到了森林深处，遇到一只在做胡萝卜蛋糕的兔子，我的突然出现，把她吓到了，嗦嗦嗦的匆忙躲进草丛。树上的松鼠朝我扔了一颗松果。“哎呦，好疼啊”  “是谁” 只见远处氤氲的阳光下走来一个人影。躲在草丛中的兔子一下窜到了她身后。这时，从树后，慢悠悠的晃出一只带着领结，撑着伞的狐狸！狐狸先生不知在小姑娘的耳边说了些什么，直逗得小姑娘咯咯得笑个不停...',
    				]
    			},
    			imgList: [
    				require('@/../static/img/photography/photography1/1.jpg'),
    				require('@/../static/img/photography/photography1/2.jpg'),
    				require('@/../static/img/photography/photography1/3.gif'),
    				require('@/../static/img/photography/photography1/4.gif'),
    			]
    		},
    		{//2
    			text: {
    				title: '春天',
    				summary: 'Photography | Portrait',
    				pList: []
    			},
    			imgList: [
    				require('@/../static/img/photography/photography2/1.jpg'),
    				require('@/../static/img/photography/photography2/2.jpg'),
    				require('@/../static/img/photography/photography2/3.jpg'),
    				require('@/../static/img/photography/photography2/4.jpg'),
    			]
    		},
    		{//3
    			text: {
    				title: '手机摄影',
    				summary: 'Photography | iPhone',
    				pList: []
    			},
    			imgList: [
    				require('@/../static/img/photography/photography3/1.jpg'),
    				require('@/../static/img/photography/photography3/2.jpg'),
    				require('@/../static/img/photography/photography3/3.jpg'),
    			]
    		},
    		{//4
    			text: {
    				title: '自然',
    				summary: 'Photography | iPhone',
    				pList: []
    			},
    			imgList: [
    				require('@/../static/img/photography/photography4/1.jpg'),
    				require('@/../static/img/photography/photography4/2.jpg'),
    				require('@/../static/img/photography/photography4/3.jpg'),
    				require('@/../static/img/photography/photography4/4.jpg'),
    				require('@/../static/img/photography/photography4/5.jpg'),
    			]
    		}
    	]
    },
  },
  mutations: {
    updateSelectItem: (state,item) => {
    state.navSelectItem = item;
  	}
  }

});