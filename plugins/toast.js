import Vue from 'vue'
//import VueToast from 'vue-toast-notification'
import Toasted from 'vue-toasted';
//import 'vue-toast-notification/dist/theme-default.css'
    
Vue.use(Toasted,{
    iconPack : 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
})
Vue.toasted.register('my_app_error', 'Please enter correct username && password', {
    // type : 'error',
    // icon : 'hourglass_empty',
    theme: "bubble", 
    position: "top-center", 
    duration : 2000,
    icon:"error_outline"
   
})
Vue.toasted.register('negative_valu_error','Value Cannot Be Less Than Zero',{
  theme: "bubble", 
  position: "top-center", 
  duration : 500,
  icon:"error_outline"
})
Vue.toasted.register('ngegative_quantity','Quantity Should be greater than the Zero',{
  theme:"bubble",
  position:"top-center",
  duration:2000,
  icon:"warning"
})
Vue.toasted.register('success',(payload)=>{
  if(payload.message){
    return payload.message
  }
  return "Item added succeffuly"
},
{
  theme:"outline",
  position:"top-center",
  duration:2000,
  icon:"check"
})

export default ({app}, inject) => {
  inject('Toast',(content,status,Icon)=>{
    Vue.toasted.show(content,{
        type:status,
        icon:Icon
        //position:POSITION.TOP_CENTER
    })

  })
}