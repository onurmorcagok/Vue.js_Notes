<template>

  <div class="mt-5 px-1">
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li v-for="user in users" v-bind:key="user.id">
            <a @click="selectedUser = user" 
            class="text-info">{{ `${user.name} ${user.surname}` }}
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-6">
        <IdentityComponent v-if="selectedUser != null"
                           :name="selectedUser.name"
                           :surname="selectedUser.surname"
                           :driverLicenceObject="selectedUser.driverLicence" 
        />
      </div>

    </div>
  </div>

</template>

<script>
import IdentityComponent from "./components/IdentityComponent";

export default {
  name: "App",
  components: {
    IdentityComponent,
  },
  data() { // Data from database
    return {
      users: [
        {
          name: "Jennifer",
          surname: "Lopez",
          driverLicence: {
            photo:
              "https://randomuser.me/api/portraits/women/67.jpg",
            licenceID: "ABC1234",
            licenceType: "B,A/2",
            publishDate: "02.06.1995",
            expireDate: "02.06.2005"
          },
          address: {
            city: "",
            postCode: ""
          },
        },
        {
          name: "Michael",
          surname: "Jordan",
          driverLicence: {
            photo:
              "https://randomuser.me/api/portraits/men/45.jpg",
            licenceID: "ABC2345",
            licenceType: "B",
            publishDate: "13.09.1998",
            expireDate: "13.09.2008"
          },
          address: {
            city: "",
            postCode: ""
          },
        },
        {
          name: "David",
          surname: "Beckham",
          driverLicence: {
            photo:
              "https://randomuser.me/api/portraits/men/62.jpg",
            licenceID: "ABC5896",
            licenceType: "B,A/2",
            publishDate: "24.06.1999",
            expireDate: "24.06.2009"
          },
          address: {
            city: "",
            postCode: ""
          },
        }
      ],
      selectedUser: null
    };
  },
};
</script>

