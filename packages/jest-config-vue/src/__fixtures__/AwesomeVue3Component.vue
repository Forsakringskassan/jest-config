<script lang="ts">
import { defineComponent } from "vue";

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

<template>
    <div>
        <p>Hello {{ name }}!</p>
    </div>
</template>
