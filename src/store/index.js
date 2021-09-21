import { createStore } from 'vuex';
import Players from '../store/ListPlayer';
import {Player, Node, BinaryTree} from '../store/BinaryTree';



export default createStore({
  state: {
    players: [],
    playersToInput: [],
    playerToInput: [],
    binaryTree: new BinaryTree(),
    node: new Node()
  },
  getters: {
    getPlayers: state => {
      state.players = Players;
      return state.players;
    },
    getPlayersToInput: state => {
      //console.log(state.playersToInput)
      return state.playersToInput;
    },
    getPlayerToInput: state => {
      //console.log(state.playersToInput)
      return state.playerToInput;
    }
  },
  mutations: {
    ADD_TO_INPUT(state, player) {
      //console.log(player)
      const newPlayer = new Player(player.toString(), player.toString(), 0)
      state.playersToInput.push(newPlayer)
      state.playerToInput.push(newPlayer.name)
      console.log(state.playerToInput)
    },
  },
  actions: {
    async addToInput({commit}, player) {
      commit('ADD_TO_INPUT', player)
    }
  },
  modules: {
  }
})
