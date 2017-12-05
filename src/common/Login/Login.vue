<template>
    <div id="login_container" :style="winSize">
      <div class="form_container">
        <el-form label-position="left" label-width="0px" class="login_form"
                 :model='loginData'
                 :rules="rule_data"
                 ref='data'>
          <h3 class="title">江苏上微押运管理系统</h3>
          <br>
          <br>
          <el-form-item
            prop='UserName'>
            <el-input type="text" auto-complete="off" placeholder="账号"
                      v-model='loginData.UserName'></el-input>
          </el-form-item>
          <el-form-item
            prop='Password'>
            <el-input type="password" auto-complete="off" placeholder="密码"
                      v-model='loginData.Password'
                      @keyup.enter.native="_goLogin()"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button style="width:100%;" type="primary" @click='_goLogin()'>登&nbsp;&nbsp;录
            </el-button>
            <!-- <el-button>重置</el-button> -->
          </el-form-item>
          <el-form-item style="color: gray;">版权所有：江苏上微传感网科技工程有限公司 @2016-2017</el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'

  export default {
    name: '',
    components: {},
    data () {
      return {
        winSize: {
          width: '',
          height: ''
        },
        loginData: {
          UserName: '',
          Password: ''
        },
        rule_data: {
        }
      }
    },
    methods: {
      _goLogin () {
        this.CrudApi.addInfo({
          url: 'auth',
          data: this.loginData,
          callback: (res) => {
            console.log(res)
          }
        })
      },
      setWinSize () {
        let width = $(window).width()
        let height = $(window).height()
        this.winSize.width = `${width}px`
        this.winSize.height = `${height}px`
      }
    },
    created () {
      this.setWinSize()
      $(window).resize(() => {
        this.setWinSize()
      })
    }
  }
</script>

<style scoped lang="less">
  #login_container{
    position: relative;
    background-color: #1f2d3d;
    .form_container{
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      width:350px;
      height:380px;
      text-align: center;
      background-color: white;
      border-radius:1%;
      .login_form{
        padding:25px;
        .title{
          font-size:20px;
          font-weight:600;
        }
      }
    }
  }
</style>
