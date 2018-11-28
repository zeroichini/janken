
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
	    props: [],
	    template: `
		<div class="app-body">
		    <app-body-senario></app-body-senario>
		</div>
		`,

	    components: {

		'app-body-senario': {
		    data: function(){
			return {
			    title: '第一章　test',
			    content: `　あいうえお
			    kakikukeko
			    сасисусесо
			    `
			}
		    },
		    
		    template: `
		        <div class="app-body-senario">
			<h2>{{ title }}</h2>
			<div class="app-body-senario-content">{{ content }}</div>
		        </div>
		    `
		}
	    }
	}
    }
});
