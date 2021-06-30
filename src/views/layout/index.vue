<template>
  <el-container>
    <el-header class="layout-header" height="50px">
      <router-link id="logo" tag="div" class="logo" to="/home">
        <span>Tide内容管理系统</span>
      </router-link>
      <div>
        <el-dropdown trigger="click">
          <el-button type="primary" size="medium" icon="el-icon-user-solid">
            {{ userName }}
            <i class="el-icon-caret-bottom"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <span style="display: block" @click="revisePwd">修改密码</span>
              </el-dropdown-item>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-aside></el-aside>
    <el-main>
      <router-view />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script setup>
import { ref } from "vue";

const logout = () => {};
const revisePwd = () => {};
const userName = ref(0);
</script>

<style scoped lang="scss">
@import "../../element-variables";

.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $--color-primary;
  color: white;

  .logo {
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  :deep(.el-dropdown) {
    overflow: hidden;
  }

  :deep(.el-button--primary) {
    height: 50px;
    background: #3b7cef;
    border-color: transparent;
    border-radius: 0;
  }

  :deep(.el-button:focus, .el-button:hover) {
    background: #326acd;
  }
}
</style>
