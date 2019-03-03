export default{
    namespaced:true,
    state:{
        message:'welcome module 2 ,',
       products: [
    {id:1,name:'iphone', price:800},
    {id:2,name:'iphone4', price:800},
    {id:3,name:'iphone5', price:800},
    {id:4,name:'iphone6', price:800},
    {id:5,name:'iphone6s', price:800},
 ]
    },

    mutations:{
        addProducts(state,payload){
            state.products.push(payload);

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
        countProducts(state){
            return state.products.length
        },
        getProducts(state){
            return state.products;
        }
    }
}