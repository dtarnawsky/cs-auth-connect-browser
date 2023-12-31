import { AuthConnect, AuthResult } from '@ionic-enterprise/auth';
import { webIonicAuthOptions } from '../../environments/environment';

// Can be removed after https://ionic-cloud.atlassian.net/browse/WN-1043 resolved
export async function checkAuthResult(authResult: AuthResult) {
    if (!authResult) {
        throw new Error(`authResult is empty`);
      }
    if (authResult.provider == undefined) {
        alert('WN-1043 IS NOT FIXED YET. APPLYING A HACK TO GET PAST THE PROBLEM');
        authResult.provider = {
            options: webIonicAuthOptions,
            config: { url: '' },
            authorizeUrl: '',
            manifest: await AuthConnect.fetchManifest(webIonicAuthOptions.discoveryUrl)
        };
    }
}