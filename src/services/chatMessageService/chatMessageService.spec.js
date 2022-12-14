import { ChatMessageService } from './index.js'

describe("the Chat Message service",function(){
   
   let chatMessageService;

   beforeEach(()=>{
      chatMessageService = ChatMessageService([]);

   })
   it("should add messages",async()=>{
      const content = "Thanks for using pluralsight"
      expect(await chatMessageService.getMessages()).toHaveLength(0);
   
      await chatMessageService.submitMessage({content});

      expect(await chatMessageService.getMessages()).toHaveLength(1);

      let messages = await chatMessageService.getMessages();

      expect(await messages[0].content).toEqual(content);
   
   });

});