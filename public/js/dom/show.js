let listItem = {
	adrian : { name  : 'adrian', edad : 30 , text :  'quiere un carro', element : 'div'},
	miguel : { name  : 'miguel', edad : 300 , text :  'quiere un avion' ,element : 'span' },
	angel :  { name  :  'angel', edad : 20 , text :  'quiere una tele', element : 'blockquote'},
	tamayo : { name  : 'joel', edad : 500 , text :  'quiere un novi@', element : 'p'}
};

//En este scope Parent es global
let Parent =  document.querySelector('#example-manipulacion');

function SeeManipulation (){
	let Example = new MagicDom();	
	Example.SetParent(Parent);
	const keys = Object.keys(listItem);
	for (const key of keys) {
		let NewItem =  Example.createElement(listItem[key]);
		Example.append(NewItem);
	}	
}


document.querySelector('#deleteActions').addEventListener("click",function(){	
	Parent.innerHTML = "";
});