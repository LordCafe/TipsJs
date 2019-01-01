class JsonpImagen{
  constructor(options = {}){
    this.callback_name = options.callbackName || 'callback',
    this.on_success = options.onSuccess || function(){},
    this.on_timeout = options.onTimeout || function(){},
    this.timeout = options.timeout || 10;
    this.result;
  }

  MakeJsonp(src, resolve){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    script.onload = ()=>{    
      resolve(this.result);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  clear_callback(){
    window[this.callback_name] = function(){};
    this.on_timeout();

  }

  timeout_trigger(){
    window.setTimeout(this.clear_callback.bind(this), this.timeout * 1000);
  }

  callback(data ){
    window.clearTimeout(this.timeout_trigger);
    this.result  = data;
    this.on_success(data);
  }

  InjectCallback(){
    window[this.callback_name] = this.callback.bind(this);
  }

  resquest(src){
    this.timeout_trigger(); 
    this.InjectCallback();
    return new Promise(( resolve , reject )=>{
      this.MakeJsonp( src, resolve ); 
    });
  }
}


class ApiImagen extends JsonpImagen{
  constructor( data ){
    super( data );
    this.UrlBase =  this.CreateSetting( data.parameters   );
    this.limit =9;
    this.offset =0;

  }

  joinParameters(  parameters = [], props, combine ){
    let content = parameters[props] || false;
    if(!content){
      return content;
    }
    let string = content.join('|');
    let back = {};
    back[ props] = string;
    combine.push( back );
  }


  CreateSetting({ API ,REPO , SITE , VERSION ,KEY }){
    return `${API}/${VERSION}/${SITE}/${REPO}/${KEY}`; 
  }

  settingsResquest( settings ){
    let keys = Object.keys(settings);
    if(keys.length  === 0  ){ return  false}
    let set =  keys.map(( data, key  )=>{
       return  data +'='+ settings[ data ].join('|');
     });
    let join = set.join( '&');
    return join;
  }

  GetNote(url, settings = {}){
    let parameters = this.settingsResquest(settings );
    let conditional = '';
    if( parameters ){
     conditional = '&'+parameters;
    }  
    let Newurl = this.UrlBase+ '?url=' +url+ conditional+ '&callback='+this.callback_name;
    return  super.resquest(Newurl);
  }

  GetQueue( settings ){
    let parameters = this.settingsResquest(settings );
    let conditional = '';
    if( parameters ){
     conditional = '?'+parameters;
    }  
    let Newurl = this.UrlBase+conditional;
    Newurl+= `&limit=${this.limit}&offset=${this.offset}`;
    Newurl += '&callback='+this.callback_name;    
    return  super.resquest(Newurl);
  }

  more( settings ){
   let notes = this.GetQueue( settings);
   this.offset = this.offset + this.limit;
   return notes;
  }

}

