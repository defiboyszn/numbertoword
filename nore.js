/*


 NoreJs is a JavaScript library.
 It's made by Tobi.
 It's Hosted by Github.
 @tobithedev
 https://tobithedev.github.io/NoreJs/nore.js
 
 
 Thanks to Tobi.
 😊😊
*/
let debug = false;
function warn(message,...othermessage){
  if (debug){
    console.error('[Nore Warn]: ',message,othermessage)
  }
}
function $(selector)
{
  const self =
  {
    element: document.querySelector(selector),
    html: (value)=> {
      if(value == null){
      self.element
      }else{
        self.element.innerHTML = value
      }
    },
    on:(event, callback)=>{
      if (event === null && callback === null) {
        warn('You Did Not Pass Any EventName & Callback')
      } else if(event === null) {
        warn('You Did Not Pass Any EventName')
      }else if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
      self.element.addEventListener(event,callback)
    }
    },
    click:(callback)=>{
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
      self.element.addEventListener('click',callback)
      }
    },
    ready:(callback)=>{
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
      self.element.addEventListener('load',callback)
      }
    },
    input: (callback) => {
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
       self.element.addEventListener("input", callback)
      }
    },
    dbclick: (callback) => {
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
      self.element.addEventListener("dbclick", callback)
      }
    },
    // MOUSE EVENTS
    mousedown: (callback) => {
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      }else{
      self.element.addEventListener("mousedown", callback)
      }
    },
    mouseenter: (callback) => {
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      } else self.element.addEventListener("mouseenter", callback)
    },
    mouseleave: (callback) => {
      if (callback === null) {
        warn('You Did Not Pass Any Callback')
      } else self.element.addEventListener("mouseleave", callback)
    },
    // KEYBOARD EVENTS
    keypress: (callback) => {
      self.element.addEventListener("keypress", callback)
    },
    keyup: (callback) => {
      self.element.addEventListener("keyup", callback)
    },
    keydown: (callback) => {
      self.element.addEventListener("keydown", callback)
    },
    // FORM EVENTS
    submit: (callback) => {
      self.element.addEventListener("submit", callback)
    },
    change: (callback) => {
      self.element.addEventListener("change", callback)
    },
    focus: (callback) => {
      self.element.addEventListener("focus", callback)
    },
    blur: (callback) => {
      self.element.addEventListener("blur", callback)
    },
    // DOCUMENT EVENTS
    resize: (callback) => {
      self.element.addEventListener("resize", callback)
    },
    scroll: (callback) => {
      self.element.addEventListener("scroll", callback)
    },
    unload: (callback) => {
      self.element.addEventListener("unload", callback)
    },
    load: (callback) => {
      self.element.addEventListener("load", callback)
    },
    error: (callback) => {
      self.element.addEventListener("error", callback)
    },
    //
    select: (callback) => {
      self.element.addEventListener("select", callback)
    },
    reset: (callback) => {
      self.element.addEventListener("reset", callback)
    },
    hide: (time)=>{
      if(time == null){
        self.element.style.display = 'none';
      }else{
        self.element.style.display = 'none';
        self.element.style.transition = time;
      }
    },
    toggle: ()=>{
      if(self.element.style.display = 'none'){
        self.element.style.display = 'block';
      }else{
        self.element.style.display = 'none';
      }
    },
    show: (time)=>{
      if(time == null){
        self.element.style.display = 'block';
      }else{
        self.element.style.display = 'block';
        self.element.style.transition = time;
      }  
    },
    attr: (name,value)=>{
      if(value == null)
        self.element.getAttribute(name)
      else
      self.element.setAttribute(name,value)
    },
    removeattr: (name)=>{
      self.element.removeAttribute(name)
    },
    text: (value) => {
      if(value == null){
        return self.element.innerText;
      }else{
      self.element.innerText = (value)
      }
    },
    link: (href,value)=>{
      self.element.innerHTML = "<a" +" href='" + (href || '#') + "'>" + (value ||'') + "</a>"
    },
    color: (value)=>{
      self.element.style.color = (value)
    },
    background: (value)=>{
      self.element.style.background = (value)
    },
    Halign: (value) => {
      self.element.style.textAlign = (value)
    },
    button: (type,value)=>{
      self.element.innerHTML = "<button type='"+(type || 'button') +"'>" + (value || '') + "</button>"
    },
    style: (styles)=>{
      for(let key in styles){
        self.element.style[key] = styles[key]
      }
      return self
    },
    //Animation
    fadeOut: (time,speed) => {
      self.element.style.opacity = 0;
      self.element.style.transition = (speed);
      setTimeout(function() {
        self.element.style.display = "none";
      },(time));
    },
    fadeIn: (time,speed) => {
      var op = 0;
      self.element.style.opacity = op;
      self.element.style.display = "block";
     var timer = setInterval(function() {
        if(op >= 1.0){
          clearInterval(timer);
        }
        self.element.style.transition = (speed);
        self.element.style.opacity = op;
        op = op + 0.1;
      },(time));
    },
    height: (value)=>{
      self.element.style.height = (value)
    },  
    width: (value) => {
      self.element.style.width = (value)
    },
    val: (value) => {
      if(value == null){
      return self.element.value;
      }else{
        self.element.innerText = value;
      }  
    },
    css: (property,value) => {
      if (value == null) {
        self.element.style = property;
      }else{
        self.element.style = property + ":" + value;
      }
    },
    addClass: (name) =>{
      self.element.classList.add(name);
    },
    removeClass: (name) => {
      self.element.classList.remove(name);
    },
    //dialog: () => {}
  }
  return self;
}
$.debug = function(on){
  debug = on ? true : false;
}
$.alert = function(message){
  alert(message)
}