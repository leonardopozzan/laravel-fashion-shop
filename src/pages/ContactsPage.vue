<template>
    <ContactComponent></ContactComponent>
    <ChatComponent />
    <ScrollTopComponent />
</template>

<script>

import ChatComponent from '../components/ChatComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import ScrollTopComponent from '../components/ScrollTopComponent.vue';


export default {
    name: 'ContactsPage',

    components: { ContactComponent, ChatComponent , ScrollTopComponent}
}
</script>

<style lang="scss" scoped>
.test {
    height: 100vh;
}
</style>