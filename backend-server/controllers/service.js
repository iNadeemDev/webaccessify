import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import UserModal from "../models/Users.js";
import ConfigModal from "../models/Configs.js";

// current filename and dir path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getConfigs = async (req, res) => {
    try {
        const apiKey = req.query.apiKey;
        if (!apiKey) {
            throw new Error('API key not provided');
        }

        const user = await UserModal.findOne({ clientKey: apiKey }).populate('config');
        if (!user) {
            throw new Error('User not found');
        }

        const config = user.config;
        if (!config) {
            throw new Error('User has no config');
        }
        
        const respConfig = {
            client: {
                widget_status: config.widStatus
            },
            btn: {
                btn_location: config.wid_location,
                btn_size: config.wid_size,
                btn_color: config.btn_color
            },
            widget: {
                widget_primary_color: config.primary_color,
                widget_secondary_color: config.secondary_color,
                widget_headings_color: config.headings_color
            }
        }
        console.log(respConfig)
        res.status(200).json(respConfig);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error getting config data' });

    }


}

export const getScript = async (req, res) => {
    try {
        const apiKey = req.query.clientKey
        const origin = req.get('Origin');
        const referrer = req.get('Referer');
        const user = await UserModal.findOne({ clientKey: apiKey });
        console.log(user)
        if (user) {
            // res.sendFile(path.join(__dirname, '../wafy/js/App.js'));
            const template = fs.readFileSync(path.join(__dirname, '../wafy/js/App.js'), 'utf8');
            const rendered = template.replace('var apiKey = null;', `var apiKey = '${apiKey}';`);

            // Send the rendered file to the client
            res.send(rendered);

            // origin and referrer
            //console.log(`origin= ${origin}`)
            //console.log(`referer= ${referrer}`)
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        console.log("Internal Server Error: " + err);
    }
}