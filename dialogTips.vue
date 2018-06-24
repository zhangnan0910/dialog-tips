<template>
    <transition name='toast'>
        <div class="tips" v-show='isActive'>
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name:'dialog-tips-item',
    data(){
        return{
            isActive:false,
            _timeout:2000
        }
    },
    props:{
        timeout:{
            type:Number
        }
    },
    mounted(){
        this.isActive = true;
        setTimeout(() => {
            this.isActive = false
        }, this.timeout || this._timeout);
    }
}
</script>

<style lang="less" scoped>
.tips{
    background: rgba(0,0,0,.7);
    color: #fff;
    height: 90/75rem;
    box-sizing: border-box;
    border-radius: 90/75rem;
    font-size: 32/75rem;
    line-height: 90/75rem;
    padding: 0 30/75rem;
    margin: 5px;
}
</style>
