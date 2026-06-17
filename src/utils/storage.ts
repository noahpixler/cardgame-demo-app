import type { GameSession } from "../types";
import type { GameTemplate } from "../types";

const SESSION_KEY = "sessions";
const PLAYER_KEY = "players";
const TEMPLATE_KEY = "gameTemplates";

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

export function getTemplates(): GameTemplate[] {
    return JSON.parse(
        localStorage.getItem(TEMPLATE_KEY) || "[]"
    );
}

export function saveTemplate(template: GameTemplate) {
    const templates = getTemplates();

    templates.push(template);
    localStorage.setItem(
        TEMPLATE_KEY,
        JSON.stringify(templates)
    );
}
