import './CCPHome.css';
import Navbar from '../navbar/Navbar';
import { useState, useEffect } from 'react';
import Call from '../call/Call';
import Chat from '../chat/Chat';
import Task from '../task/Task';
import Setting from '../settings/Setting';
import NumPad from '../numpad/Numpad';
import QuickConnect from '../quick-connects/QuickConnect';
import InitializeCCP from '../../scripts/InitCCP';
import CreateTask from '../create-task/CreateTask';

const CCPHome = () => {
  const [currentPage, setCurrentPage] = useState('Call');

  useEffect(() => {
    // Uncomment below code to initialize CCP panel and subscribe to connect events

    // const ccpContainerDiv = document.getElementById("ccp-container")!;
    // const instanceURL = "instance URL";
    // const instanceRegion = "us-east-1";
    // InitializeCCP(ccpContainerDiv, instanceURL, instanceRegion);

    // // Subscribe to events
    // connect.core.onAuthorizeSuccess(onAuthSuccessHandler);
    // connect.core.onInitialized(onInitSuccessHandler);
    // connect.core.onAuthFail(onAuthFailHandler);
    // console.info("LOGGING CONTACT INFO: ", connect.contact);
  }, []);

  const onAuthSuccessHandler = () => {
    console.log("Authorization successful.........");
  }

  const onInitSuccessHandler = () => {
    console.log("Initialization successful.........");
    setCurrentPage("Chat");
    console.log("LOGGING AGENT INFORMATION: ", connect.agent);
  }

  const onAuthFailHandler = () => {
    console.log("Authorization failed.........");
  }

  const currentActiveWindowCallback = (currentActiveWindow: string) => {
    console.log("Current Active Window is: ", currentActiveWindow);
    setCurrentPage(currentActiveWindow);
  }

  return (
    <div className="container-ccp" id='ccp-container'>
      <Navbar currentActiveWindowCallBack={currentActiveWindowCallback} />
      {currentPage === 'Call' &&
        <Call currentActiveWindowCallBack={currentActiveWindowCallback} />}
      {currentPage === 'Chat' &&
        <Chat />}
      {currentPage === 'Task' &&
        <Task currentActiveWindowCallBack={currentActiveWindowCallback} />}
      {currentPage === 'Settings' &&
        <Setting />}
      {currentPage === 'QuickConnects' &&
        <QuickConnect currentActiveWindowCallBack={currentActiveWindowCallback} />}
      {currentPage === 'Numpad' &&
        <NumPad currentActiveWindowCallBack={currentActiveWindowCallback} />}
      {currentPage === 'CreateTask' &&
        <CreateTask currentActiveWindowCallBack={currentActiveWindowCallback} />}
    </div>
  )
}

export default CCPHome;