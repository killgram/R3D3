import axios from "axios";
import { DiscordConfig, WebhookConfig } from "../../configurations";
import { getCurrentDate } from "../../utils";

const skillsDaemon = async () => {
  const { username, content, color } = WebhookConfig.SkillsDaemon;
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
  await axios.post(DiscordConfig.skills_daemon, params);
};

export { skillsDaemon };
