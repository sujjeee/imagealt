export default async function handler(req, res) {
  const { imageUrl } = req.query;

  // POST request to Replicate to start the alt generation process
  let startResponse = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
    },
    body: JSON.stringify({
      version:
        "2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
      input: { image: imageUrl },
    }),
  });

  let jsonStartResponse = await startResponse.json();
  let endpointUrl = jsonStartResponse.urls.get;

  // GET request to get the status of the alt generation process & return the result when it's ready
  let altText = null;
  while (!altText) {
    // Loop in 500ms intervals until the alt text is ready
    let finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
      },
    });
    let jsonFinalResponse = await finalResponse.json();
    if (jsonFinalResponse.status === "succeeded") {
      altText = jsonFinalResponse.output.split("Caption: ")[1];
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  res.status(200).json(altText ? altText : "Opps! Failed to generate alt text");
}