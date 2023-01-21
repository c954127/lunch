<script setup>
</script>
<template>
    <q-layout view="hHh lpR fFf">
        <q-header  style="background-color:#ffffff;filter: drop-shadow(0px 6px 6px rgba(155, 113, 0, 0.1));" height-hint="98">
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
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<style lang="scss">
  .logo {
    width: 78px;
    margin:10px 20px;
  }
  .balance {
    font-size: 20px;
    color:#644818
  }
</style>


