let test_result_output, f, tests = {total: 0, passed: 0}
const __init = (test_fun) => {
	__instruments()

	document.getElementById('take_shot').addEventListener('click', () => {
		html2canvas(document.body).then((canvas) => {
			const link = document.createElement('a')
			link.setAttribute('download', document.title + ' shot.png')
			link.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
			link.click()
		})
	})
	document.getElementById('load_last').addEventListener('click', () => {
		editor.setValue(localStorage.getItem('last_code'))
	})
	document.getElementById('go_test').addEventListener('click', () => {
		try {
			localStorage.setItem('last_code', editor.getValue())
			test_result_output.innerHTML = ''
			const text = changeNameFunction(editor.getValue())
			console.log(localStorage.getItem('last_code'))
			const arg = text.substring(text.indexOf('(') + 1, text.indexOf(')'))
			const body = text.substring(text.indexOf('{') + 1, text.lastIndexOf('}'))
			f = new Function(arg, body)
			tests = {total: 0, passed: 0}
			test_fun()

			setTimeout(() => alert(`${tests.passed}/${tests.total} тестів пройдено успішно!`), 100)
		} catch (e) {
			test_result_output.innerHTML = '<p style=\'color: red;\'>Error: ' + e + '</p>'
		}
	})

	const editor = ace.edit('editor')
	let selectTheme = document.cookie ?? 'twilight'
	editor.setTheme('ace/theme/' + selectTheme)
	editor.session.setMode('ace/mode/javascript')

	document.getElementById('select_theme').addEventListener('change', function () {
		selectTheme = this.options[this.selectedIndex].text
		document.cookie = selectTheme
		editor.setTheme('ace/theme/' + selectTheme)
	})

	const font_size = document.getElementById('font_size')
	//console.log(window.getComputedStyle(document.getElementById("editor")).fontSize);
	font_size.value = parseInt(window.getComputedStyle(document.getElementById('editor')).fontSize)
	font_size.addEventListener('change', function () {
		document.getElementById('editor').style.fontSize = font_size.value + 'px'
	})

	test_result_output = document.getElementById('test_result_output')
}

const myEqual = async (rec, exp, spec) => {
	tests.total++
	const is_ok = myDeepEqual(rec, exp)
	if (is_ok) tests.passed++
	test_result_output.innerHTML += `<li class="test ${is_ok ?'ok' :'failed'}">
	<div class="test_variant">${spec}</div><br>
	<div class="test_expected">${exp}</div><br>
	<div class="test_result">${rec}</div></li>`
}

const myDeepEqual = (rec, exp) => typeof (rec) != 'object' && typeof (exp) != 'object'
	?rec === exp
	:JSON.stringify(rec) === JSON.stringify(exp)

const changeNameFunction = (text) => text.replaceAll(text.substring(text.indexOf('function ') + 9, text.indexOf('(')), 'f')


const isRecursion = () => {
	const text = editor.getValue()
	const nameFunction = text.substring(text.indexOf('function ') + 9, text.indexOf('('))
	console.log(text.match(new RegExp(nameFunction, 'gm')))
	return text.match(new RegExp(nameFunction, 'gm')).length > 1
}

const checkRecursion = () => {
	if (!isRecursion())
		test_result_output.innerHTML += '<p><b style="color: orange;"><i class="fa fa-exclamation-triangle"></i> Warning:</b> ' +
			'завдання зробленно без використання <a href="https://learn.javascript.ru/recursion">рекурсії</p>'
}