import { defineComponent, reactive, ref } from 'vue';
// import { register, login } from '@/service/auth'
import * as auth from '@/service/auth'
import utils from '../../helpers/utils'
import { message } from 'ant-design-vue'

export default defineComponent({
    setup() {
        const logForm = reactive({
            account: '',
            password: '',
        })

        const l = async () => {
            if (logForm.account == '') {
                message.info("请输入帐户名")
            } else if (logForm.password == '') {
                message.error("请输入密码")
            } else {
                const result = await auth.login(logForm.account, logForm.password);
                // if (result.data.code === 0) {
                //     message.error("登陆失败")
                // } else {
                //     message.success("登陆成功")
                // }
                utils(result)
                    .success((data) => {
                        message.success(data.msg)
                    })
                    .fail((data) => {
                        message.fail(data.msg)
                    })
                    .finally(() => {
                        console.log('请求失败')
                    })
            }
        }

        const regForm = reactive({
            account: '',
            password: '',
            inviteCode: '',
        })

        const r = async () => {
            if (regForm.account == '') {
                message.info("请输入帐户名")
            } else if (regForm.password == '') {
                message.error("请输入密码")
            } else if (regForm.inviteCode == '') {
                message.error("请输入邀请码")
            } else {
                console.log(regForm.inviteCode)
                const result = await auth.register(regForm.account, regForm.password, regForm.inviteCode);
                if (result.data.code === 0) {
                    message.error("注册失败")
                } else {
                    message.success("注册成功")
                }
            }
        }



        return {
            regForm,
            logForm,
            r,
            l
        }
    }
})
