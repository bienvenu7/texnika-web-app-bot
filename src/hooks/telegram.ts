import { TelegramWebApps } from "telegram-webapps-types";

export const tg: TelegramWebApps.WebApp =
  typeof window !== "undefined" && (window as any).Telegram?.WebApp;

const telegram = () => {
  const user = tg?.initDataUnsafe?.user;
  const queryId = tg?.initDataUnsafe?.query_id;

  return { user, queryId };
};

export default telegram;
