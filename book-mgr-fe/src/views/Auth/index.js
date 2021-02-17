import { defineComponent, reactive, ref } from 'vue';
// import { register, login } from '@/service/auth'
import * as auth from '@/service/auth'

export default defineComponent({
    setup() {
        const logForm = reactive({
            account: '',
            password: '',
        })

        const l = () => {
            auth.login(logForm.account, logForm.password);
        }

        const regForm = reactive({
            account: '',
            password: ''
        })

        const r = () => {
            auth.register(regForm.account, regForm.password);
        }



        return {
            regForm,
            logForm,
            r,
            l
        }
    }
})
