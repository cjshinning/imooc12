import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      num:1,
      title: 'imooc'
    }
    console.log('构造函数执行')
    this.handleClick = this.handleClick.bind(this)
    this.item = {react:'redux'}
  }
  handleClick(){
    this.setState({
      num: this.state.num + 1
    })
    // console.log('xx')
  }
  render() {
    // 每次渲染App bind都会执行一次
    console.log('render执行中')
    // const item = {react:'redux'}
    return (
      <div>
        <h2>App,{this.state.num}</h2>
        <button onClick={this.handleClick.bind(this)}>Btn1</button>
        <button onClick={()=>this.handleClick()}>Btn2</button>
        <button onClick={this.handleClick}>Btn2</button>
        <p>每一次都生成新的对象传递</p>
        {/* <Demo style={{color:'red'}} name={this.item}></Demo> */}
        {/* <Demo {...this.state}></Demo> */}
        <Demo title={this.state.title}></Demo>
      </div>
    );
  }
}

class Demo extends React.Component{
  render(){
    return <h2>I am Demo</h2>
  }
}

export default App;
