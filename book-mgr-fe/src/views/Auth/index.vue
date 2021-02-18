<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <div class="title">
        <img
          src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
        />
        <h3>图书管理系统</h3>
      </div>
    </div>

    <div class="form">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="登陆">
          <div class="item">
            <a-input placeholder="帐户" size="large" v-model:value="logForm.account"></a-input>
          </div>
          <div class="item">
            <a-input placeholder="密码" size="large" v-model:value="logForm.password"></a-input>
          </div>
          <div class="item">
            <a href>忘记密码</a>
          </div>
          <a-button type="primary" @click="l">登陆</a-button>
        </a-tab-pane>

        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input placeholder="帐户" size="large" v-model:value="regForm.account"></a-input>
          </div>
          <div class="item">
            <a-input placeholder="密码" size="large" v-model:value="regForm.password"></a-input>
          </div>
          <div class="item">
            <a-input placeholder="邀请码" size="large" v-model:value="regForm.inviteCode"></a-input>
          </div>
          <a-button type="primary" @click="r">注册</a-button>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style src="./index.scss" lang="scss" scoped>
</style>
