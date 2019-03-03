<template>
    <div>helo I am DialogBox 
   <div>{{user.name}} 
     {{user.id}}
     {{user.name}}
     {{id}}
   </div>
    <div>
      
     
  <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>Edit Comments</b-dropdown-item>
    <b-dropdown-item>DeletBuuton</b-dropdown-item>
  </b-dropdown>
</div>
  <textarea  rows="8"></textarea>
    </div>

</template>

<script>
export default {
name:'DialogBox',
props:['users.id'],
  data(){
    
  return {
  user:{}
  }
  },
  created(){
    this.$store.getters(id).then(data=>this.user=data)
    console.log(this.user)
  }

}
</script>

<style>

</style>
