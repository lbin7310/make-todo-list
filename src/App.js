import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Right_todos from './Right-todos';
import Left_todos from './Left-todos';
//import { fakeData } from './fakeData';
import './style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      keyword: '',
      rightTodos: [
        {
          content: '',
          listName: '',
          allList: '할 일 목록',
          check: <input className="checkbox" type="checkbox"></input>
        }
      ],
      leftTodos: [
        {
          subject: '할 일 목록',
        }
      ],
      allLists: [],
      todoStyle: 'black'
    }
  }
  
  handleClickSubject(){ // left의 제목을 추가
    let input = document.querySelector('.left-input')
    let newSubject = { subject: ''};

    if (input.value !== ''){
      newSubject.subject = input.value;

      this.listName = input.value;
      this.state.leftTodos.push(newSubject);
      this.setState({
        leftTodos: this.state.leftTodos
      })
      input.value = "";
    }
  }

  handleClickContent(){ // + 버튼을 누르게 되면 content생성
    let rightInput = document.querySelector('.right-input')
    let newContent = { content: '' , check: this.check};

    if(rightInput.value !== ''){
      newContent.content = rightInput.value;
      newContent.listName = this.listName;
      newContent.allList = this.allList;
      newContent.style = this.state.todoStyle

      this.state.rightTodos.push(newContent);
      this.state.allLists.push(newContent);

      this.setState({
        rightTodos: this.state.rightTodos,
        allLists: this.state.allLists
      })
      rightInput.value = "";
    }
  }

  handleKeyPress(e){ // 엔터키를 누르게 되면 내용 추가.
    let rightInput = document.querySelector('.right-input')
    let newContent = { content: '' ,check: this.check };

    if(rightInput.value !== '' && e === 13){

      newContent.content = rightInput.value;
      newContent.listName = this.listName;
      newContent.allList = this.allList;
      newContent.style = this.state.todoStyle

      this.state.rightTodos.push(newContent);
      this.state.allLists.push(newContent);

      this.setState({
        rightTodos: this.state.rightTodos,
        allLists: this.state.allLists
      })
      rightInput.value = "";
    }
  }
  

  clickList(e) { // 클릭하면 해당 목록의 todos가 출력됨.
    let collectTodos = [];
    if( e.target.innerHTML === '할 일 목록' ){
      this.setState({
        rightTodos: this.state.allLists
      })
    } else {
      for (let i = 0; i < this.state.allLists.length; i++){
        if(this.state.allLists[i].listName === e.target.innerText){
          collectTodos.push(this.state.allLists[i]);
        }
      }
      this.setState({
        rightTodos: collectTodos
      })
    }
  }
  
  handleMakeSubject(e){ // 엔터키를 눌르면 목록이 만들어짐
    let input = document.querySelector('.left-input')
    let newSubject = { subject: ''};

    if (input.value !== '' && e === 13){
      newSubject.subject = input.value;

      this.listName = input.value;
      this.state.leftTodos.push(newSubject);
      this.setState({
        leftTodos: this.state.leftTodos
      })
      input.value = "";
    } 
  }
  
  inputEsc_rightInput(e) {
    let rightInput = document.querySelector('.right-input')
    return e === 27 ? rightInput.value = '' : '';
  }

  inputEsc_leftInput(e) {
    let input = document.querySelector('.left-input')
    return e === 27 ? input.value = '' : '';
  }

  clickCheckBox(e){ // todo를 누르면 색이 변한다. 
    let cloneInfo = this.state.rightTodos.slice();

    cloneInfo[e].style = cloneInfo[e].style === 'black' ? 'green' : 'black'
    this.setState({
      rightTodos: cloneInfo
    })
  }

  handleSearch(e){ // todos를 검색합니다.
    this.state.keyword = e.target.value
    this.state.rightTodos = this.state.allLists.filter(
      (obj) => (obj.content.indexOf(this.state.keyword) > -1)
    )

    this.setState({
      rightTodos: this.state.rightTodos
    })
    
  }

  render() {
    return (
      <div className="App-todoList">
        Start
        <div className="LR">
          <div className="left">
            <div className="Search_Bar">
              <input type="search" placeholder="검색" name="keyword"
              onChange={this.handleSearch.bind(this)}></input>
            </div>
            <Left_todos leftSubjects={this.state.leftTodos} 

            subjectMake={this.handleClickSubject.bind(this)} 

            onClickList={this.clickList.bind(this)}

            keyPressSubject={this.handleMakeSubject.bind(this)}

            escPress={this.inputEsc_leftInput.bind(this)}
            />
          </div>



          <Right_todos todos={this.state.rightTodos} 

          contentMake={this.handleClickContent.bind(this)}

          keyContentMake={this.handleKeyPress.bind(this)}

          escKeyPress={this.inputEsc_rightInput.bind(this)} 

          clickBox={this.clickCheckBox.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
