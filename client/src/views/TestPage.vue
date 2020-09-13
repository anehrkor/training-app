<template>
  <div class="mt-4">
    <div class="jumbotron bg-dark col-md-10 offset-md-1">
      <div
        class="card card-body bg-dark"
        v-for="(user, index) in users"
        :key="index"
      >
        <form>
          <div class="row">
            <div class="form-group col-md-3">
              <label for="email" class="text-white">Username:</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="user.username"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="pwd" class="text-white">Password:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="pwd" class="text-white">Phone Number:</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="user.phone"
              />
            </div>
            <div class="form-group col-md-3">
              <label for="pwd" class="text-white">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="user.email"
              />
            </div>
          </div>
        </form>
      </div>
      <br />
      <button class="btn btn-secondary float-right" title="Click to add row">
        <span class="fa fa-plus-square" v-show="index == users.length - 1">
        </span>
        &nbsp;Add More Data
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        username: "",
        password: "",
        email: "",
        phone: ""
      }
    };
  },
  /*methods:{
    addMoreData(index){
      this.users.push({ 
        username: '',
        password:'',
        email:'',
        phone:''
      });
    }
  },*/
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
