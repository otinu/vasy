<template>
  <div>
  <loading :active.sync="isLoading" :is-full-page="true"></loading>
  <div id="selectSets">
  <select v-model="selectedType">
    <option value="" disabled>Selecione um tipo</option>
    <option v-for="(type, index) in types"  :value="type" :key="index">{{type}}</option>
  </select>
  </div>
  <div>
    <select v-model="selectedCard" v-if="showCards">
    <option value="" disabled>Selecione uma carta</option>
    <option v-for="(card, index) in cards"  :value="card.id" :key="index">{{card.name}}</option>
  </select>
  </div>
      <card v-if="showCard" :card="card"></card>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
export default {
  name: "MagicList",
  components: {
    Card,
    Loading
  },
  data() {
    return {
      urlApi: 'https://api.magicthegathering.io/v1/',
      types: [],
      selectedType: '',
      showCards: false,
      showCard: false,
      cards: [],
      selectedCard: '',
      card: {},
      isLoading: false
    };
  },
  methods: {
    getTypes() {
      this.isLoading = true
      axios(`${this.urlApi}/types`)
      .then(({data}) => {
        this.types = data.types
        this.isLoading = false
      })
      .catch((error) => {
        this.onError(error)
      })
    },
    getCards() {
      this.showCards = false
      this.isLoading = true
      axios(`${this.urlApi}/cards?type=${this.selectedType}`)
      .then(({data}) => this.cards = data.cards)
      .then(() => {
        this.showCards = true
        this.showCard = false
        this.isLoading = false
        })
      .catch((error) => {
        this.onError(error)
      })
    },
    getCard() {
      this.showCard = false
      this.isLoading = true
      axios(`${this.urlApi}/cards/${this.selectedCard}`)
      .then(({data}) => this.card = data.card)
      .then(() => {
        this.showCard = true
        this.isLoading = false
      })
      .catch((error) => {
        this.onError(error)
      })
    },
    onError(error) {
        this.showCards = false
        this.showCard = false
        this.isLoading = false
        console.log(error.message)
    }
  },
  mounted() {
    this.getTypes()
  },
  watch: {
    'selectedType': 'getCards',
    'selectedCard': 'getCard'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
