import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const content = [
  {
    tab: "section 1",
    content : "CONTENT1",
    //컴포넌트도 가능! content : <Compo />
  },
  {
    tab: "section 2",
    content : "CONTENT2",
    //컴포넌트도 가능! content : <Compo />

  }

]

//useTabs 

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || !Array.isArray(allTabs) ){
    return;
  };
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  return {
    currentItem : allTabs[currentIndex],
    changeItem : setCurrentIndex
  };
}

//useEffect 기본

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div className="App">
      {content.map((section, index)=><button onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>
      {currentItem.content}
      </div>
    </div>
    
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

