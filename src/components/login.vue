<template>
    <div class="container">
        <div class="card" style="width: 28rem" >
           
<form  @submit.prevent="loginUser">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="full_name" class="mt-3">Email or Phone Number</label>
                            <input v-model="identity" type="text" class="form-control form-control-md" required placeholder="Full Name" id="full_name">
                        </div>
                    </div>  
                </div>


                
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" v-model="password" class="form-control form-control-md" required placeholder="Enter Password" >
                        </div>
                    </div>
                </div>
  
                <button type="submit" class="btn btn-success btn-block btn-md">Log In</button>
</form>
        </div>    
    </div>
</template>

<script>
const axios = require('axios');
import toast from '../toast';
import router from '../router'

export default {
   name: 'login',
   data() {
       return {
           login:{
           identity: '',
           password: '',
             }
        
       }
   },
   methods: {
    async loginUser(){
          return axios.post('https://test.airtimeflip.com/api/v1/login', {
                identity: this.identity,
                password: this.password,
             
           })
        .then(response => {
               console.log(response.data);
                  if (response) {
                    
                
                    console.log('this is the token'+ response.data.payload.access_token);
                    let token = response.data.payload.access_token
                   localStorage.setItem("jwt", token);
                   
                    if(token){
                        toast.loginsuccess(response.data);
                        this.$router.push("/home");
                    }  
                    //TODO: Validate login page input text to accept email and number only
                }

                  })

        .catch(function (error){
            console.log(error)
                if (error.response) {
                    toast.loginerror(error.response.data.message);
                }
        })
      
       },
    
   }
}
</script>

<style scoped>
    label {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #4a5568;
        font-size: .75rem;
        line-height: 2;
        font-weight: 700;
        border: 0 solid #e2e8f0;
        box-sizing: inherit;
        display: flex;
        align-items: left;
        justify-content: left;
    }

    .card{
        margin: auto;
        margin-top: 100px;
        vertical-align: middle;
        background: white;
        box-shadow: 0 5px 8px rgba(75, 75, 75, 0.3);
        padding: 10px 50px 50px;
        width: 25%;
        height: 100%;
        border-radius: 25px 25px 25px 0px;
        -moz-border-radius: 25px 25px 25px 0px;
        -webkit-border-radius: 25px 25px 25px 0px;
    }

    input{
        border: none;
        padding: 11px;
        background-color: #EDF2F7;
        border-radius: .25rem;
    }

    button{
        background-color: rgb(8, 62, 158);
        color: white;
        margin-top: 10px;
        width: 100%;
        height: 9vh;
        cursor: pointer;
        font-size: .875rem;
        border: 0 solid #e2e8f0;
        border-top-left-radius: .75rem;
        border-top-right-radius: .75rem;
        font-weight: 700;
        border-bottom-right-radius: .75rem;
    }

</style>