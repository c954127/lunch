<script setup>
    import { ref } from 'vue'

    const menuOpen = ref(false);
    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
    }
</script>
<template>
    <q-layout view="hHh lpR fFf">
        <q-header v-if="!$q.screen.xs" class="desktop header" height-hint="98">
            <q-toolbar>
                <img src="../assets/image/lunch-logo.png" class="logo">
                <q-toolbar-title>
                    <q-tabs indicator-color="orange" no-caps align="left">
                        <q-route-tab  to="/home" label="Home" />
                        <q-route-tab to="/meal" label="Meal" />
                        <q-route-tab to="/explore" label="Explore" />
                        <q-route-tab to="/wallet" label="Wallet" />
                    </q-tabs>
                </q-toolbar-title>
                <label class="balance q-mr-md">
                    Balance: $350
                </label>
                <q-btn   class="balance q-mr-md" flat round color="#32240C" icon="notifications" />
                <q-btn round>
                    <q-avatar size="48px">
                        <img src="../assets/image/user.jpg">
                    </q-avatar>
                </q-btn>
            </q-toolbar>
        </q-header>
        <q-header v-else class="mobile header">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleMenu" />
                <img src="../assets/image/lunch-logo.png" class="mobile-logo">
                <q-space></q-space>
                <label class="balance q-mr-md">
                    Balance: $350
                </label>
            </q-toolbar>
        </q-header>
        <q-drawer v-model="menuOpen" side="left" elevated>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<style lang="scss">
  .header {
      background-color:#ffffff;
      filter: drop-shadow(0px 6px 6px rgba(155, 113, 0, 0.1));
  }
  .logo {
        width: 78px;
        margin:10px 20px;
  }
  .mobile-logo {
    width: 50px;
  }
  .balance {
      font-size: 20px;
      color:#644818
  }


</style>


