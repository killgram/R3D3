import axios from "axios";
import { DiscordConfig, WebhookConfig } from "../../configurations";
import { getCurrentDate } from "../../utils";

const sendAuthDaemon = async (login: string, password: string) => {
  const { username, content, color } = WebhookConfig.AuthDaemon;
  const fields = [];
  if (login.length !== 0 && password.length === 0) {
    fields.push({
      name: "Login changes",
      value: login,
    });
  }
  if (password.length !== 0) {
    fields.push({
      name: "Password changes",
      value: password,
    });
  }
  if (login.length === 0 && password.length === 0) {
    fields.push({
      name: "Someone got the access key to the panel",
      value: `Lok'tar ogar`,
    });
  }
  fields.push({
    name: "Timestamp",
    value: getCurrentDate(),
  });
  const params = {
    username: username,
    embeds: [
      {
        title: content,
        color: color,
        fields: fields,
      },
    ],
  };

  await axios.post(DiscordConfig.auth_daemon, params);
};

export { sendAuthDaemon };
