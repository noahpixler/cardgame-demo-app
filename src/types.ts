export type RoundScore = {
  player: string;
  score: number;
};

export type Round = {
  roundNumber: number;
  scores: RoundScore[];
};

export type GameSession = {
  id: string;
  gameName: string;
  players: string[];
  startTime: string;
  endTime?: string;
  rounds: Round[];
  winner: string;
};

export type GameTemplate = {
    id: string;
    gameName: string;
    minPlayers: string;
    maxPlayers: string;
    rounds: number;
    scoringType: string;
    rules: string;
}