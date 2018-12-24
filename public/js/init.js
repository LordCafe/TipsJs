 try {
 
 let url = 'https://api.invent.mx/v1/actitudfem/nodes.json/22360f3a2e03f847acf5339695e42e5b?sort=created:DESC&fields=id%7Ctitle%7Csummary%7Ctaxonomy%7Curl%7Cimages%7Csub_taxonomy%7Ctype%7Caudios&type=article|gallerie|gallery|video|videos&limit=9&offset=9&callback=PWA'; 
 const target = document.querySelector('#collections');
 const inputUrl = document.querySelector('#uniqueUrl').value = url ;
 let Settings = document.getElementById('settings');

 function UpdateNotes( event ){
   event.preventDefault();
    let url = createNewUrl();
    makeJsonp(url+'&&callback=PWA');
 }

 Settings.addEventListener('submit', UpdateNotes )
 

const CreateUrlJson =( { API ,REPO , SITE , VERSION ,KEY })=>{
 return `${API}/${VERSION}/${SITE}/${REPO}/${KEY}`;
}
const getDataForm =(form)=>{
  let objectData = {};
  Array.from(form.elements).forEach((item)=>{
    const type = item.type;
    if(type === 'text'){
      objectData[item.id] = item.value; 
    }
    if(type === 'checkbox'  && item.checked ){      
      objectData[item.name] = objectData[item.name] || [];
      objectData[item.name].push(item.value);   
    }   
  });   
   return objectData

}

const joinParameters = (  parameters = [], props, combine )=>{
  let content = parameters[props] || false;
  if(!content){
    return content;
  }
  let string = content.join('|');
  let back = {};
  back[ props] = string;
  combine.push( back );
}


createNewUrl = ()=>{  
  let data = getDataForm(Settings);
  let combine = [];
  let newUrl = CreateUrlJson( data );
    joinParameters( data,  'fields' , combine) ;
    joinParameters(  data ,  'types' , combine ); 
    let completeUrl = combine.reduce(( url, item , index )=>{
      const join = ( index > 0 ) ? '&&' : '?';
      let key =  Object.keys(item)[0];
      url = `${url}${join}${key}=${item[key]}`
      return url;
    }, newUrl );   
   inputUrl.value =  completeUrl;
   return completeUrl;
}




function makeJsonp (url){
  $jsonp.send( url, {
  callbackName: 'PWA',
  onSuccess: function(json){
    createCollections(json.data);        
  },
  onTimeout: function(){
    console.log('timeout!');
  },
  timeout: 5
 });

}


 makeJsonp(url);

 const createCollections = ( data )=>{
  if( data ){
    data.forEach((  note )=>{   
      const template = CreateCards(note );    
      target.insertAdjacentHTML('beforeend', template );
    });
  }
 }






 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
 })
 } catch(e) {
   // statements
   console.log(e);
 }
 