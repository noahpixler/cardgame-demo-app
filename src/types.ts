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