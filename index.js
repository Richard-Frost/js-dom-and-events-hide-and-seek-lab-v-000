function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('div .target')
}

function deepestChild() {
	let grandNode = document.querySelector('#grand-node')
	let childNode = grandNode.children[0]

	while (childNode) { 
		grandNode = childNode
		childNode = grandNode.children[0]
	}
	return grandNode
}

function increaseRankBy(n) {
	let nodes = document.querySelectorAll('ul.ranked-list')
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
	}
}

