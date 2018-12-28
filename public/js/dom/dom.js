let MagicDom = function(){
	this.SetParent = function(parent){
		this.parent = parent;
	} 
	this.createElement = function( data ){
		let NewElement = document.createElement( data.element);
		NewElement.textContent = data.text;
		NewElement.classList.add('red-text');
		NewElement.dataset.createBy = data.name;
		NewElement.dataset.edad = data.edad;
		return NewElement;
	}
	this.append = function(NewElement){
		this.parent.appendChild(NewElement);
	}
	return this;

}