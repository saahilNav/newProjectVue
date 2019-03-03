export default{
    namespaced:true,

    state:{
        message:'welcome  to cart Module,',
       carproducts: [
    {id:6,name:'iphone', price:800},
    {id:7,name:'iphone4', price:800},
 ]
    },

    mutations:{
        addProducts(state,payload){
            state.carproducts.push(payload);

        }
    }
    ,
    actions:{
        addProducts({commit}){
            commit('addProducts',
            {
                id:6,
                name:'samsung',
                price:500
            });
        }
    },
    getters:{
        countCarProducts(state){
            return state.carproducts.length
        },
        getCarProducts(state){
            return state.carproducts;
        }
    }
}