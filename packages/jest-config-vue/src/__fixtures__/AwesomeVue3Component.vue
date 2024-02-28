<template>
    <div>
        <p>Hello {{ name }}!</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue3";

export default defineComponent({
    name: "AwesomeVue3Component",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
});
</script>
