# VendingMachine

This project is a solution to a specification of the operaiton of a hypothetical vending machine.

I wrote this in Angular, and it can be accessed here: http://vendingmachine.chrisbezzina.com/

Here are the assumpions I've made:
1. Only tracking cash as a total, I'm not tracking each size of coin or note individually.
2. The cash held in the machine and amount paid by card are only shown in the admin view, and not visible to the end user.
3. The flavours and prices of the drinks cannot be modified, and no new flavours can be created. If I were to keep working at the project then editing the drniks list would be the next feature added.
4. I'm tracking the history of the card payments made with a timestamp for each payment. I haven't done this for cash payments or tracking what drinks are purchased. 
