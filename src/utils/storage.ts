import type { GameSession } from "../types";

const SESSION_KEY = "sessions";
const PLAYER_KEY = "players";

export function getSessions(): GameSession[] {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || "[]");
}

export function saveSession(session: GameSession) {
  const sessions = getSessions();

  sessions.push(session);

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(sessions)
  );
}

export function getPlayers(): string[] {
  return JSON.parse(
    localStorage.getItem(PLAYER_KEY) || "[]"
  );
}

export function savePlayer(playerName: string) {
  const players = getPlayers();

  if (!players.includes(playerName)) {
    players.push(playerName);

    localStorage.setItem(
      PLAYER_KEY,
      JSON.stringify(players)
    );
  }
}