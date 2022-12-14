import axios from "axios";
import { DiscordConfig, WebhookConfig } from "../../configurations";
import { getCurrentDate } from "../../utils";

const lunaticDaemon = async () => {
  const { username, content, color } = WebhookConfig.LunaticDaemon;
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
  await axios.post(DiscordConfig.lunatic_daemon, params);
};

export { lunaticDaemon };
