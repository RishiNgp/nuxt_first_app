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
    position: "top-right", 
    duration : 5000,
    icon:"error_outline"
   
})
Vue.toasted.register('sucess','You have succefully login',{

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