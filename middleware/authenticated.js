import Vue from "vue";
export default function check({ route, redirect }) {
    const username = "rishikesh@ngpwebsmart.com"
    const password = "123456"
    // console.log(username)
    // console.log(password)
    // console.log(localStorage.getItem("username"))


    // If the user is not authenticated
    if (route.path!="/" && (username !== localStorage.getItem("username")||password!==localStorage.getItem("password"))) {
        // this.$toasted.show('hello billo')
        Vue.toasted.global.my_app_error();
        redirect("/")
     }
     else if(route.path=="/"){
        localStorage.removeItem("username")
        localStorage.removeItem("password")
     }
    }