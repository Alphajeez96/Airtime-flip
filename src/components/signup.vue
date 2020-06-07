<template>
    <div class="container">
        <div class="card" style="width: 28rem" >
           

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="full_name" class="mt-3">Name</label>
                            <input v-model="fullname" type="text" class="form-control form-control-md" required placeholder="Full Name" id="full_name">
                        </div>
                    </div>  
                </div>


                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="user_name" class="mt-3">Username</label>
                            <input type="text" v-model="username" class="form-control form-control-md" required placeholder="Username" id="user_name">
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group">
                            <label for="phone_number" class="mt-3">Phone Number</label>
                            <input type="text" v-model="number" class="form-control form-control-md" required placeholder="PhoneNumber" id="phone_number">
                        </div>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" v-model="email" class="form-control form-control-md" required placeholder="adewalechukwuka@example.com" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model.lazy="password" class="form-control form-control-md" required placeholder="Password" id="password" >
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group">
                            <label for="confirm_password">Confirm Password</label>
                            <input type="password" v-model.lazy="password_confirmation" class="form-control form-control-md" required placeholder="Confirm Password" id="confirm_password" >
                        </div>
                    </div>
                </div>

                    <button type="submit" @click.prevent="signup()" class="btn btn-success btn-block btn-md">Sign Up</button>
             
        </div>    
    </div>
</template>

<script>
const axios = require('axios');
import toast from '../toast';
import router from '../router'

export default {
   name: 'signup',
   data() {
       return {
           fullname: '',
           username: '',
           number:'',
           email: '',
           password: '',
           password_confirmation:''
           
       }
   },
   methods: {
       signup(){
          return axios.post('https://test.airtimeflip.com/api/v1/users', {
                fullname: this.fullname,
                username: this.username,
                number: this.number,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
           })
        .then(response => {
                   console.log(response.data);
               if (response) {
                    toast.Regsuccess(response.data);
                    this.$router.push({ name: 'login', query: { redirect: '/login' } });
                }
        
            // TODO: redirect to paage notifying that confirmation has been sent to mail
            //TODO: Try catching and handling errors arfter this
            

                  })
        .catch(function (error){
            console.log(error)
              if (error.response) {
                    toast.error(error.response.data.message);
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