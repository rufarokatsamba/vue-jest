import { v4 } from 'uuid';

// const messages = [{

//     id: v4(),
//     sender:"M",
//     content: "Hello. This is customer support."

// }];
const messages = [];
export const ChatMessageService = (message =_messages) =>({
    async getMessages(){
        
        return messages;

    },
    async submitMessage({sender, content}){

        messages.push({
            sender,
            content,
            id: v4()
        })

    },
    subscribe(){
        
        return function*(){

            console.log("You subscribed");
            
        }

    }
})