<template>
    <div class="container">
        <button
            class="btn btn-warning btn--start-loading"
            @click="startLoading"
        >
            Запустить загрузку
        </button>
        <button
            class="btn btn-warning btn--finish-loading"
            @click="finishLoading"
        >
            Завершить загрузку
        </button>
    </div>
</template>

<script>
export default {
    name: 'TestComponent',
    methods: {
        startLoading() {
            this.setLoading(true);
        },
        finishLoading() {
            this.setLoading(false);
        },
    },
};
</script>