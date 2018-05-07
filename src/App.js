import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      num:1,
      title: 'imooc'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
  }
  handleClick(){
    this.setState({
      num: this.state.num + 1
    })
  }
  handleTitle(){
    this.setState({
      title: this.state.title + '!'
    })
  }
  render() {
    return (
      <div>
        <h2>App,{this.state.num}</h2>
        <button onClick={this.handleClick}>BtnNum</button>
        <button onClick={this.handleTitle}>BtnTitle</button>
        <Demo title={this.state.title}></Demo>
      </div>
    );
  }
}

// class Demo extends React.Component{
class Demo extends React.PureComponent{
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.title==this.props.title){
  //     return false
  //   }
  //   return true
  // }
  render(){
    // 每次父组件执行render，子组件传递的Props也会默认render
    console.log('demo render执行中')
    return <h2>I am Demo,{this.props.title}</h2>
  }
}

export default App;
