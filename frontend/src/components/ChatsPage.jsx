/* eslint-disable react/prop-types */
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  //   const chatprop = useMultiChatLogic(
  //     "88cc7c3f-46c7-4409-afff-d96eaf2886c0",
  //     props.user.username,
  //     props.user.secret
  //   );
  return (
    //   <MultiChatSocket {...chatprop} />
    //   <MultiChatWindow {...chatprop} style={{ height: "100vh" }} />
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="88cc7c3f-46c7-4409-afff-d96eaf2886c0"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
