import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './productsModule';
import carModule from './carModule';
Vue.use(Vuex);
export const store= new Vuex.Store({
 modules:{
 products:productsModule,
 carModule:carModule
 },
    state:{
     users:[
         {id:1, name:'sahil', age:30},
         {id:3, name:'sharma', age:40},
         {id:2, name:'navi', age:20}


        ]
 },
 mutations:{
     updateMessage(state){
         state.message="vues update From Mutations"
     },
     addUsers(state,payload){
    state.users.push(payload)
    }

 },
 actions:{
     updateMessage({commit}){
       commit('updateMessage')
     },
    

 },
 getters:{
     getUsers(state){
        return state.users.filter(users=>users.age < 40)
     }
     
 }
})
export default store;