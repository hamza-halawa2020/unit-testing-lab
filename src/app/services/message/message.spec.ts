import { MessageService } from "./message.service"

describe('Testing MessageService',()=>{
    let messageService:MessageService;
    beforeEach(()=>{
        messageService=new MessageService()
    })
    //test messages if its empty
    it('test messages array if its empty',()=>{
        expect(messageService.messages.length).toBe(0)
    })
    //test messages after calling add function
    it('test messages after calling add function',()=>{
        messageService.add('message 1');
        messageService.add('message 2');
        messageService.add('message 3');
        expect(messageService.messages.length).toBe(3)
        expect(messageService.messages[1]).toBe('message 2')
    })
    //test messages after calling clear function

    it('test messages after calling clear function',()=>{
        messageService.add('message 1');
        messageService.add('message 2');
        messageService.add('message 3');
        messageService.clear()
        expect(messageService.messages.length).toBe(0)
    })

})