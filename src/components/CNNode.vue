<template>
  <div id="cnnoderWrapper">
      <div>
          <span>cnnode论坛</span>
      </div>
      <div>
          <li v-for="(value,index2) in this.topicArr" :key = "index2">
              
              <span>
                  <img id = "avator" :src="value.author.avatar_url">
              </span>
              <span>{{value.title}}</span>
          </li>
      </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
    data(){
        return{
            topicArr:[]
        }
    },
    //生命周期函数
    beforCreate(){
        // console.log("this is before")
    },
    created(){
        // console.log("this is vue")
        let that = this;
        Axios.get('https://cnodejs.org/api/v1/topics').then(function(response){
            // console.log(response)
            if(response.data.success){
            that.topicArr = response.data.data
            }
        })
    }
}
</script>

<style>
    #avator{
        width: 20px;
        height: 20px;
    }
</style>