export default async function sendApiRequest(
	relativeUrl: string,
	method: "GET" | "POST" | "PUT" | "DELETE",
	body?: any
): Promise<any> {
	try {
		const res = await fetch(relativeUrl, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch ${relativeUrl}: ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}
