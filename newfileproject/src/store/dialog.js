export default{
    namespaced:true,

    state:{
        message:"Sahil sharma "
    },

    mutations:{
         changeData( state){
         return state.message;
         }

    }
    ,
    actions:{
        updateDatTheMessage({commit}){
         commit('changeData')
        }
    },
    getters:{
      
    }
}