const PAGE_LIST = [
	{
		title: 'Лабораторна робота 1',
		pages: [
			{title: 'Сума двох чисел', url: '/pages/lab_1/1.html'},
			{title: 'Високосний рік', url: '/pages/lab_1/2.html'},
			{title: 'Середнє з трьох', url: '/pages/lab_1/3.html'},
			{title: 'Хід ферзя', url: '/pages/lab_1/4.html'},
		]
	},
	{
		title: 'Лабораторна робота 2',
		pages: [
			{title: 'Решта', url: '/pages/lab_2/1.html'},
			{title: 'Трикутник', url: '/pages/lab_2/2.html'},
		]
	},
	{
		title: 'Лабораторна робота 3',
		pages: [
			{title: 'Масив', url: '/pages/lab_3/1.html'},
			{title: 'Зсув вправо', url: '/pages/lab_3/2.html'},
			{title: 'Масив - Гора', url: '/pages/lab_3/3.html'},
		]
	},
	{
		title: 'Лабораторна робота 4',
		pages: [
			{title: 'Кількість об\'єктів', url: '/pages/lab_4/1.html'},
			{title: 'Shopping Cart', url: '/pages/lab_4/2.html'},
			{title: 'Дужки (простий варіант)', url: '/pages/lab_4/3.html'},
			{title: 'Дужки (повний варіант)', url: '/pages/lab_4/4.html'},
		]
	},
	{
		title: 'Лабораторна робота 5',
		pages: [
			{title: 'Парність числа. Рекурсія', url: '/pages/lab_5/1.html'},
			{title: 'Послідовність Фібоначчі. Рекурсія', url: '/pages/lab_5/2.html'},
			{title: 'Методи масиву', url: '/pages/lab_5/3.html'},
		]
	},
	{
		title: 'Модульний контроль 1',
		pages: [
			{title: 'Завдання 1', url: '/pages/mk_1/1.html'},
			{title: 'Завдання 2', url: '/pages/mk_1/2.html'},
			{title: 'Завдання 2', url: '/pages/mk_1/3.html'},
		]
	}
]
const __settings = () => document.write(`
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link rel="icon" href="/res/img/icon.png">
<link rel="stylesheet" href="/res/style/style.css">
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.2/ace.js" type="text/javascript" charset="utf-8"></script>
<script src="/res/script/cover.js"></script>
`)
const __instruments = () => document.write(`
<div id="menu">
	<div id="editor_settings">
		<select name="" id="select_theme">
			<option value="" style="color: #930F80FF;background: #fff">chrome</option>
			<option value="" style="color: #06d6f3;background: #343f32">monokai</option>
			<option value="" style="color: #FFE26DFF;background: #1e1e1e">twilight</option>
			<option value="" style="color: #930F80FF;background: #fff">eclipse</option>
			<option value="" style="color: #FFE26DFF;background: #062859">cobalt</option>
		</select>
		<input type="number" name="" id="font_size" min="1" value="14">
	</div>
	<div id="buttons">
		<input type="button" id="take_shot" value="Знімок екрану">
		<input type="button" id="load_last" value="Відновити">
		<input type="button" id="go_test" value="Перевірити">
	</div>
</div>
<ol id="test_result_output"></ol>
`)

const __pages = () => {
	let str = '<div id="page_list">'
	for (let group of PAGE_LIST) {
		str += `<div>${group.title}`
		for (let page of group.pages) {
			str += `<a href="${page.url}">${page.title}</a>`
		}
		str += '</div>'
	}
	str += '</div>'
	document.write(str)
}
const __to_main = () => document.write('<a href="/index.html" id="to_main">На головну</a>')

const __warning = (s) => `<li class="recursion_werning">${s}</li>`