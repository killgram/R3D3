import axios from "axios";
import { DiscordConfig, WebhookConfig } from "../../configurations";
import { getCurrentDate } from "../../utils";

const accessDaemon = async () => {
  const { username, content, color } = WebhookConfig.AccessDaemon;
  const params = {
    username: username,
    embeds: [
      {
        title: content,
        color: color,
        fields: [
          {
            name: "Timestamp",
            value: getCurrentDate(),
          },
        ],
      },
    ],
  };
  await axios.post(DiscordConfig.access_daemon, params);
};

export { accessDaemon };
