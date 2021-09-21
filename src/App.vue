<template>
    <div>
        <div>
            <input v-model.number="inputData" type="text" placeholder='2,4,8,16,32,64,128,256' class="input-st">
            <button class="btn">Random</button>
        </div>
        <div v-if="parseInt(inputData) === 2">
            <Tree_2/>
        </div>
        <div v-else-if="parseInt(inputData) === 4">
            <Tree_4/>
        </div>
        <div v-else-if="parseInt(inputData) === 8">
            <Tree_8/>
        </div>
        <div v-else-if="parseInt(inputData) === 16">
            <Tree_16/>
        </div>
        <div v-else-if="parseInt(inputData) === 32">
            <Tree_32/>
        </div>
        <div v-else-if="parseInt(inputData) === 64">
            <Tree_64/>
        </div>
        <div v-else-if="parseInt(inputData) === 128">
            <Tree_128/>
        </div>
        <div v-else-if="parseInt(inputData) === 256">
            <Tree_256/>
        </div>
        <div v-else>
            <h3>Не корректное значение</h3>
        </div>
        <div class="scroll-drop-zone">
            <ul>
                <li>
                    <p v-for="player in players"
                       v-bind:key="players.id"
                       draggable="true"
                       v-on:dragstart="startDrag($event, player)"
                    >
                        {{player.name}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import GridStruct from './store/BinaryTree'
    import Tree_2 from '../src/components/Tree_2'
    import Tree_4 from '../src/components/Tree_4'
    import Tree_8 from '../src/components/Tree_8'
    import Tree_16 from '../src/components/Tree_16'
    import Tree_32 from '../src/components/Tree_32'
    import Tree_64 from '../src/components/Tree_64'
    import Tree_128 from '../src/components/Tree_128'
    import Tree_256 from '../src/components/Tree_256'
    //import {ref} from 'vue';
    import {mapGetters} from "vuex";
    export default {
        setup() {
            const startDrag = (event, player) => {
                //console.log(player)
                event.dataTransfer.dropEffect = 'move';
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('playerName', player.name)
            }

            return {
                startDrag
            }
        },
        data() {
            return {

                inputData: null,
                correctData: '2,4,8,16,32,64,128,256'
            }
        },
        components: {
            GridStruct,
            Tree_2,
            Tree_4,
            Tree_8,
            Tree_16,
            Tree_32,
            Tree_64,
            Tree_128,
            Tree_256,
        },
        computed: {
            ...mapGetters({
                players: 'getPlayers'
            }),
        },

    }
</script>

<style scoped>
    .input-st {
        margin: 5px;
        width: 150px;
        height: 25px;
        border-radius: 5px;
    }

    h1, h2, h3, h4, h5 {
        color: #eaecef;
    }
    .scroll-drop-zone {
        height: 200px; /*!* высота нашего блока *!*/
        width: 200px; /*!* ширина нашего блока *!*/
        background: #fff; /*!* цвет фона, белый *!*/
        border: 1px solid #a59999; /*!* размер и цвет границы блока *!*/
        overflow-x: scroll; /*!* прокрутка по горизонтали *!*/
        overflow-y: scroll; /*!* прокрутка по вертикали *!*/
    }
    li {
        list-style-type: none; /* Убираем маркеры */
    }

    ul {
        margin-left: 0; /* Отступ слева в браузере IE и Opera */
        padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
    }
</style>
