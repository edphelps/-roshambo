
// CLASS TO REPRESENT A Hand: rock, paper, or scissors
class Hand {
  constructor(sHand) {
    this.sHand = sHand;
  }

  setBeats(oOtherHand) {
    this.beats = oOtherHand;
  }

  isWinner(oOtherHand) {
    return (this.beats === oOtherHand);
  }
}

// SINGLETON FOR THE TYES OF Hand
const ROCK = new Hand("rock");
const PAPER = new Hand("paper");
const SCISSORS = new Hand("scissors");
ROCK.setBeats(SCISSORS);
PAPER.setBeats(ROCK);
SCISSORS.setBeats(PAPER);

// GET PLAYER'S Hand AS STRING
const sHandOpponent = process.argv[2].slice(process.argv[2].indexOf("=") + 1);

// CONVERT PLAYER'S Hand TO A Hand OBJECT
let oHandOpponent = null;
switch (sHandOpponent) {
  case ROCK.sHand:
    oHandOpponent = ROCK;
    break;
  case PAPER.sHand:
    oHandOpponent = PAPER;
    break;
  case SCISSORS.sHand:
    oHandOpponent = SCISSORS;
    break;
  default:
    console.log(`ERROR: unrecognized player move: ${sHandOpponent}`);
    console.log("Usage:");
    console.log("   node app.js --move=rock");
    console.log("   node app.js --move=paper");
    console.log("   node app.js --move=scissors");
}

// get a random hand: rock, paper, or scissors
function handRandom() {
  const i = Math.floor(Math.random() * 3);
  switch (i) {
    case 0: return ROCK;
    case 1: return PAPER;
    case 2: return SCISSORS;
    default: return null; // won't occur, added for linter's benefit
  }
}

// if user entered correct command line hand gesture
if (oHandOpponent) {
  const oHandComputer = handRandom();
  console.log(`YOU vs COMPUTER: ${oHandOpponent.sHand} vs. ${oHandComputer.sHand}`);
  if (oHandComputer.isWinner(oHandOpponent))
    console.log("Computer wins!");
  else if (oHandOpponent.isWinner(oHandComputer))
    console.log("You win!");
  else {
    console.log("Tie!");
  }
}
