<template>
    <!-- <div>
        <el-input v-focus="true"></el-input>
        <p data-num="22"></p>
        <el-input v-model="scene"></el-input>
        <div @mouseup="getWord($event)">我是要被鼠标选中的文字</div>
        <div>{{word}}</div>
        <button @click="switchLang()">切换语言</button>
        <h3>{{$t("message.hello")}}</h3>
    </div>-->
    <div class="container">
        <div class="left">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                <el-submenu index="index1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <template>
                        <el-menu-item index="index1_2">选项2</el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item index="index2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="index3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right">
            <router-view class="content"></router-view>
            <!-- <span class="switch">
                <el-button><i class="el-icon-caret-bottom"></i></el-button>
            </span>
            <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
            </el-switch> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "home",
  // directives: {
  //     focus: {
  //         inserted(el, {value,modifiers}) {
  //             // console.log(el)
  //             // console.log(binding)
  //             // console.log(vNode)
  //             // console.log(el.children)
  //             console.log(value)
  //             console.log(modifiers)
  //             el.children[0].focus()
  //         }
  //     }
  // },
  watch: {
    scene: {
      handler(newValue) {
        console.log(newValue);
      }
    },
    value3: {
        handler (newValue) {
            console.log(newValue)
            console.log(this.value3)
        }
    }
  },
  mixins: [
    {
      created() {
        console.log(1);
        this.test();
      },
      methods: {
        test() {
          console.log(3);
        }
      }
    }
  ],
  data() {
    return {
      scene: "",
      word: "",
      isCollapse: true,
      value3: true
    };
  },
  methods: {
    getWord(event) {
      console.log(event.target);
      let txt = null;
      if (window.getSelection) {
        // FF、 chrome
        txt = window.getSelection();
      } else if (document.getSelection) {
        // 等价于 window.getSelection
        txt = document.getSelection();
      } else if (document.selection) {
        // IE
        txt = document.selection.createRange().text;
      }
      console.log(txt.toString());
    },
    switchLang() {
      console.log(this.$i18n.locale);
      this.$i18n.locale = "en";
    },
    handleOpen(key, keyPath) {
        this.$router.push({ path: `/${key}` })
        console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath,11);
      }
  },
  created() {
    console.log(132)
    axios.get(`/api/new_audit/94`, {params: {
      base_id: 1,
        module: 'QA'
    }}).then((data) => {
      console.log(data.data.data)
        
        // this.editInfo = {
          //     audit_type: data.audit_type,
        //     new_data: data.new_data,
        //     origin_data: data.origin_data
        // }
    //  const vimdiffpatch = require('vimdiffpatch')
    //  const patch = vimdiffpatch(data1.origin_data.similar_question, data1.new_data.similar_question)
    //  console.log(patch)

        // var diff = require("list-diff2")
        // var newList = data1.new_data.similar_question
        // var oldList = data1.origin_data.similar_question
        // var moves = diff(oldList, newList, 'question')
        // console.log(moves)

        // var diff = require('arr-diff');

        // var a = data1.new_data.similar_question;
        // var b = data1.origin_data.similar_question;

        // console.log(diff(a, b))

        // var arrayDiff = require('arraydiff');

        // var before = data1.origin_data.similar_question;
        // var after = data1.new_data.similar_question;

        // var diff = arrayDiff(after, before);
        // console.log(diff)


        // var  arrayDiff = require('simple-array-diff');
        // var before = data1.origin_data.similar_question;
        // var after = data1.new_data.similar_question;
        // console.log(before)
        // console.log(after)
        // var result = arrayDiff(
        //     [1,5,3,2,4],
        //     [4,3,2,1],'question'
        // );
        // console.log(result);
        let data1 = data.data.data
        var diff = require('array-diff')({unique: true, compress: true})
        // // var before = data1.origin_data.similar_question;
        // var after = data1.new_data.similar_question;
        var before = [], after = []
        data1.origin_data.similar_question.filter( val => {
          before.push(val.question)
        })
        data1.new_data.similar_question.filter( val => {
          after.push(val.question)
        })
        // var before =  ['webot', 'webot1', 'Github', '123']
        // var after =   [ 'Github', '124']
        console.log(before)
        console.log(after)
        var result = diff(before, after)
        console.log(result)

        let origin_arr = [...before]
        let new_arr = [...after]

        result.filter( item => {
          if(item[0] == '-') {
            let index = origin_arr.indexOf(item[1][0])
            for(let i = 0,length = item[1].length; i < length; i++) {
              new_arr.splice(index, 0, '')
            }
          } else if (item[0] == '+') {
            let index = new_arr.indexOf(item[1][0])
            for(let i = 0,length = item[1].length; i < length; i++) {
              origin_arr.splice(index, 0, '')
            }
          }
        })
        console.log(origin_arr)
        console.log(new_arr)

        // var diff = require('array-diff')({compress: true})
        // var before =  [1, 2, 3, 4, 5]
        // var after =   [1, 2, 3, 4, 7, 5]
        // var result = diff(before, after)
        // console.log(result)
    })
    // let a = ['webot', 'Github']
    // let b = ['我来了', '我是来测试的', 'Github']
    // const patch = vimdiffpatch(a, b)
    //  console.log(patch)

    //-------------------------------------------------

    // var diff = require("list-diff2")
    // var oldList = [1,5,23,36,26]
    // var newList = [23,5,26,3,1]
    // var moves = diff(oldList, newList, '')
    // console.log(moves)
  }
};
</script>

<style>
/* .navLeft{
    height: 100%;
} */
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.left {
  height: 100%;
}
.right {
  flex: 1;
}
i {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.el-menu-vertical-demo {
    width: 200px;
    height: 100%;
}
.el-button {
    font-size: 12px;
    padding: 2px;
    border-color: #a7aab1;
    border-radius: 50%;
    color: #a7aab1;
    transition: transform .2s;
}
</style>
