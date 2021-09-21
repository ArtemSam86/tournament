<template>
    <div class="container">
        <ul>
            <li v-for="i in 32">
                <input type="text" class="input-st">
            </li>
        </ul>
        <ul>
            <li v-for="i in 16">
                <input type="text" class="input-st">
            </li>
        </ul>
        <ul>
            <li v-for="i in 8">
                <input type="text" class="input-st">
            </li>
        </ul>
        <ul>
            <li v-for="i in 4">
                <input type="text" class="input-st">
            </li>
        </ul>
        <ul>
            <li v-for="i in 2">
                <input type="text" class="input-st">
            </li>
        </ul>
        <ul>
            <li v-for="i in 1">
                <input type="text" class="input-st">
            </li>
        </ul>
    </div>
</template>

<script>
    // import GridStruct from '../src/store/GridStruct'
    // //import {ref} from 'vue';
    // export default {
    //     components: GridStruct,
    //
    // }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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

    .input-st {
        margin-bottom: 5px;
        width: 150px;
        height: 30px;

    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 100px;
        grid-auto-flow: row;
        justify-content: start;
        justify-items: start;
        align-items: center;
        grid-template-areas: ". . . . . . . . . . .";
        width: 100%;
        height: 50%;
    }


</style>
