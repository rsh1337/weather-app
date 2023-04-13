import geoip from 'geoip-lite';

export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const geo = geoip.lookup(ip);
    const city = geo ? geo.city : 'unknown';
    res.status(200).json({ city });
}
