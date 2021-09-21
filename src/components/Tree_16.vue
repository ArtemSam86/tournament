<template>
    <div class="container">
        <ul>
            <li v-for="i in 16">
                <input type="text" class="input-st-16">
            </li>
        </ul>
        <ul>
            <li v-for="i in 8">
                <input type="text" class="input-st-8">
            </li>
        </ul>
        <ul>
            <li v-for="i in 4">
                <input type="text" class="input-st-4">
            </li>
        </ul>
        <ul>
            <li v-for="i in 2">
                <input type="text" class="input-st-2">
            </li>
        </ul>
        <ul>
            <li v-for="i in 1">
                <input type="text" class="input-st-1">
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
        margin-bottom: 170px;
        margin-top: 170px;
        width: 100px;
        height: 25px;
        border-radius: 5px;
    }
    .input-st-4 {
        margin-bottom: 77px;
        margin-top: 77px;
        width: 100px;
        height: 25px;
        border-radius: 5px;
    }
    .input-st-8 {
        margin-bottom: 32px;
        margin-top: 32px;
        width: 100px;
        height: 25px;
        border-radius: 5px;
    }
    .input-st-16 {
        margin-bottom: 10px;
        margin-top: 10px;
        width: 100px;
        height: 25px;
        border-radius: 5px;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 8fr;
        grid-template-rows: 2fr;
        gap: 25px 25px;
        grid-auto-flow: row;
        justify-content: start;
        align-content: center;
        justify-items: start;
        align-items: center;
        grid-template-areas:
                ". . . . .";
        width: 100%;
        height: 70%;
    }
</style>
