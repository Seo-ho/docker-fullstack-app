import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

   // useEffect(() => {
  // 여기서 데이터베이스에 있는 값을 가져온다.
  //      axios.get('/api/values')
  //         .then(response => {
  //             console.log('response', response)
  //              setLists(response.data)
  //          })
  //  }, [])


  useEffect(() => {
    //여기서 데이터베이스에 있는 값을 가져온다.
    axios.get('/api/values')
      .then(response => {
        console.log('response', response)
        setLists(response.data)
      })
  }, [])
  /*
    const [lists, setLists] = useState([])
    const [value, setValue] = useState("")

    const changeHandler = (event) => {
    setValue(event.currentTarget.value)
    }
  */
    const [lists, setLists] = useState([])
    const [value, setValue] = useState("")

  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  }
  /*
    const submitHandler = (event) => {
        event.preventDefault();
    // 여기서 맨뒤 value는 위에서 useState에서 value라고 해줫기에 그 변수 쓴거임.
        axios.post('/api/value', {value: value})
            .then(response => {
                if(response.data.success) {
                    console.log('response', response)
                    //리스트 안에 값을 넣어주기. 원래 있던 lists가 있으면 그 뒤에 넣어줘야함.
                    setLists([...lists, response.data])
                    // 입력칸에 치고 확인누르고 나서 다시 빈칸으로 만들기 위해서.
                    setValue("");
                } else {
                    alert('값을 DB에 넣는데 실패하였습니다.')
                }
            })

  }
  */
  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', { value: value })
      .then(response => {
        if (response.data.success) {
          console.log('response', response)
          setLists([...lists, response.data])
          setValue("");
        } else {
          alert('값을 DB에 넣는데 실패했습니다.')
        }
      })
  }
/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div classNAme="container">

            {lists && lists.map((list, index) => (
                <li key={index}>{list.value} <li>
            ))}
            <br />
            <form className="example" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="입력해주세요..."
                    onChange={changeHandler}
                    //value는 state의 value.
                    value={value}
                />
                <button type="submit">확인</button>
            </form>
        </div>
      </header>
    </div>
  );
}
*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists && lists.map((list, index) => (
            <li key={index}>{list.value} </li>
          ))}
          <br />
            안녕하세요.
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요..."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">확인.</button>
          </form>
        </div>
      </header>
    </div>
  );
}
export default App;