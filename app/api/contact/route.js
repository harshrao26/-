export async function POST(req) {
  try {
    const body = await req.json();

    console.log(body);

    const gasWebhookUrl = "https://script.google.com/macros/s/AKfycbxqv6zG4FWGDN9DONYx_KC3HSMuDhUieZi5H0vjA39UceGSKdKKiPkoGgSnllyapU-e1Q/exec"
    const response = await fetch(gasWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const result = await response.json();

    return Response.json({ success: true, data: result });

  } catch (error) {
    console.error("Error in Next.js API:", error);
    return Response.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}