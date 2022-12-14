import axios from "axios";
import { DiscordConfig, WebhookConfig } from "../../configurations";
import { getCurrentDate } from "../../utils";

const supportDaemon = async () => {
  const { username, content, color } = WebhookConfig.SupportDaemon;
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
  await axios.post(DiscordConfig.support_daemon, params);
};

export { supportDaemon };
