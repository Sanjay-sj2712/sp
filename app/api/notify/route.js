export async function POST() {
    try {
        const token = "8926644518:AAH7fwxi-pgpxPAm7xSorTvvNXG1bzjznUc";
        const chatId = "1359922106";

        if (!token || !chatId) {
            return Response.json(
                { success: false, error: "Telegram environment variables are missing" },
                { status: 500 }
            );
        }

        const message = "🔔 Someone clicked “Venam...” ❤️";

        const response = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok || !data.ok) {
            console.error("Telegram error:", data);

            return Response.json(
                { success: false, error: "Failed to send Telegram notification" },
                { status: 500 }
            );
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Notification error:", error);

        return Response.json(
            { success: false, error: "Something went wrong" },
            { status: 500 }
        );
    }
}