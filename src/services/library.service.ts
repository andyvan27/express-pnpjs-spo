import * as dotenv from 'dotenv';
import { Configuration } from "@azure/msal-node";
import { readFileSync } from 'fs';
import { SPDefault } from "@pnp/nodejs";
import { spfi } from "@pnp/sp";
import "@pnp/sp/webs/index.js";
import "@pnp/sp/lists/index.js";
import "@pnp/sp/items/index.js";

dotenv.config();

const certPrivateKey = readFileSync(process.env.CERT_PATH as string);

const config: Configuration = {
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}/`,
    clientId: process.env.CLIENT_ID as string,
    clientCertificate: {
      thumbprint: process.env.CERT_THUMBPRINT as string,
      privateKey: certPrivateKey.toString(),
    },
  },
};

// Initialized PnPjs with MSAL Authentication (App Only)
const sp = spfi().using(SPDefault({
  baseUrl: process.env.TARGET_SITE_URL,
  msal: {
    config: config,
    scopes: [`https://${process.env.TENANT_NAME}/.default`]
  }
}));

const docLib = sp.web.lists.getByTitle("Documents");

export async function getItems() {
  const items = await docLib.items.select("ID", "Title", "FileLeafRef")();
  return items;
}

export async function getItemsByFilter(filter: string) {
  const items = await docLib.items.filter(`substringof('${encodeURIComponent(filter)}', FileLeafRef)`).select("ID", "Title", "FileLeafRef")();
  return items;
}

export async function getItemsByCAML(camlFilter: string) {  
  const camlQuery = {
    ViewXml: `
      <View>        
        <Query>
          <Where>
            <Contains>
              <FieldRef Name='FileLeafRef' />
              <Value Type='Text'>${camlFilter}</Value>
            </Contains>
          </Where>
        </Query>
      </View>`
  };
  const items = await docLib.getItemsByCAMLQuery(camlQuery, "FileLeafRef", "FileRef", "LinkFilename");
  return items;
}