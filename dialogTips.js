/**
 * 功能 ：提示信息，自动隐藏
 * 使用方法：入口页面引入注册
 * 
 *  1：注册全局组件
 *  @event toast, 显示提示信息 
 *  @instance $toastBus, toast组件专用的全局bus
 * 
 */
import './dialogTips.css'
import DialogTipsItem from './dialogTips.vue'
let dialog = {
    //instll参数于use里的参数对应
    install(Vue,options){
        const toastBus = new Vue({});

        Object.defineProperty(Vue.prototype, "$toastBus", {
            value: toastBus
        })

        Vue.component('DialogTips', {
            
            template:`
                <div class="toast">
                    <DialogTipsItem v-for="(x,i) in msg" :key="i.toString()" :timeout="options.timeout">{{x}}</DialogTipsItem>                 
                </div>
            `,
            data() {
                return {
                    msg: [],
                    options
                }
            },
            components: {
                DialogTipsItem
            },
            methods: {
                active(msg, options) {
                    if (options) {
                        this.timeout = options.timeout
                    }

                    this.msg.push(msg);
                }
            },
            mounted() {
                toastBus.$on('toast', (msg) => {
                    this.active(msg)
                })
            }
        })
    }
}
export default dialog
