const app = Vue.createApp({

    data() {
        return {
            currentPlayer : "red",
            winningValue : [["blank", "blank", "blank"],["blank", "blank", "blank"],["blank", "blank", "blank"]],
            winner : "blank"
        }
    },
    methods:{
        changeTurn(e){
            // set color to the cell
            var cellID = e.srcElement.id
             console.log("Tới được đây rồi ")
            var currentCell = document.getElementById(cellID)

            if(currentCell.style.backgroundColor !== "red" && currentCell.style.backgroundColor !== "blue" ){
                currentCell.style.backgroundColor = this.currentPlayer
                // get lang, lat from cell id

                var row = Number(e.srcElement.id[0])
                var col = Number(e.srcElement.id[1])

                // set value in winningValue
                this.winningValue[row][col] = this.currentPlayer

                var winner = "blank"
            
                //check winning in a row
                var count = 1
                var leftCol = col -1
                while (leftCol >= 0 && this.winningValue[row][leftCol] == this.currentPlayer){
                    count++
                    leftCol--
                }

                var rightCol = col + 1;

                while (rightCol <= 2 && this.winningValue[row][rightCol] == this.currentPlayer){
                    count++
                    rightCol++
                }

                if(count == 3){
                    console.log(`The winner is ${this.currentPlayer}`)
                }


                //check winning in a column
                count = 1
                var upperRow = row + 1

                while (upperRow <= 2 && this.winningValue[upperRow][col] == this.currentPlayer){
                    count++
                    upperRow++

                }

                var lowerRow = row - 1
                while (lowerRow >= 0 && this.winningValue[lowerRow][col] == this.currentPlayer){
                    count++
                    lowerRow--
                }

                if(count == 3){
                    console.log(`The winner is ${this.currentPlayer}`)
                }

                //check winning in a diagonal
                count = 1

                upperRow = row + 1
                rightCol = col + 1
                while(upperRow <= 2 && rightCol <= 2 && this.winningValue[upperRow][rightCol] == this.currentPlayer){
                    count++
                    upperRow++
                    rightCol++
                }

                lowerRow = row - 1
                leftCol = col - 1
                while(lowerRow >=0 && leftCol >= 0 && this.winningValue[lowerRow][leftCol] == this.currentPlayer){
                    count++
                    leftCol--
                    lowerRow--
                }

                //another possibility in diagonal
                count = 1

                leftCol = col - 1
                upperRow = row + 1
                while(upperRow <= 2 && leftCol >= 0 && this.winningValue[upperRow][rightCol] == this.currentPlayer){
                    count++
                    upperRow++
                    leftCol--
                }

                rightCol = col + 1
                lowerRow = row - 1
                while(lowerRow >= 0 && rightCol <= 2 && this.winningValue[lowerRow][rightCol] == this.currentPlayer){
                    count++
                    lowerRow--
                    rightCol++
                }

                if(count == 3){
                    console.log(`The winner is ${this.currentPlayer}`)
                }

                // set new turn
                if(this.currentPlayer == "red"){
                    this.currentPlayer = "blue"
                    console.log("endTurn")
                }else{
                    this.currentPlayer = "red"
                }


            
        }
        }
    }
})

app.mount("#boardgame")