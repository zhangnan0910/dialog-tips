
### 功能 
    提示信息，自动隐藏

# 使用
    //入口页面引入文件 
    import Dialog from '路径'

    //注册插件
    Vue.use(Dialog,{
        timeout:2000
    })
    
    tepmlate
        <DialogTips></DialogTips>
        <DialogTips ref='Tips'></DialogTips>

    js
        1. this.$toastBus.$emit('toast','提示信息(msg)')
        2. this.$refs.name.active('提示信息')

    

    

