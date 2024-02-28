<template>
    <div>
        <p>Hello {{ name }}!</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue2";

export default Vue.extend({
    name: "AwesomeVue2Component",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
});
</script>
