class JsonpImagen{
  constructor(options = {}){
    this.callback_name = options.callbackName || 'callback',
    this.on_success = options.onSuccess || function(){},
    this.on_timeout = options.onTimeout || function(){},
    this.timeout = options.timeout || 10;
  }

  MakeJsonp(src){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
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
     this.on_success(data);
  }

  InjectCallback(){
    window[this.callback_name] = this.callback;
  }

  resquest(src){
   this.timeout_trigger(); 
   this.InjectCallback();
   this.MakeJsonp(src);
  }
}



const Jsonp = new JsonpImagen();
Jsonp.resquest('https://api.invent.mx/v1/salud180/topics.json/3357d9194ac780235ca8b8883ed56bb9');


