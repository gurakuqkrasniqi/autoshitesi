<template>
  <div class="wrapper">
    <div class="container">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th class="table-dark">Kodi</th>
              <th class="table-dark">Emri</th>
              <th class="table-dark">Mbiemri</th>
              <th class="table-dark">Tel</th>
              <th class="table-dark">Viber/Whatsapp</th>
              <th class="table-dark">Adresa</th>
              <th class="table-dark">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in paginatedclients" :key="client.id">
              <td style="vertical-align: middle">
                {{ client.code }}
              </td>
              <td style="vertical-align: middle">{{ client.firstname }}</td>
              <td style="vertical-align: middle">{{ client.lastname }}</td>
              <td style="vertical-align: middle">{{ client.phone }}</td>
              <td style="vertical-align: middle">{{ client.phone2 }}</td>
              <td style="vertical-align: middle">{{ client.address }}</td>
              <td style="vertical-align: middle">{{ client.email }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="100%">
                <div class="pagination">
                  <div
                    v-for="client in Math.ceil(clients.length / perPage)"
                    :key="client"
                    class="page"
                    :class="this.page == client ? 'active' : ''"
                    @click="this.page = client"
                  >
                    {{ client }}
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
  </Teleport>
</template>

<script>
import clientsRef from "../firebase";
import { getDocs } from "firebase/firestore";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      clients: [],
      filteredclients: [],
      client: {},
      editCityId: null,
      docRef: null,
      perPage: 25,
      page: 1,
      productFilter: "",
    };
  },
  methods: {
    async getclients() {
      let clientsSnapshot = await getDocs(clientsRef);
      let clients = [];
      clientsSnapshot.forEach((client) => {
        let clientData = client.data();
        clients.push(clientData);
      });
      this.clients = clients;
      this.filteredclients = clients;
    },
    previousPage() {
      if (this.page > 1) this.page -= 1;
    },
    nextPage() {
      if (this.page < Math.ceil(this.clients.length / this.perPage))
        this.page += 1;
    },
  },
  created() {
    this.getclients();
  },
  computed: {
    paginatedclients() {
      return this.filteredclients.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  // watch: {
  //   productFilter: function (val) {
  //     this.filteredclients = this.clients.filter(
  //       (x) => val == "" || x.product === val
  //     );
  //   },
  // },
};
</script>

<style lang="scss" scoped>
$gray0: #f6f8ff;
$primary: #636983;
$transition: all 0.2s;

.title {
  text-align: center;
  padding: 40px 0;
  font-size: 40px;
  font-weight: 300;
  color: $primary;
}

.wrapper {
  background-color: $gray0;
  width: 100%;
  min-height: 70vh;

  .line {
    width: 50%;
    margin: 50px auto 0 auto;
    height: 1px;
    background-color: #c3d2e3;
  }
}

.table {
  width: 60%;
  margin: 1.5rem auto;

  table {
    width: 100%;
    font-size: 16px;
    background-color: white;
    border-radius: 10px;

    thead {
      background-color: #f4f7f8;
      border-spacing: 0;
      td {
        font-size: 18px;
        font-weight: 600;
        color: #666;
        padding: 10px;

        &:nth-child(1) {
          border-radius: 10px 0 0 0;
        }
        &:nth-last-child(1) {
          border-radius: 0 10px 0 0;
        }
      }
    }
    tbody {
      tr {
        transition: $transition;

        td {
          padding: 10px;
          color: #666;
          text-align: center;
        }
        &:hover {
          transform: translateY(-2px);
          background-color: #ededed1c;
        }
      }
    }
    tfoot {
      tr td {
        padding: 3px 10px;
        background-color: #f4f7f8;
        text-align: right;
      }
    }
  }
}

.pagination {
  display: flex;
  position: relative;
  right: 10px;
  justify-content: flex-end;
  gap: 5px;

  .page {
    width: 10px;
    height: 30px;
    flex-basis: 30px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 6px;
    background: #f0f3f4;
    border-radius: 7px;
    color: $primary;
    cursor: pointer;

    &.active {
    }

    &:hover {
    }
  }
}

@media (max-width: 700px) {
  .table {
    width: 90%;
  }
}
</style>
