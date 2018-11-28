
const app = new Vue({
    el: '#app',
    data: {
	title: 'テスト'
    },

    components: {
	'app-header': {
	    props: ['title'],
	    template: `
		<div class="app-header">
		<h1>{{ title }}</h1>
		<hr>
		</div>
	    `
	},

	'app-body': {
	    data: function(){
		return {
		    senarios: [
			{
			    id: 0,
			    title: '第一章　宮沢健二',
			    content: `雨ニモ負ケズ
			    風ニモ負ケズ
			    雪ニモ夏ノ暑サニモ負ケヌ
			    丈夫ナ体ヲ持チ……`
			},

			{
			    id: 1,
			    title: '第二章　夏目漱石',
			    content: `　山路を登りながら、こう考えた。
			    　智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。
			    　住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る……`
			}
		    ]
		}
	    },
	    
	    template: `
		<div class="app-body">
		<app-body-senario v-for="senario in senarios" v-bind:key="senario.id" v-bind:senario="senario"></app-body-senario>
		</div>
		`,

	    components: {
		'app-body-senario': {
		    props: ['senario'],
		    
		    template: `
		        <div class="app-body-senario">
			<h2>{{ senario.title }}</h2>
			<div class="app-body-senario-content">{{ senario.content }}</div>
		        </div>
		    `
		}
	    }
	}
    }
});
