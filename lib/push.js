import Push from 'push.js';

export default function initPush() {
    Push.Permission.request();
}
