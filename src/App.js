import React from 'react';
import {Map,is} from 'immutable'

// let obj = Map({name:1,title:'imooc'})
// let obj1 = Map({name:1,title:'imooc'})
// console.log(is(obj,obj1))

// let obj = {name:1,other:{title:'imooc'}}
// let obj1 = {name:1,other:{title:'imooc'}}

// immutabla优点
//   1.减少内存使用
//   2.并发安全
//   3.降低项目复杂度
//   4.便于比较复杂数据，定制shouldComponentUpdate方便
//   5.时间旅行功能方便
//   6.函数式编程
// 缺点
//   1.学习成本
//   2.库的大小
//   3.对现有项目入侵太严重


// 深递归对比，复杂度太高，不可接受
// react建议只做浅层比较
function compareObj(obj1,obj2){
  if(obj1==obj2){
    return true
  }
  if(Object.keys(obj1).length!==Object.keys(obj2).length){
    return false
  }
  for(let k in obj1){
    if(obj1[k]!==obj2[k]){
      return false
    }
    return true
    // if(typeof obj1[k]=='object'){
    //   return compareObj(obj1[k],obj2[k])
    // }else if(obj1[k]!==obj2[k]){
    //   return false
    // }
  }
  return true
}

// console.log(obj==obj1)   //false
// console.log(compareObj(obj,obj1)) //true

// let obj = Map({
//   name: 'imooc',
//   course: Map({name:'react+redux'})
// })

// let obj1 =obj.set('name', 'woniu')
// console.log(obj.get('course')==obj1.get('course'))
// console.log(obj === obj1)


class App extends React.Component {
  constructor(){
    super()
    this.state=Map({
      num:1,
      title: 'imooc'
    })
    this.handleClick = this.handleClick.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
  }
  handleClick(){
    this.setState(this.state.set('num',this.state.get('num'+1)))
  }
  handleTitle(){
    // this.setState({
    //   title: this.state.title + '!'
    // })
  }
  render() {
    return (
      <div>
        <h2>App,{this.state.num}</h2>
        <button onClick={this.handleClick}>BtnNum</button>
        <button onClick={this.handleTitle}>BtnTitle</button>
        <Demo title={this.state.get('title')}></Demo>
      </div>
    );
  }
}

class Demo extends React.Component{
// class Demo extends React.PureComponent{
  shouldComponentUpdate(nextProps, nextState){
    // return is(nextProps,this.props)
    // if(compareObj(nextProps,this.props)){
    //   return false
    // }
    // return true
    // if(nextProps.title==this.props.title){
    //   return false
    // }
    return true
  }
  render(){
    // 每次父组件执行render，子组件传递的Props也会默认render
    console.log('demo render执行中')
    return <h2>I am Demo,{this.props.title}</h2>
  }
}

export default App;
