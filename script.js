document.addEventListener('DOMContentLoaded', function() {
	var greeting = 'Guten morgen.' + '\n';
	var positions = '';
	var buttons = document.getElementsByClassName('product__button');
	console.log(typeof buttons);
	
	let div = document.createElement('div');
	div.className = "order-lunch";
	div.innerHTML = "<strong>Текст сообщения:</strong><br>" + greeting + positions;
	div.style.position = 'fixed';
	div.style.top = '100px';
	div.style.right = '100px';
	div.style.padding = '15px';
	div.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
	div.style.boxShadow = '0 18px 26px -13px #ababab';
	div.style.width = '300px';
	div.style.height = '300px';
	div.style.zIndex = 1000;
	div.style.borderRadius = '10px';
	document.body.append(div);
	
	let ul = document.createElement('ul');
	
	ul.style.listStyleType = 'none';
    ul.style.margin = 0;
	div.appendChild(ul);
	
	Array.from(buttons).forEach((el) => {
		el.style.display = 'none';
		let parent = el.parentNode;
		let parentParent = parent.parentNode;
		let wrapper = document.createElement('div');
		let button = document.createElement('button');
		button.className = 'button-add';
		button.innerHTML = 'Добавить';
		button.style.backgroundColor = '#e5690e';
		button.style.fontFamily = 'Roboto,sans-serif';
		button.style.color = '#fff';
		button.style.padding = '11px 22px 9px';
		button.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)';
		button.style.border = 'none';
		button.style.borderRadius = '3px';
		button.style.cursor = 'pointer';
		parent.remove();
		parentParent.append(wrapper);
		wrapper.append(button);
		
		button.addEventListener('click', function(e) {
			let title = e.target.parentNode.parentNode.parentNode.getElementsByClassName('thumbnail-caption')[0].innerHTML;
			let li = document.createElement('li');
			li.innerHTML = title;
			ul.appendChild(li);
		});
		/*
		el.addEventListener('click', function(e) {
			var title = e.target.parentNode.parentNode.parentNode.getElementsByClassName('thumbnail-caption')[0].innerHTML;
			positions = positions + '– ' + title + '\n';		
			let li = document.createElement('li');
			li.innerHTML = title;
			ul.appendChild(li);	
		});
		*/
	});
});