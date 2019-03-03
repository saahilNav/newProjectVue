<template>
  <div>
      <ul>
        <li v-for="users in getProducts" v-bind:key="users.id">
          {{users.name}}
        </li>
      </ul>
        <ul>
        <li v-for="users in getCarProducts" v-bind:key="users.id">
          {{users.name}}
          <router-link :to="'/dialog/'+ users.id">dialog button1 </router-link>
        </li>
      </ul>
 <p> number of proct {{countProducts}}</p>
  <span>number of car {{countCarProducts}} </span>
    <div>{{message}}</div>
    <button v-on:click="updateMessage">updatemesaage</button>
      <button v-on:click="addProducts">AddUsers</button>
            <button v-on:click="addTocCat">AddCarUsers</button>
    

  </div>

</template>

<script>
import{mapState,mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: 'HelloWorld',
  computed:{
    ...mapState({message:state=>state.carModule.message}),
        ...mapState({message:state=>state.products.message}),

    ...mapGetters('products',['getUsers','countProducts','getProducts']),
        ...mapGetters("carModule",['getUsers','countCarProducts','getCarProducts'])

  }
  //   msg(){
  // return this.$store.state.message;
  // } ,
  ,
  methods:{
  ...mapActions("products",['updateMessage','addProducts']),
  ...mapActions("carModule",{addTocCat:'addProducts'}),
  ...mapMutations(['addUsers'])
  
  }
//   {
//   updateMessage(){
//    this.$store.dispatch("updateMessage");
//   }
// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
