<template>
    <div class="container">
        <div>
            <ul>
                <li v-for="i in 2">
                    <input type="text" class="input-st-2"
                           v-on:drop="onDrop($event, i)"
                           v-on:dragenter.prevent
                           v-on:dragover.prevent
                    >
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="i in 1">
                    <input type="text" class="input-st-1"
                           v-on:drop="onDrop($event)"
                           v-on:dragenter.prevent
                           v-on:dragover.prevent
                           v-model="playerToInput[0]"
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    //import players from "../store/ListPlayer";

    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                //inputData: ''
            }
        },
        setup() {

            // const onDrop = (event, index) => {
            //     const player = event.dataTransfer.getData('playerName')
            //     //this.$store.dispatch('addToInput', player)
            //     //console.log(player, index)
            //     //this.addToInput(player);
            // }
            //
            // return { onDrop }
        },
        methods: {
            onDrop(event) {
                const player = event.dataTransfer.getData('playerName')
                this.$store.dispatch('addToInput', player)
                //this.inputData = player;
                //console.log(player)
            }
        },
        computed: {
            ...mapGetters({
                players: 'getPlayers',
                playersToInput: 'getPlayersToInput',
                playerToInput: 'getPlayerToInput'
            }),
        },

    }
</script>

<style scoped>
    h1 {
        color: #eaecef;
    }

    p {
        color: #0161f1;
    }

    li {
        list-style-type: none; /* Убираем маркеры */
    }

    ul {
        margin-left: 0; /* Отступ слева в браузере IE и Opera */
        padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
    }

    .prokrutka {
        height: 500px; /* высота нашего блока */
        width: 200px; /* ширина нашего блока */
        background: #fff; /* цвет фона, белый */
        border: 1px solid #a59999; /* размер и цвет границы блока */
        overflow-x: scroll; /* прокрутка по горизонтали */
        overflow-y: scroll; /* прокрутка по вертикали */
    }

    .input-st-1 {
        width: 100px;
        height: 25px;
        border-radius: 5px;

    }
    .input-st-2 {
        margin-bottom: 10px;
        margin-top: 10px;
        width: 100px;
        height: 25px;
        border-radius: 5px;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 11fr;
        grid-template-rows: 2fr;
        gap: 25px 25px;
        grid-auto-flow: row;
        justify-content: start;
        align-content: center;
        justify-items: start;
        align-items: center;
        grid-template-areas: ". .";
        width: 100%;
        height: 70%;
    }
</style>
