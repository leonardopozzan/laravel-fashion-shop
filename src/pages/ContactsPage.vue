<template>
    <ContactComponent></ContactComponent>
</template>

<script>

import ContactComponent from '../components/ContactComponent.vue';

export default {
    name: 'ContactsPage',

    components: { ContactComponent, }
}
</script>

<style lang="scss" scoped>
.test {
    height: 100vh;
}
</style>