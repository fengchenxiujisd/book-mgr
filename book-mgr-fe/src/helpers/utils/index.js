import { message } from 'ant-design-vue'

export default (response, authShowErrorsMsg = true) => {
    const { data } = response;
    if (data.code == 0 && authShowErrorsMsg) {
        message.error(data.msg);
    }

    return {
        success(cb) {
            if (data.code !== 0) {
                cb(data, response)
            }
            return this;
        },
        fail(cb) {
            if (data.code === 0) {
                cb(data, response);
            }
            return this;
        },
        finally(cb) {
            cb(data, response);

            return this;
        }
    }
}
