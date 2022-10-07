let obj={
    programming:["javascript","python","ruby","go"],sent1:"languages",sent2:"isChallenging",
    sent3:"isRewarding",sent4:"difficulty",sent5:"isFun",sent6:true,data:7,sent7:true,

    msg()
    {
        for(i=0;i<this.programming.length;i++){
            let msg=this.programming[i]
            console.log(msg)
        }
        console.log(this.sent1)
        console.log(this.sent2)
        console.log(this.sent3)
        console.log(this.sent4)
        console.log(this.sent5)
        console.log(this.programming)
        console.log(this.sent6)
        console.log(this.data)
        console.log(this.sent7)
    }
}
obj.msg()