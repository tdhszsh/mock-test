<template>
  <div class="login-view">
    <div class="login-form-view">
      <h2 class="welcome-title">欢迎登录</h2>
      <el-form
        ref="loginForm"
        :model="loginData"
        :rules="formRules"
        label-width="100px"
        class="login-form"
      >
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="loginData.name"></el-input>
        </el-form-item>
        <el-form-item label="用户密码:" prop="password">
          <el-input v-model="loginData.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <div class="operation-btn">
        <el-button type="primary" @click="loginHandle">登录</el-button>
        <el-button @click="resetInput">重置</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-view {
  width: 100%;
  height: 100%;
  background: #9db9ef;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form-view {
    width: 30%;
    height: 40%;
    padding: 10px;
    border: solid 1px #dbdbdb;
    border-radius: 12px;
    background: #ffffff;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .welcome-title {
      margin-bottom: 10px;
    }
    .login-form {
      width: 80%;
      margin: 20px 0;
      // flex: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }
    .operation-btn {
    }
  }
}
</style>
<script>
// const Mock = require('mockjs');
import Mock from 'mockjs';
import axios from '@/api/axios.js';
export default {
  name: 'login',
  data() {
    return {
      loginData: {
        name: '',
        password: ''
      },
      formRules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 6, max: 10, message: '用户名长度为6~8个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度为6~12个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    loginHandle() {
        // Mock.mock('http://localhost:8080/test/loginData', {
        //   "loginResponse|1":[{
        //     "status": 200,
        //     "statusText": 'OK',
        //     "result": [
        //       {
        //         "exist": true,
        //         "name": '胡万三'
        //       }
        //     ]
        //   }]
        // })
        // axios.get('/test/loginData', 'aaa', (res) => {
        //     console.log("1111异步请求返回的模拟数据为",res);
        // });
        this.$router.push('/index');
    },
    resetInput() {
      this.loginData = {
        name: '',
        password: ''
      };
    }
  },
  mounted() {}
};
</script>
