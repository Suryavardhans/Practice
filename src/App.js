import React from "react";

// import Form from "./Components/Form";
// import Inlines from "./Components/Inlines";
// import StylesSheet from "./Components/StylesSheet";

// import NameListId from "./NameListId";
// import NameList from "./NameList";
// import UserGreeting from "./UserGreeting";
// import ParentComponent from "./Components/ParentComponent";
// import EventBind from "./Components/EventBind";
// import ClassClick from "./Components/ClassClick";
// import FunctionClick from "./Components/FunctionClick";
// import Previoustate from "./Components/Previoustate";
// import Counter from "./Components/Counter";
// import Message from "./Components/Message";
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
import './App.css';
// import ComponentDidmountFunction from "./Components/ComponentDidmountFunction";
// import HookMouse from "./Components/HookMouse";
// import ComponentDidmountClass from "./Components/ComponentDidmountClass";
// import UseContextHook1 from "./Components/UseContextHook1";
// import HookCounterThree from "./Components/HookCounterThree";
// import HookObject from "./Components/HookObject";
// import HookState2 from "./Components/HookState2";
// import HookState1 from "./Components/HookState1";
import AxiosGet from "./Components/AxiosGet";
// import Posts from "./Components/Posts";
// import ContextC from "./Components/ContextC";
// import { UserProvider } from "./Components/userContext";
// import ClickCounterTwo from "./Components/ClickCounterTwo";
// import HoverCounterTwo from "./Components/HoverCounterTwo";
// import ClickCounter from "./Components/ClickCounter";
// import ClickCounterTwo from "./Components/ClickCounterTwo";
// import HoverCounterTwo from "./Components/HoverCounterTwo";
// import CounterRenderProps from "./CounterRenderProps";
// import UserRenderProps from "./UserRenderProps";
// import HoverCounter from "./Components/HoverCounter";
// import FRParent from "./Components/FRParent";
// import CallBackRefs from "./Components/CallBackRefs";
// import FocusInputRef from "./Components/FocusInputRef";
// import RefsDemo from "./Components/RefsDemo";
// import ParentMemo from "./Components/ParentMemo";
// import LifecycleC from "./Components/LifecycleC";
// import LifecycleA from "./Components/LifecycleA";

export const userContext=React.createContext()
 export const channelContext=React.createContext()

const App=()=>{
  return(
  <div className="center">
  {/* {/* <Greet name='Surya'heroName='Superman'> */}
    {/* //  <p>This is Children Component</p></Greet> */}

  {/* <button>Action</button> */}
  {/* <Greet  name='Greeshma' heroName='WonderWoman'/> */}
  {/* <Welcome name='Suman' heroName='BatMan'/>  */}
  {/* <Message /> */}
  {/* <Counter /> */}
  {/* <Previoustate /> */}
  {/* <FunctionClick /> */}
  {/* <ClassClick /> */}
  {/* <EventBind /> */}
  {/* <ParentComponent /> */}
  {/* <UserGreeting /> */}
  {/* <NameList /> */}
  {/* <NameListId /> */}
  {/* <StylesSheet primary={true}/> */}
  {/* <Inlines /> */}
  {/* <Form /> */}
  {/* <LifecycleA /> */}
 {/* <LifecycleC /> */}
 {/* <ParentMemo /> */}
     {/* <RefsDemo /> */}
     {/* <CallBackRefs /> */}
  {/* <FocusInputRef /> */}
    {/* <FRParent /> */}
   {/* <ClickCounter name="Surya" /> */}
    {/* <HoverCounter /> */}
    {/* <ClickCounterTwo />
    <HoverCounterTwo />
    <UserRenderProps render={(isLoggedIn)=>isLoggedIn ?"Surya":'Guest'} /> */}
  {/* <CounterRenderProps 
  render={(count,incrementCount)=>(
    <ClickCounterTwo count={count} incrementCount={incrementCount} />)}
    />
    <CounterRenderProps
    render={(count,incrementCount)=>(
      <HoverCounterTwo count={count} incrementCount={incrementCount}/>
    )}
    // /> */}
    {/* <UserProvider value="Surya">
   <ContextC />
  </UserProvider> */}
  {/* <Posts /> */}
  <AxiosGet />
  {/* <HookState1 /> */}
  {/* <HookState2 /> */}
  {/* <HookCounterThree /> */}
  {/* <HookObject /> */}
{/*   
  <userContext.Provider value='Surya'>
    <channelContext.Provider value='vardhan'>
  <UseContextHook1 />
  </channelContext.Provider>
  </userContext.Provider> */}
{/* <ComponentDidmountClass /> */}
{/* <ComponentDidmountFunction /> */}
{/* <HookMouse /> */}


  </div>

  )
}
export default App;