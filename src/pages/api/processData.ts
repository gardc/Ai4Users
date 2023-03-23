import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    try {
        const response = await fetch('http://64.226.100.80/process_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            console.error('Error in API request:', await response.text());
            res.status(response.status).json({ error: 'API request failed' });
            return;
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in API route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default handler;
