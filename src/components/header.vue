<template>
    <div id="headerBook">
        <div id="message">
            <span>
                 {{message}}
            </span>
        </div>
        <div id="sysFunction">
            <router-link to="/login">
                    <el-button>系统登陆</el-button>
            </router-link>
            <router-link to="/work">
                    <el-button>工作中心</el-button>
            </router-link>
            <router-link to="/study">
                    <el-button>学生信息</el-button>
            </router-link>
            <router-link to="/Book">
                    <el-button>图书信息</el-button>
            </router-link>
            <router-link to="/cnnode">
                <el-button>node论坛</el-button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"header",
    data() {
        return {
            message:"图书管理系统"
        }  
    },
}
</script>
<style scoped>
    #header{
        background-color: red;
    }
    #message{
        width: 400px;
        /* background-color: blue; */
        color:#ffffff;
        font-size: 20px;
        height: 60px;
        font-weight: border;
        line-height: 60px;
        display: inline-block;
    }
    #sysFunction {
            /* background-color: purple; */
            display: inline-block;
            height: 60px;
            float: right;
        }
    #sysFunction>.el-button {
        background-color: #0a9588;
        color: white;
        border-color: #0a9588;
        margin-top: 10.2px;
    }
    
</style>

