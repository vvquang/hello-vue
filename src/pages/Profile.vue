<template>
  <div class="profile">
    <h1>Profile</h1>
    <div>User Id: {{ $route.params.id }}</div>
    <div>Username: {{ username }}</div>
    <!-- <p>
      <router-link to="/profile/"{{ $route.params.id }}"/edit"
        >Edit profile</router-link
      >
    </p> -->
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      username: "vvquang",
      fullName: "Quang Vu Van"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
